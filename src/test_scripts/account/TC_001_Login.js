import {VALID_CREDS} from '../../test_data/account/TC_001_Login'
import LoginFlow from '../../test_flows/account/LoginFlow'

describe('Account Funtion', function () {
    it('should login successfully', function () {

        const {email, password} = VALID_CREDS
        const loginFlow = new LoginFlow(email, password)
        loginFlow
            .login_with_credentials()
            .verify_login_successfully()
    });
});
