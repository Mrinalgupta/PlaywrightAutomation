const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');


test('Browser Context  test', async ({browser})=>
{
    //Playwright code
    //{browser} - It is a playwright fixture that provides access to the browser instance. It allows you to create new browser contexts and pages for testing purposes.
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

});

test.only('Page Context test', async ({page})=>
{
    //Playwright code
    //{page} - It is a playwright fixture that provides access to a single page within a browser context. It allows you to interact with the web page, perform actions, and retrieve information during testing.
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');


});

