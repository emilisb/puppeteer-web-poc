const puppeteer = require('puppeteer/lib/cjs/puppeteer/web').default;

const runTest = async (serverAddr) => {
  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint: `ws://${serverAddr}`,
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();
    await page.goto('https://wix.com');

    await page.waitForXPath('//*[contains(text(), "Get Started")]', 2000);

    await page.close();
    await browser.close();

    alert('Test passed');
  } catch (e) {
    alert('Test failed');
  }
};

window.run = () => {
  runTest('0.0.0.0:4000');
};
