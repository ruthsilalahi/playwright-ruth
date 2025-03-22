import loginLocators from '../locator/loginLocator.js';
import { expect } from '@playwright/test';

export default class loginActions {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.loginLocators = new loginLocators();
        this.inputUsername = page.locator(this.loginLocators.inputUsername);
        this.inputPassword = page.locator(this.loginLocators.inputPassword);
        this.clickButton = page.locator(this.loginLocators.buttonLogin);
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async inputLogin() {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickButton.click();
    }

}