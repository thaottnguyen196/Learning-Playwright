import {Locator, Page, expect} from '@playwright/test'

export class DynamicControlsPage {
    readonly page: Page;

    readonly removeButton: Locator;
    readonly checkbox: Locator;
    readonly loadingSpinner1: Locator;
    readonly itsGoneMessage: Locator;
    readonly addButton: Locator;
    readonly itsBackMessage: Locator;

    readonly inputTextBox: Locator;
    readonly enableButton: Locator;
    readonly loadingSpinner2: Locator;    
    readonly itsEnableMessage: Locator;

constructor (page: Page) {
    this.page = page;
//Flow 1
    this.removeButton = page.getByRole('button', {name:'Remove'});
    this.checkbox = page.locator('#checkbox input');
    this.loadingSpinner1 = page.locator('#checkbox-example').getByText('Wait for it... ');
    this.itsGoneMessage = page.getByText("It's gone!");
    
    this.addButton = page.getByRole('button', {name: 'Add'});
    this.itsBackMessage = page.getByText("It's back!");

//Flow 2
    this.inputTextBox = page.locator('#input-example input');
    this.enableButton = page.getByRole('button', {name:'Enable'});
    this.loadingSpinner2 = page.locator('#input-example').getByText('Wait for it... ');
    this.itsEnableMessage = page.getByText("It's enabled!");
}
    
    async openPage (){
        await this.page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    }
//Flow 1
    async verifyCheckboxVisible (){
        await expect(this.checkbox).toBeVisible();
    }
    async clickRemoveButton (){
        await this.removeButton.click();
    }

    async waitForLoadingToFinish1(){
        await this.loadingSpinner1.waitFor({state:'hidden', timeout: 10000});
    }

    async verifyCheckboxNOTVisible (){
        await expect(this.checkbox).toBeHidden();
    }

    async verifyitsGoneMessage () {
        await expect(this.itsGoneMessage).toBeVisible();
    }

    async clickOnAddButton (){
        await this.addButton.click();
    }

//Flow 2

    async verifyInputDisable(){
        await expect(this.inputTextBox).toBeDisabled();
    }

    async clickonEnableButton (){
        await this.enableButton.click();
    }

    async waitForLoadingToFinish2(){
        await this.loadingSpinner2.waitFor({state:'visible', timeout: 10000});
    }

    async verifyInputEnable (){
        await expect(this.inputTextBox).toBeEnabled();
    }

    async verifyitsEnableMessage (){
        await expect(this.itsEnableMessage).toBeVisible();
    }
};