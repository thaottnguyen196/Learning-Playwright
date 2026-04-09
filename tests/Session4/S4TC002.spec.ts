import { test, expect } from '@playwright/test';

test('tc002', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
    //On the first item click "Add to cart"
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    //The button text changed into "Remove"  and there is number '1' on the cart
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
    //Click on the cart
    await page.locator('.shopping_cart_link').click();
    //validate pre-added item is visible
    await expect(page.getByText('Your Cart')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    //Click checkout, input all required fields
    await page.getByRole('button',{name:'Checkout'}).click();
    await expect(page.getByText('Checkout: Your Information')).toBeVisible();
    //validate the corresponding fields display input text
    await page.locator('#first-name').fill('Thao');
    await expect(page.locator('#first-name')).toHaveValue('Thao');
    await page.locator('#last-name').fill('Nguyen');
    await expect(page.locator('#last-name')).toHaveValue('Nguyen');
    await page.locator('#postal-code').fill('50000');
    await expect(page.locator('#postal-code')).toHaveValue('50000');
    //Click Continue
    await page.locator('#continue').click();
    // validate checkout page has item added earlier
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    //Click Finish
    await page.locator('#finish').click();
    //validate thank you msg: "Thank you for your order!"  and "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    await expect(page.locator('.complete-text')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
});