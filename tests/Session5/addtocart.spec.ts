import{test} from '@playwright/test';
import {AddtocartPage} from './addtocart.page';

    test('TC002 - Verify user can order product successfully', async ({page}) => {
        const addtocartPage = new AddtocartPage(page);

        await test.step('Step 1: Navigate to login page',async () => {
        await addtocartPage.goto();});

        await test.step('Step 2: Login with valid account',async () => {
        await addtocartPage.login('standard_user', 'secret_sauce');});

        await test.step('Step 3: Verify product page is displayed',async () => {
        await addtocartPage.verifyProductPage();});

        await test.step('Step 4: Add product to cart and go to cart page',async () => {
        await addtocartPage.addProductToCart();
        await addtocartPage.goToCart();});

        await test.step('Step 5: Verify cart page', async () => {
        await addtocartPage.verifycartpage();});

        await test.step('Step 6: Checkout with user information', async () => {
        await addtocartPage.checkout('Thao', 'Nguyen', '50000');});

        await test.step('Step 7: Verify checkout overview page', async () => {
        await addtocartPage.verifyCheckoutOverview();});

        await test.step('Step 8: Finish order', async () => {
        await addtocartPage.finishOrder();});

        await test.step('Step 9: Verify thank you message', async () => {
        await addtocartPage.verifyThankYouMessage();});
    });