import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coinmarketcap.com/');
  await expect(page.getByRole('link', { name: 'Go to homepage' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Cryptocurrencies' })).toBeVisible();
  const link = page.locator('role=link[name="Cryptocurrencies"]');
  await link.hover();
  await page.getByRole('link', { name: 'Categories' }).first().click();
  await expect(page.getByRole('link', { name: 'Exchanges' })).toBeVisible();
  const link2 = page.locator('role=link[name=Exchanges]');
  await link2.hover();
});