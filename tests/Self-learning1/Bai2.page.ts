import {Locator, Page, expect} from '@playwright/test'

export class DynamicLoadingPage {
    readonly page: Page

    readonly startButton: Locator;
    readonly loadingSpinner: Locator;
    readonly textMessage: Locator;

    constructor(page: Page){
        this.page = page;

        this.startButton = page.getByRole('button', { name: 'Start' });
        this.loadingSpinner = page.locator('#loading');
        this.textMessage = page.getByText('Hello World!');
    }

    async openPage (){
        await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');
    }

    async clickStart(){
        await this.startButton.click();
    }

    async waitForLoadingToFinish(){
        await expect(this.loadingSpinner).toBeVisible();
        await expect(this.loadingSpinner).toBeHidden({ timeout: 10000 });
    }

    async verifyhelloWorldVisible(){
        await expect(this.textMessage).toBeVisible();
    }





















}