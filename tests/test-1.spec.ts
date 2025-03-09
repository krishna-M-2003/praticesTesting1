import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

test.describe('coinmarketcap webside', () => {
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
    await expect(page.getByRole('link', { name: 'Spot' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Spot' }).first().click();
    await page.getByRole('button', { name: 'Derivatives', exact: true }).click();
    await page.mouse.wheel(0, 6700);
    // await expect(page.getByText('logo HyperPay Futures')).toBeVisible({ timeout: 20000 });
    await page.getByRole('link', { name: 'logo HyperPay Futures' }).click();
    // await expect(page.getByText('$3,830,766,357.61')).toBeVisible();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'https://www.hyperpay.io/' }).click();
    const page1 = await page1Promise;
    await page1.goto('https://www.hyperpay.io/futures/#/');
    await page1.locator('.ad-close').click();
    await expect(page1.getByText('登录').nth(1)).toBeVisible();
  });
});
