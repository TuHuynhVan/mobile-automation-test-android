import LoginPage from '../../page_objects/acccount/LoginWithGlobalWait'

describe('Account Function', () => {

    it('should raise an error for wrong credentials', () => {

        // 1. Click on Login Icon from Home Page
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        // 2. Use Login Page Object to interact with elements
        LoginPage.wait_till_screen_displayed()
        LoginPage.email_txt_field.setValue("teo")
        LoginPage.password_txt_field.setValue("")
        LoginPage.login_btn.click()

        browser.pause(2000)
    });

});

// 1. Start appium server
// 2. make sure you connect the device
// 3. Check configuration file
