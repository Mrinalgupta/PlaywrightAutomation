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

test('Page Context test', async ({page})=>
{
    //Playwright code
    //{page} - It is a playwright fixture that provides access to a single page within a browser context. It allows you to interact with the web page, perform actions, and retrieve information during testing.
    const username = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');   
    const cardTitles = page.locator('.card-body a');    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    //css
    // type and fill are two methods used to interact with input fields on a web page, but they have different behaviors , in latest version it is deprecated:
    await page.locator('#username').type('rahulshetty');
    await page.locator('#password').type('Learning@830$3mK2');
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toHaveText('Incorrect username/password.');  
    await expect(page.locator("[style*='block']")).toContainText('Incorrect username');

    await username.fill("");
    await password.fill("");            
    await username.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    await signInBtn.click();
   // console.log(await page.locator('.card-body a').first().textContent());
   // console.log(await page.locator('.card-body a').nth(1).textContent());
   // console.log(await page.locator('.card-body a').last().textContent());

    const allTitles = await cardTitles.allTextContents();  
    console.log(allTitles);


});

test.only('UI Controls test', async ({page})=>
{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username = page.locator('#username');
    const password = page.locator('#password');
    const dropdown = page.locator('select.form-control');
    const documentLink = page.locator('[href*="documents-request"]');
    await page.fill('#username', 'rahulshettyacademy');
    await page.fill('#password', 'Learning@830$3mK2');
    await dropdown.selectOption('consult');
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();

    await expect(page.locator('.radiotextsty').last()).toBeChecked();
   // await expect(page.locator('.radiotextsty').first()).not.toBeChecked();  
    console.log(await page.locator('.radiotextsty').last().isChecked());
    await page.locator('#terms').check();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    await expect(page.locator('#terms')).not.toBeChecked();
    await expect(documentLink).toHaveAttribute('class', 'blinkingText');
    await expect(documentLink).toHaveAttribute('href', 'https://rahulshettyacademy.com/documents-request');
    // await page.pause();
});

