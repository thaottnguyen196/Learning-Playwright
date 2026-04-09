import { chromium, type FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  // const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;