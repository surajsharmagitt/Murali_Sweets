import https from 'https';

const fetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

async function main() {
  try {
    const html = await fetchUrl('https://murali-sweets-seven.vercel.app/shop');
    
    // Look for product-grid
    console.log('HTML Length:', html.length);
    const index = html.indexOf('product-grid');
    if (index !== -1) {
      console.log('Found product-grid at index:', index);
      console.log('Snippet:', html.substring(index - 20, index + 100));
    } else {
      console.log('product-grid not found in raw HTML. (Expected for React SPAs)');
    }
  } catch (err) {
    console.error('Error fetching:', err);
  }
}

main();
