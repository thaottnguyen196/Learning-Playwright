import {FrameLocator, Locator,Page,expect} from '@playwright/test'

export class iFramChallenge {
    readonly page: Page;

    readonly outerFrame: FrameLocator;
    readonly innerFrame: FrameLocator;
    readonly innerText: Locator;

    constructor (page:Page) {
        this.page = page;

        this.outerFrame = page.frameLocator('#iframeResult');
        this.innerFrame = this.outerFrame.frameLocator('iframe');
        this.innerText = this.innerFrame.locator('h1');
    }

    async openPage() {
        await this.page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe');
    } 

    async verifyHeadingText() {
        await expect(this.innerText).toHaveText('This page is displayed in an iframe');
    }

}