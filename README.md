# POC for controlling Puppeteer from the web browser

This demo is using same approach as [puppeteer-web](https://github.com/entrptaher/puppeteer-web) but I use the official web implementation and it works with latest Puppeteer versions without any patches or hacks.

The POC runs Puppeteer server and the browser locally (or in the cloud), but executes tests from the browser.

## Steps to run

1. `npm i` in `server` dir
2. `npm i` in `client` dir
3. In server directory run `npm run start`. This will start a proxy server.
4. In client directory run `npm run start` to build and run the client part.
5. Open `http://localhost:1234/` and click `Run Tests`. It should spawn Chromium and start a test.
