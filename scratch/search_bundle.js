const fs = require('fs');

const code = fs.readFileSync('/Users/surajsharma/.gemini/antigravity-ide/brain/9e7e4177-79e3-4f82-8f5f-2149e5911cd9/scratch/vercel_bundle.js', 'utf8');

// Find all occurrences of strings around 'kothapeta' or 'guntur' or 'shiva' or 'opp'
const keywords = ['kothapeta', 'guntur', 'shiva', 'opp', 'street', 'road', 'murali'];

for (const keyword of keywords) {
  let pos = 0;
  while (true) {
    pos = code.toLowerCase().indexOf(keyword.toLowerCase(), pos);
    if (pos === -1) break;
    
    // Extract a window of 100 characters around the hit
    const start = Math.max(0, pos - 50);
    const end = Math.min(code.length, pos + 50);
    const snippet = code.substring(start, end).replace(/\n/g, ' ');
    console.log(`Keyword [${keyword}] at pos ${pos}: ... ${snippet} ...`);
    
    pos += keyword.length;
    if (pos >= code.length) break;
  }
}
