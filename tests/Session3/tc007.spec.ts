import { test, expect } from '@playwright/test';

test('tc007', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.getByRole('heading', {name: 'Automation Testing Practice'})).toBeVisible();

    await page.getByRole('textbox', {name:'name'}).fill('Thao');
    await expect(page.getByRole('textbox', {name: 'name'})).toHaveValue('Thao');

    await page.locator('#textarea').fill('Da Nang');
    await expect(page.locator('#textarea')).toHaveValue('Da Nang');

    await page.getByRole('textbox', {name:'name'}).clear();
    await page.locator('#textarea').clear();
});