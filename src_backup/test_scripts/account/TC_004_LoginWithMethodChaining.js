import LoginPage from "../../page_objects/acccount/LoginWithMethodChaining"

describe('Learn Page Object', function () {

    it('should use method chaining successfully', function () {
        // 1. Click on Login Icon from Home Page
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        LoginPage
            .wait_screen_displayed()
            .input_email('teo')
            .input_password('...')
            .click_on_login_button()
            .get_dashboard_name()
    });

});
