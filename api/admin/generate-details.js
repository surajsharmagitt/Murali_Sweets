import { requireAdmin } from '../lib/verify-admin.js'
import { products } from '../../src/data/products.js'

const INGREDIENTS_KEYWORDS = [
  { term: 'cashew', label: 'Cashew' },
  { term: 'kaju', label: 'Cashew' },
  { term: 'almond', label: 'Almond' },
  { term: 'badam', label: 'Almond' },
  { term: 'pistachio', label: 'Pistachio' },
  { term: 'pista', label: 'Pistachio' },
  { term: 'sugar', label: 'Sugar' },
  { term: 'jaggery', label: 'Jaggery' },
  { term: 'bellam', label: 'Jaggery' },
  { term: 'ghee', label: 'Ghee' },
  { term: 'butter', label: 'Butter' },
  { term: 'clarified butter', label: 'Ghee' },
  { term: 'milk', label: 'Milk' },
  { term: 'kova', label: 'Milk' },
  { term: 'khoya', label: 'Milk' },
  { term: 'condensed milk', label: 'Milk' },
  { term: 'cardamom', label: 'Cardamom' },
  { term: 'elachi', label: 'Cardamom' },
  { term: 'saffron', label: 'Saffron' },
  { term: 'kesar', label: 'Saffron' },
  { term: 'besan', label: 'Gram Flour (Besan)' },
  { term: 'gram flour', label: 'Gram Flour (Besan)' },
  { term: 'maida', label: 'Maida Flour' },
  { term: 'wheat flour', label: 'Wheat Flour' },
  { term: 'rice flour', label: 'Rice Flour' },
  { term: 'coconut', label: 'Coconut' },
  { term: 'sesame', label: 'Sesame Seeds' },
  { term: 'nuvvulu', label: 'Sesame Seeds' },
  { term: 'peanut', label: 'Peanuts' },
  { term: 'palli', label: 'Peanuts' },
  { term: 'salt', label: 'Salt' },
  { term: 'oil', label: 'Oil' },
  { term: 'turmeric', label: 'Turmeric' },
  { term: 'chili', label: 'Chili Powder' },
  { term: 'pepper', label: 'Black Pepper' },
  { term: 'cumin', label: 'Cumin Seeds' }
]

function extractIngredients(text) {
  const lowercaseText = text.toLowerCase()
  const matched = new Set()
  for (const item of INGREDIENTS_KEYWORDS) {
    if (lowercaseText.includes(item.term)) {
      matched.add(item.label)
    }
  }
  return Array.from(matched)
}

export default async function handler(req, res) {
  // Auth check
  if (!requireAdmin(req, res)) return

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name } = req.body || {}
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Product name is required for generation' })
    }

    const searchName = name.trim().toLowerCase()

    // Step 1: Look up in existing static catalog
    const matchedProduct = products.find(
      p => p.name.toLowerCase() === searchName ||
           p.name.toLowerCase().includes(searchName) ||
           searchName.includes(p.name.toLowerCase())
    )

    if (matchedProduct) {
      return res.status(200).json({
        success: true,
        source: 'catalog',
        description: matchedProduct.description || `${matchedProduct.name} prepared fresh in the authentic sweet shop tradition of Guntur.`,
        ingredients: matchedProduct.ingredients || [],
        tradition_text: matchedProduct.tradition || `Traditionally served during Indian festivals and celebratory occasions.`,
      })
    }

    // Step 2: Query Wikipedia API
    let summaryText = ''
    try {
      const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name.trim())}`
      const wikiRes = await fetch(wikiUrl)
      if (wikiRes.ok) {
        const wikiData = await wikiRes.json()
        summaryText = wikiData.extract || ''
      }
    } catch (wikiErr) {
      console.warn('Wikipedia search failed:', wikiErr)
    }

    // Step 3: Query DuckDuckGo API (as fallback/additional source)
    if (!summaryText) {
      try {
        const ddgUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(name.trim())}&format=json`
        const ddgRes = await fetch(ddgUrl)
        if (ddgRes.ok) {
          const ddgData = await ddgRes.json()
          summaryText = ddgData.AbstractText || ''
        }
      } catch (ddgErr) {
        console.warn('DuckDuckGo search failed:', ddgErr)
      }
    }

    // Fallback if no external data was found
    if (!summaryText) {
      return res.status(200).json({
        success: true,
        source: 'fallback',
        description: `${name} prepared fresh in the authentic sweet shop tradition of Guntur.`,
        ingredients: ['Ghee', 'Sugar', 'Milk'], // standard default sweet base
        tradition_text: `Traditionally served in Andhra Pradesh and throughout India during celebratory occasions and family gatherings.`,
      })
    }

    // Compile dynamic results from external description
    const description = summaryText.length > 150 
      ? summaryText.substring(0, 150) + '...'
      : summaryText

    const ingredients = extractIngredients(summaryText)
    if (ingredients.length === 0) {
      ingredients.push('Sugar', 'Ghee', 'Milk') // fallback defaults
    }

    const tradition_text = summaryText.includes('origin') || summaryText.includes('history') || summaryText.includes('tradition')
      ? summaryText
      : `${name} is a beloved traditional snack. ${summaryText}`

    return res.status(200).json({
      success: true,
      source: 'internet',
      description,
      ingredients,
      tradition_text,
    })
  } catch (err) {
    console.error('Generator API Error:', err)
    return res.status(500).json({ error: 'Internal server error during generation' })
  }
}
