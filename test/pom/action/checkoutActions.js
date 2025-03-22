import checkoutLocator from '../locator/checkoutLocator';
import { expect } from '@playwright/test';

export default class checkoutActions {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.checkoutLocator = new checkoutLocator();
        this.addtocart = page.locator(this.checkoutLocator.addtocart);
        this.cart = page.locator(this.checkoutLocator.cart);
        this.buttonCheckout = page.locator(this.checkoutLocator.buttonCheckout);
        this.inputFirstName = page.locator(this.checkoutLocator.inputFirstName);
        this.inputLastName = page.locator(this.checkoutLocator.inputLastName);
        this.inputPostalCode = page.locator(this.checkoutLocator.inputPostalCode);
        this.buttonContinue = page.locator(this.checkoutLocator.buttonContinue);
        this.buttonFinish = page.locator(this.checkoutLocator.buttonFinish);
    }

    async checkout(){

        await this.addtocart.waitFor();
        await this.addtocart.click();

        // await this.addtocart.click();
        
        await this.cart.click();

        await this.buttonCheckout.click();
        
        //input user information
    
        await this.inputFirstName.fill('ruth');
        await expect(this.inputFirstName).toHaveValue('ruth');

        await this.inputLastName.fill('silalahi');
        await expect(this.inputLastName).toHaveValue('silalahi');

        await this.inputPostalCode.fill('121212');
        await expect(this.inputPostalCode).toHaveValue('121212');

        await this.buttonContinue.click();

        await this.buttonFinish.click();
    }

}