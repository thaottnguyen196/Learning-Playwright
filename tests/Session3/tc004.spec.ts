import { test, expect } from '@playwright/test';

test('tc004', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:"WYSIWYG Editor"}).click();
    const editorFrame = page.frameLocator('#mce_0_ifr') ;
    const editorBody = editorFrame.locator('body');
    await expect(editorBody).toHaveText('Your content goes here.');
    await editorBody.click();
    await editorBody.fill('Hello, how are you?');
    await expect(editorBody).toHaveText('Hello, how are you?');
});