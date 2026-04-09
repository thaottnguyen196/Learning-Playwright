import { test, expect } from '@playwright/test';

test('tc001', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
 // Select sort low → high
    await page.locator('.product_sort_container').selectOption('lohi');
//Lấy tất cả các element chứa giá sản phẩm
const priceLocators = page.locator('.inventory_item_price');
const priceTexts = await priceLocators.allTextContents();
const actualPrices = priceTexts.map(price => parseFloat(price.replace('$', '')));
let isSorted = true;
  for (let i = 0; i < actualPrices.length - 1; i++) {
    // Nếu phần tử trước lớn hơn phần tử sau -> Mảng không được sắp xếp đúng
    if (actualPrices[i] > actualPrices[i + 1]) {
      isSorted = false;
      break;
    }
  }
  // Assert kết quả
  expect(isSorted).toBe(true);
});