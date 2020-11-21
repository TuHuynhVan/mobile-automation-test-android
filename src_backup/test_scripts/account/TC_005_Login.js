import Login from "../../page_objects/acccount/Login";

describe('Login Funtion', function () {

    it('should verify email text after inout', function () {
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        Login
            .input_email("teo")
            .input_password("...")
            .click_on_login_btn()
        Login.verify_email_text_displayed("teo")
    });
});
