import https from 'https';
import fs from 'fs';
import path from 'path';

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
    const swiggy = await fetchUrl('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/swiggy.svg');
    const zomato = await fetchUrl('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/zomato.svg');
    
    console.log('Swiggy SVG:', swiggy);
    console.log('Zomato SVG:', zomato);
  } catch (err) {
    console.error('Error fetching:', err);
  }
}

main();
