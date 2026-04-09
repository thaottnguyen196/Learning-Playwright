import { test, expect } from '@playwright/test';

test('tc005', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:"File Upload"}).click();
    expect(page.getByRole('heading')).toHaveText('File Uploader');
    await page.locator('#file-upload').setInputFiles('files/test.txt');
    await page.locator('#file-submit').click();
     await expect(page.locator('h3')).toHaveText('File Uploaded!');
  await expect(page.locator('#uploaded-files')).toHaveText('test.txt');
});