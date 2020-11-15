import LoginFlow from "../../test_flows/account/LoginFlow"

describe('Login Function', function () {

    it('should check email text field', function () {
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        let email = "teo"
        let password = "..."

        let loginFlow = new LoginFlow()
        loginFlow.login_with_credentials(email, password)
        loginFlow.verify_email_text_field(email)
    });
});
