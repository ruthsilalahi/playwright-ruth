import {test, expect} from '@playwright/test';

test.use({ storageState: 'auth.json'});

test('E2E', async ({page}) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    await expect(inputUsername).toHaveValue('standard_user');

    const inputPassword = page.locator("#password");
    await inputPassword.fill('secret_sauce');
    await expect(inputPassword).toHaveValue('secret_sauce');

    const buttonLogin = page.locator('#login-button');
    await buttonLogin.click();

    const addtocart = page.locator('#add-to-cart-sauce-labs-backpack');
    await addtocart.click();

    const cart = page.locator("//a[@class='shopping_cart_link']");
    await cart.click();

    const buttonCheckout = page.locator('#checkout');
    await buttonCheckout.click();

    //input user information
    const inputFirstName = page.locator('#first-name');
    await inputFirstName.fill('ruth');
    await expect(inputFirstName).toHaveValue('ruth');

    const inputLastName = page.locator('#last-name');
    await inputLastName.fill('silalahi');
    await expect(inputLastName).toHaveValue('silalahi');

    const inputPostalCode = page.locator('#postal-code');
    await inputPostalCode.fill('121212');
    await expect(inputPostalCode).toHaveValue('121212');

    const buttonContinue = page.locator('#continue');
    await buttonContinue.click();

    const buttonFinish = page.locator('#finish');
    await buttonFinish.click();
});