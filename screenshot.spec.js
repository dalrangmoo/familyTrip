import { test } from '@playwright/test';

test.use({ viewport: { width: 480, height: 900 } });

test('take screenshots', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  await page.screenshot({ path: 'screen1_home.png' });

  await page.goto('http://localhost:5174/attractions/2');
  await page.screenshot({ path: 'screen2_details.png' });

  await page.goto('http://localhost:5174/restaurants');
  await page.screenshot({ path: 'screen3_restaurantlist.png' });

  await page.goto('http://localhost:5174/transportation');
  await page.screenshot({ path: 'screen4_transportation.png' });
});
