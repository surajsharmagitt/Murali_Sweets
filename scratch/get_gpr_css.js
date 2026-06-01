import https from 'https';

const fetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

async function main() {
  try {
    const css = await fetchUrl('https://gpullareddysweets.com/cdn/shop/t/10/assets/custom.css?v=133017580722190203831779951789');
    
    const declarations = [];
    const lines = css.split('\n');
    for (const line of lines) {
      if (line.includes('font-family') || line.includes('font-face') || line.includes('Heading')) {
        declarations.push(line.trim());
      }
    }
    
    console.log('Font Declarations in GPR custom.css:', declarations.slice(0, 30));
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
