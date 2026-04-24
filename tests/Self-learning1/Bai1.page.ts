import {Locator, Page, expect} from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    //Locators
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginMessage: Locator;
    readonly logoutButton: Locator;
    readonly logoutMessage: Locator;

    constructor(page:Page){
        this.page = page;

        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.getByRole('button', {name: 'Login'});
        this.loginMessage = page.getByText('You logged into a secure area!');
        this.logoutButton = page.getByRole('link', {name: 'Logout'});
        this.logoutMessage = page.getByText('You logged out of the secure area!');
    }

    async openLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async performLogin(username:string, password:string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccess(){
        await expect(this.page).toHaveURL(/\/secure/);
        await expect(this.loginMessage).toBeVisible();
    }

    async performLogout(){
        await this.logoutButton.click();
    }

    async verifyLogoutSuccess(){
        await expect(this.page).toHaveURL(/\/login/);
        await expect(this.logoutMessage).toBeVisible();
    }
}