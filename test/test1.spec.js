import {test, expect} from '@playwright/test';

test('has title', async ({page}) => {
    await page.goto('https://www.saucedemo.com');

    // Expect a title "to contain" a substring.
    //await expect(page).toHaveTitle('Swag Labs');

    //kalo const -> lebih ke arah rastatis -> ga bisa di ubah
    //kalo let -> lebih dinamis 

    const inputUsegirname = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    // dibawah ini buat bikin expected dan actual
    await expect(inputUsername).toHaveValue('standard_user');

    const inputPassword = page.locator("#password");
    await inputPassword.fill('secret_sauce');
    await expect(inputPassword).toHaveValue('secret_sauce');

    const buttonLogin = page.locator('#login-button');
    await buttonLogin.click();


});