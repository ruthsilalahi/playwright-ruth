import { test } from "@playwright/test";
const {default: loginActions} = require('../test/pom/action/loginActions');
const {default: checkoutActions} = require('../test/pom/action/checkoutActions');

test ('Page object models', async ({page}) => {
    const loginObj = new loginActions(page);
    await loginObj.goto();
    await loginObj.inputLogin();
    const checkoutObj = new checkoutActions(page);
    await checkoutObj.checkout();
});