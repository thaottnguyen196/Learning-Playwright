import { test, expect } from '@playwright/test';

test('tc003', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:"Dropdown"}).click();
    await page.selectOption('#dropdown','Option 2');
    await page.selectOption('#dropdown',{ index: 1 });
    await page.selectOption('#dropdown',{ value:'2' });
});