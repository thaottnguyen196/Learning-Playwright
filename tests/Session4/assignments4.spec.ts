import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
    console.log('beforeEach: Navigate tp the start page.');
    await page.goto('https://the-internet.herokuapp.com/');
});

test('tc0001',{tag:['@regression','@smoke']}, async ({ page }) => {
    // await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:"Checkboxes"}).click();
    const checkboxes = page.locator('input[type="checkbox"]');
    await checkboxes.nth(0).check();
    await checkboxes.nth(1).uncheck();
});

test('tc002',{tag:['@regression','@smoke']}, async ({ page }) => {
    // await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:"Drag and Drop"}).click();
    const source=page.locator('#column-a');
    const target=page.locator('#column-b');
    await source.dragTo(target);
});

test('tc003',{tag:'@regression'}, async ({ page }) => {
    // await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:"Dropdown"}).click();
    await page.selectOption('#dropdown','Option 2');
    await page.selectOption('#dropdown',{ index: 1 });
    await page.selectOption('#dropdown',{ value:'2' });
});

test('tc005',{tag:'@regression'}, async ({ page }) => {
    // await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:"File Upload"}).click();
    // await expect(page.getByRole('heading', { name: 'File Uploader' })).toBeVisible();
    await expect(page.getByRole('heading')).toHaveText('File Uploader');
    await page.locator('#file-upload').setInputFiles('files/test.txt');
    await page.locator('#file-submit').click();
     await expect(page.locator('h3')).toHaveText('File Uploaded!');
  await expect(page.locator('#uploaded-files')).toHaveText('test.txt');
});

test('tc006',{tag:'@regression'}, async ({ page }) => {
    // await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:"Dynamic Loading"}).click();

    /*Dynamically Loaded Page Elements header is shown*/
    await expect(page.getByRole('heading', {name: 'Dynamically Loaded Page Elements'})).toBeVisible();

    await page.getByRole('link', {name:"Example 1: Element on page that is hidden"}).click();
    await expect(page.getByRole('heading', {name: 'Dynamically Loaded Page Elements'})).toBeVisible();

    await page.getByRole('button',{name:'Start'}).click();
    await expect(page.getByText('Hello World!')).toBeVisible({ timeout: 10000 });

});