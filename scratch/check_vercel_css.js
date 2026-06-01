import https from 'https';

const fetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };
    https.get(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(fetchUrl(res.headers.location));
        return;
      }
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

async function main() {
  try {
    const html = await fetchUrl('https://murali-sweets-seven.vercel.app/');
    
    // Find CSS file link
    const regex = /href="([^"]+\.css)"/;
    const match = regex.exec(html);
    if (!match) {
      console.log('No CSS file link found in Vercel HTML!');
      return;
    }
    
    const cssUrl = 'https://murali-sweets-seven.vercel.app' + match[1];
    console.log('Fetching live CSS from:', cssUrl);
    
    const css = await fetchUrl(cssUrl);
    
    // Search for product-grid inside the compiled CSS
    const productGridMatches = [];
    const cssRules = css.split('}');
    for (const rule of cssRules) {
      if (rule.includes('product-grid')) {
        productGridMatches.push(rule.trim() + '}');
      }
    }
    
    console.log('Product Grid rules in compiled CSS:', productGridMatches);
  } catch (err) {
    console.error('Error fetching Vercel CSS:', err);
  }
}

main();
