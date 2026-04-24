import {test} from '@playwright/test'
import { DynamicLoadingPage } from './Bai3.page'

    test('Verify Dynamic Loading', async({page}) => {
        const dynamicLoadingpage = new DynamicLoadingPage(page);

        await test.step('Step 1: Navigate to Dynamic Loading page', async() => {
            await dynamicLoadingpage.openPage();
        });

        await test.step('Step 2: Click on Start button', async() => {
            await dynamicLoadingpage.clickStart();
        });


        await test.step('Step 3: Wait for loading to be finish', async() => {
            await dynamicLoadingpage.waitForLoadingToFinish();
        });

        await test.step('Step 4: Verify Hello World is displayed', async() => {
            await dynamicLoadingpage.verifyhelloWorldVisible();
        });
    });