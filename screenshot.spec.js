import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 480, height: 900 } });

test('take screenshots', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  await page.screenshot({ path: 'screen1_home.png' });

  await page.goto('http://localhost:5174/details');
  await page.screenshot({ path: 'screen2_details.png' });

  await page.goto('http://localhost:5174/list');
  await page.screenshot({ path: 'screen3_triplist.png' });

  await page.goto('http://localhost:5174/timetable');
  await page.screenshot({ path: 'screen4_timetable.png' });
});
