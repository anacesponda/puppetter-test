"use strict";

const puppeteer = require("puppeteer");
const cookies = require('./cookies.json');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setCookie(...cookies)
  await page.goto("https://paulatest.udemy.com/organization-manage/insights/user-activity/", {waitUntil: 'networkidle0'});
  await page.pdf({ path: "./google.pdf", format: "A4", printBackground: true });
  await browser.close();
})();
