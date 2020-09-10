describe('Learning WebdriverIO API', function () {

    it('should input username and password OK', function () {

        // Declare element selector values
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        const EMAIL_TXT_FIELD = '~input-email'
        const PASSWORD_TXT_FIELD = '~input-password'
        const LOGIN_BTN = '~button-LOGIN'

        // 1. Click on Login on Home Screen
        $(LOGIN_ICON_HOME_SCREEN).click()

        // 2. Fill email text field
        $(EMAIL_TXT_FIELD).setValue('a@a.com')

        // 3. Fill password text field
        $(PASSWORD_TXT_FIELD).setValue('12345678')

        // 4. Click on Login btn
        $(LOGIN_BTN).click()

        browser.pause(3000)
    });
});
