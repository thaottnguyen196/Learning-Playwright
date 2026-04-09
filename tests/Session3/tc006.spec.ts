import { test, expect } from '@playwright/test';

test('tc006', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:"Dynamic Loading"}).click();

    /*Dynamically Loaded Page Elements header is shown*/
    await expect(page.getByRole('heading', {name: 'Dynamically Loaded Page Elements'})).toBeVisible();

    await page.getByRole('link', {name:"Example 1: Element on page that is hidden"}).click();
    await expect(page.getByRole('heading', {name: 'Dynamically Loaded Page Elements'})).toBeVisible();

    await page.getByRole('button',{name:'Start'}).click();
    await expect(page.getByText('Hello World!')).toBeVisible({ timeout: 10000 });

});