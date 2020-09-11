describe('Learning WebdriverIO API', function () {

    it('addValue API', function () {

        // Declare element selector values
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        const EMAIL_TXT_FIELD = '~input-email'

        // 1. Click on Login on Home Screen
        $(LOGIN_ICON_HOME_SCREEN).click()

        // 2. Fill email text field by using addValue
        let email_txt_elem = $(EMAIL_TXT_FIELD) // return an element
        email_txt_elem.addValue('a@a')
        email_txt_elem.addValue('.com')

        // 3. Demonstrate about setValue
        $(EMAIL_TXT_FIELD).setValue('new@a.com')

        // 4. Clear the text field
        $(EMAIL_TXT_FIELD).clearValue()

        browser.pause(3000)
    });
});
