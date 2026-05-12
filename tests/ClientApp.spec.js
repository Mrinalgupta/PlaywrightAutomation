const {test, expect} = require('@playwright/test');

test('Login test', async ({page})=>
{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const username = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginBtn = page.locator('#login');

    const cardTitles = page.locator('.card-body b');
    //credentials
    //mrinalgpt@gmail.com and password = Test12345@
    await username.fill("mrinalgpt@gmail.com");
    await password.fill("Test12345@");
    await loginBtn.click();

    await page.waitForLoadState('networkidle');
  //await page.waitForSelector('.card-body b');

  //await expect(cardTitles.first()).toHaveText("ADIDAS ORIGINAL");

  //console.log(await cardTitles.first().textContent());
  console.log(await cardTitles.allTextContents());



})