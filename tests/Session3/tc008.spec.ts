import { test, expect } from '@playwright/test';

test('tc008', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await expect(
    page.getByRole('heading', { name: 'Automation Testing Practice' })
  ).toBeVisible();

  // Handle dialog đúng cách
  const [dialog] = await Promise.all([
    page.waitForEvent('dialog'),
    page.getByRole('button', { name: 'Prompt Alert' }).click()
  ]);

  // Verify message (optional)
  expect(dialog.message()).toContain('Please enter your name');

  // Nhập value + OK
  await dialog.accept('Thu Thao');

  // Verify result
  await expect(
    page.getByText('Hello Thu Thao! How are you today?')
  ).toBeVisible();
});