import {test,expect} from '@playwright/test';

test('home page loads', {tag: '@smoke'}, async ({page}) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/OWASP Juice Shop/);
});