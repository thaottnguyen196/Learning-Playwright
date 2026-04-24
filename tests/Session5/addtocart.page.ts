import {Locator, Page,expect} from '@playwright/test';

export class AddtocartPage {
    readonly page: Page;

    //Locators
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    readonly ProductsPage: Locator;
    readonly addToCartButton: Locator;
    readonly cartIcon: Locator;

    readonly preaddedItemName: Locator;
    readonly checkoutButton: Locator;

    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;

    readonly checkoutPageVisibility: Locator;
    readonly finishButton: Locator;

    readonly thankYouHeader: Locator;
    readonly thankYouText: Locator;



    constructor(page:Page) {
        this.page = page;

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');

        this.ProductsPage = page.getByText('Products');
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartIcon = page.locator('.shopping_cart_link');

        this.preaddedItemName = page.getByText('Sauce Labs Backpack');
        this.checkoutButton = page.getByRole('button',{name:'Checkout'});

        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');

        this.checkoutPageVisibility = page.getByText('Checkout: Overview');
        this.finishButton = page.locator('#finish');

        this.thankYouHeader = page.getByText('Thank you for your order!');
        this.thankYouText = page.locator('.complete-text');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await  this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyProductPage() {
        await expect(this.ProductsPage).toBeVisible();
  }

    async addProductToCart(){
        await this.addToCartButton.click();
    }

    async goToCart(){
        await this.cartIcon.click();   
    }

    async verifycartpage(){
        await expect(this.preaddedItemName).toBeVisible();
        await this.checkoutButton.click();
    }

    async checkout(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);

        await this.continueButton.click();
    }
    
    async verifyCheckoutOverview() {
        await expect(this.checkoutPageVisibility).toBeVisible();
  }

    async finishOrder() {
        await this.finishButton.click();
    }

    async verifyThankYouMessage(){
     await expect(this.thankYouHeader).toBeVisible();
     await expect(this.thankYouText).toBeVisible();

    }
}