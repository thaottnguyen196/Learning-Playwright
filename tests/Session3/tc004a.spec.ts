import { test, expect } from '@playwright/test';

test('tc004a', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/');
    await page.getByRole('tab', {name:"iFrame"}).click();
    const frame = page.frameLocator('.single_tab_div resp-tab-content resp-tab-content-active');
    await frame.locator('#s').fill("Playwright");
    await frame.locator('.button_search').click();
    const message=frame.locator('.search_res');
    await expect(message).toHaveText('Sorry, no posts matched your criteria.');

});