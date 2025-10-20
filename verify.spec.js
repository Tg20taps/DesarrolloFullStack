import { test, expect } from '@playwright/test';

test.describe('Verification', () => {
  test('should take a screenshot of the home page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.waitForSelector('h1');
    await page.screenshot({ path: 'jules-scratch/verification/home.png' });
  });

  test('should take a screenshot of the contact page', async ({ page }) => {
    await page.goto('http://localhost:5173/contacto');
    await page.waitForSelector('h1');
    await page.screenshot({ path: 'jules-scratch/verification/contact.png' });
  });
});
