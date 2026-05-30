const fs = require('fs');

// Spelling/name mapping dictionary
const nameTranslation = {
  'agrapan': 'Agra Pan',
  'bajji': 'Mirchi Bajji',
  'bakarwadi': 'Bhakarwadi',
  'boondhi mixture': 'Boondi Mixture',
  'cheka pakodi': 'Chekka Pakodi',
  'cornflex': 'Cornflakes Mixture',
  'df kajikallu': 'D/F Kajjikayalu',
  'powder kajikallu': 'Powder Kajjikayalu',
  'peta puri': 'Petapuri',
  'palli chekka': 'Palli Chikki',
  'papidi loose': 'Papdi Loose',
  'papidi pieces': 'Papdi Pieces',
  'panner jilebi': 'Paneer Jilebi',
  'sada laddu': 'Sadu Laddu',
  'sanna boondhi': 'Sanna Boondi',
  'sannapusa': 'Sanna Pusa',
  'vam kaja': 'Vamu Khajalu',
  'vam pusa': 'Vamu Pusa',
  'madata kaja': 'Madatha Kaja',
  'ice cream burfi': 'Icecream Burfi',
  'dry fruit mixture': 'Dry Fruits Mixture',
  'navratan mixture': 'Navratna Mixture',
  'sp doodh peda': 'Sp Doodh Peda',
  'variety mixture': 'Varity Mixture',
  'maramaralu mixture': 'Maramarala Mixture',
  'boondhi': 'Kaara Boondi',
  'saggubiyam chekkalu': 'Saggubiyyam Chekkalu',
  'challa chakralu': 'Chala Chakralu',
  'vam chakralu': 'Vam Chekkalu',
  'atukulu': 'Atukulu Mix',
  'dalmudi': 'Dal Mudi',
  'ghevar': 'Ghewar'
};

// 1. Read Vercel raw products string array
const rawProducts = JSON.parse(
  fs.readFileSync('/Users/surajsharma/.gemini/antigravity-ide/brain/9e7e4177-79e3-4f82-8f5f-2149e5911cd9/scratch/extracted_products.json', 'utf8')
);

// 2. Parse using eval to preserve reviews array and map by normalized/translated name
const vercelProductsMap = {};
for (const raw of rawProducts) {
  try {
    const parsed = eval('(' + raw + ')');
    const normName = parsed.name.toLowerCase().trim();
    const correctedName = nameTranslation[normName] || parsed.name;
    vercelProductsMap[correctedName.toLowerCase().trim()] = parsed;
  } catch (e) {
    console.error('Failed to parse raw product:', raw.substring(0, 100), e.message);
  }
}

console.log(`Parsed ${Object.keys(vercelProductsMap).length} vercel products with reviews.`);

// 3. Read current workspace products file
const fileContent = fs.readFileSync('/Users/surajsharma/new murali start /src/data/products.js', 'utf8');

// 4. Extract and parse products array
const startMarker = 'export const products = [';
const startIdx = fileContent.indexOf(startMarker);
if (startIdx === -1) {
  console.error("Couldn't find products array in products.js");
  process.exit(1);
}

const arrayStr = fileContent.substring(startIdx + startMarker.length - 1);
let bracketCount = 0;
let endIdx = -1;
for (let i = 0; i < arrayStr.length; i++) {
  if (arrayStr[i] === '[') bracketCount++;
  else if (arrayStr[i] === ']') {
    bracketCount--;
    if (bracketCount === 0) {
      endIdx = i + 1;
      break;
    }
  }
}

const workspaceProducts = eval('(' + arrayStr.substring(0, endIdx) + ')');
console.log(`Loaded ${workspaceProducts.length} workspace products.`);

// Helper function to clean dashes/em-dashes from a text string
function cleanDashes(text) {
  if (!text) return text;
  // Replace em-dashes and double-dashes with commas or colons
  return text
    .replace(/\s*—\s*meaning\s+['`"]([^'"`]+)['`"]\s*—\s*/gi, ', meaning "$1", ')
    .replace(/\s*--\s*meaning\s+['`"]([^'"`]+)['`"]\s*--\s*/gi, ', meaning "$1", ')
    .replace(/\s*—\s*/g, ', ')
    .replace(/\s*--\s*/g, ', ');
}

// 5. Merge reviews and clean dashes
let updatedCount = 0;
let defaultReviewsCount = 0;

for (const wp of workspaceProducts) {
  const normName = wp.name.toLowerCase().trim();
  const match = vercelProductsMap[normName];
  
  // Clean dashes from name, description, and tradition
  wp.name = cleanDashes(wp.name);
  wp.description = cleanDashes(wp.description);
  wp.tradition = cleanDashes(wp.tradition);
  
  if (match && match.reviews && match.reviews.length > 0) {
    // Import and map reviews correctly
    wp.reviews = match.reviews.map(r => ({
      name: cleanDashes(r.author || 'Anonymous'),
      location: 'Guntur',
      stars: r.rating || 5,
      text: cleanDashes(r.text)
    }));
    updatedCount++;
  } else {
    // Keep custom mock review but make sure to clean it
    wp.reviews = wp.reviews.map(r => ({
      name: cleanDashes(r.name),
      location: cleanDashes(r.location),
      stars: r.stars || 5,
      text: cleanDashes(r.text)
    }));
    defaultReviewsCount++;
  }
}

console.log(`Updated reviews for ${updatedCount} products. Kept default reviews for ${defaultReviewsCount} products.`);

// 6. Write back to src/data/products.js
const headerCode = fileContent.substring(0, startIdx);
const footerCode = fileContent.substring(startIdx + endIdx);
const newFileContent = headerCode + 'export const products = ' + JSON.stringify(workspaceProducts, null, 2) + ';\n' + footerCode;

fs.writeFileSync('/Users/surajsharma/new murali start /src/data/products.js', newFileContent, 'utf8');
console.log('Successfully wrote updated products database back to products.js.');
