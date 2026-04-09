import { test, expect } from '@playwright/test';

test('tc002', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:"Drag and Drop"}).click();
    const source=page.locator('#column-a');
    const target=page.locator('#column-b');
    await source.dragTo(target);
});