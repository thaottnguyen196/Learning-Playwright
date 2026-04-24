import {test} from '@playwright/test'
import { DynamicControlsPage } from './Bai4.page'

test('Bai 4', async({page}) => {
        const dynamicControlsPage = new DynamicControlsPage(page);

        await test.step('Step 1: Navigate to Dynamic Controls page', async() => {
            await dynamicControlsPage.openPage();
        });

        //Flow 1
        await test.step('Flow 1 - Step 2: Verify the checkbox is visible', async() => {
            await dynamicControlsPage.verifyCheckboxVisible();
        });

        await test.step('Flow 1 - Step 3: Click on Remove button', async() => {
            await dynamicControlsPage.clickRemoveButton();
        });

        await test.step('Flow 1 - Step 4: Verify the checkbox is NOT visible', async() => {
            await dynamicControlsPage.waitForLoadingToFinish1();
            await dynamicControlsPage.verifyCheckboxNOTVisible();
        });

        await test.step('Flow 1 - Step 5: Verify "Its gone" message is displayed', async() => {
            await dynamicControlsPage.verifyitsGoneMessage();
        });

        await test.step('Flow 1 - Step 6: Click on Add button', async() => {
            await dynamicControlsPage.clickOnAddButton();
        });

        //Flow 2
        await test.step('Flow 2 - Step 1: Verify input is disable', async() => {
            await dynamicControlsPage.verifyInputDisable();
        });

        await test.step('Flow 2 - Step 2: CLick on Enable button', async() => {
            await dynamicControlsPage.clickonEnableButton();
        });

        await test.step('Flow 2 - Step 3: Verify input is enable and message is displayed', async() => {
            await dynamicControlsPage.waitForLoadingToFinish2();
            await dynamicControlsPage.verifyInputEnable();
            await dynamicControlsPage.verifyitsEnableMessage();
        });       

    });