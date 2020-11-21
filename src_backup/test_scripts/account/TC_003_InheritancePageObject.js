import LoginPage from '../../page_objects/acccount/Login'

describe('Account Function', function () {

    it('should use iherited PO succesfully', function () {

        // 1. Click on Login Icon from Home Page
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        LoginPage.wait_till_screen_displayed()
        LoginPage.email_txt_field.setValue('teo')
        LoginPage.password_txt_field.setValue('...')
        LoginPage.login_btn.click()
    });

});
