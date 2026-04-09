import { test, expect } from '@playwright/test';

test.describe('DemoQA Elements Page - E2E Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/elements', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
  });

  test('Navigate to Text Box and submit form', async ({ page }) => {
    await page.locator('text=Text Box').click();
    await page.locator('#userName').fill('John Doe');
    await page.locator('#userEmail').fill('john@example.com');
    await page.locator('#currentAddress').fill('123 Street');
    await page.locator('#permanentAddress').fill('456 Street');

    await page.locator('#submit').scrollIntoViewIfNeeded();
    await page.locator('#submit').click();

    await expect(page.locator('#output')).toContainText('John Doe');
  });

  test('Expand checkbox tree and select multiple', async ({ page }) => {
    await page.locator('text=Check Box').click();
    await page.locator('.rct-collapse-btn').first().click();
    await page.locator('label:has-text("Desktop")').click();
    await page.locator('label:has-text("Documents")').click();

    await expect(page.locator('#result')).toContainText('desktop');
  });

  test('Select different radio options', async ({ page }) => {
    await page.locator('text=Radio Button').click();
    await page.locator('label:has-text("Yes")').click();
    await expect(page.locator('.text-success')).toHaveText('Yes');

    await page.locator('label:has-text("Impressive")').click();
    await expect(page.locator('.text-success')).toHaveText('Impressive');
  });

  test('Buttons: double & right click', async ({ page }) => {
    await page.locator('text=Buttons').click();

    await page.locator('#doubleClickBtn').dblclick();
    await expect(page.locator('#doubleClickMessage')).toBeVisible();

    await page.locator('#rightClickBtn').click({ button: 'right' });
    await expect(page.locator('#rightClickMessage')).toBeVisible();
  });

  test('Verify links open correct pages', async ({ page, context }) => {
    await page.locator('text=Links').click();

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.locator('#simpleLink').click()
    ]);

    await newPage.waitForLoadState('domcontentloaded');
    await expect(newPage).toHaveURL(/demoqa\.com/);
  });

  test('File upload control', async ({ page }) => {
    await page.locator('text=Upload and Download').click();
    await page.setInputFiles('#uploadFile', 'tests/fixtures/sample.txt');
    await expect(page.locator('#uploadedFilePath')).toContainText('sample.txt');
  });

  test('File download works', async ({ page }) => {
    await page.locator('text=Upload and Download').click();

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.locator('#downloadButton').click()
    ]);

    expect(await download.path()).not.toBeNull();
  });

  test('Dynamic properties appear after delay', async ({ page }) => {
    await page.locator('text=Dynamic Properties').click();
    await expect(page.locator('#enableAfter')).toBeDisabled();
    await page.waitForSelector('#enableAfter:enabled', { timeout: 10000 });
    await expect(page.locator('#enableAfter')).toBeEnabled();
  });

  test('All shown buttons should be enabled', async ({ page }) => {
    await page.locator('text=Buttons').click();
    const buttons = page.locator('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      await expect(buttons.nth(i)).toBeEnabled();
    }
  });

});
