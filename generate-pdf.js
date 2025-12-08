const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    // Path to the Linux version of Brave you just installed
    executablePath: '/usr/bin/brave-browser', 
    headless: 'new',
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--disable-gpu', 
      '--disable-dev-shm-usage' // prevents crashes in low-memory environments like WSL
    ]
  });

  const page = await browser.newPage();
  
  // Load your HTML file
  const html = fs.readFileSync(path.join(process.cwd(), 'cv.html'), 'utf8');
  await page.setContent(html, { waitUntil: 'networkidle0' });

  // Generate the PDF
  await page.pdf({
    path: 'cv.pdf',
    format: 'Letter',
    printBackground: true,
    margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' }
  });

  await browser.close();
  console.log("PDF generated successfully!");
})();