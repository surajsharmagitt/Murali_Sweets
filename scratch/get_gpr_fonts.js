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
    const html = await fetchUrl('https://gpullareddysweets.com/');
    
    // Let's print out all lines in html containing M-Heading-Font or font-family
    const lines = html.split('\n');
    const matches = [];
    for (const line of lines) {
      if (line.includes('M-Heading-Font') || line.includes('font-stack-header') || line.includes('font-stack-body') || line.includes('font-family:')) {
        matches.push(line.trim());
      }
    }
    console.log('Matches:', matches.slice(0, 15));
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
