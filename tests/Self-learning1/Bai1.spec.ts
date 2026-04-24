import{test} from '@playwright/test';
import {LoginPage} from './Bai1.page';

    test('Bai 1 - Verify login page', async ({page}) => {
        const loginpage = new LoginPage(page);
 
        await test.step('Step 1: Navigate to login page',  async () => {
            await loginpage.openLoginPage();
        });

        await test.step('Step 2: Login with valid account',  async () => {
            await loginpage.performLogin('tomsmith','SuperSecretPassword!');
        });

        await test.step('Step 3: Verify secure page is diaplayed',  async () => {
            await loginpage.verifyLoginSuccess();
        });

        await test.step('Step 4: Logout page',  async () => {
            await loginpage.performLogout();
        });

        await test.step('Step 5: Verify logout page is diaplayed',  async () => {
            await loginpage.verifyLogoutSuccess();
        });
    });