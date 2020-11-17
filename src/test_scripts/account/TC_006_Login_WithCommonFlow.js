import LoginFlow from "../../test_flows/account/LoginFlow"
import testData from '../../test_data/account/TC_006_Login_WithCommonFlow'

describe('Login Function', function () {

    it('should check email text field', function () {
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        const {INVALID_CREDS} = testData.loginData;
        const {email, password} = INVALID_CREDS

        let loginFlow = new LoginFlow()
        loginFlow.login_with_credentials(email, password)
        loginFlow.verify_email_text_field(email)
    });
});
