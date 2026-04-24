import{test} from '@playwright/test';
import {LoginPage} from '../Session5/login.page';

test.describe('Login Test', () => {
    test('TC001 - Verify error message when login with locked user', async ({page}) => {
        const loginPage = new LoginPage(page);

        //Step1: Go to page
        await loginPage.goto();

        //Step 2 and 3: Input username + password
        await loginPage.login('locked_out_user', 'secret_sauce');

        //Step 4: Verify error message
        await loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');

    });

});