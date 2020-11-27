import {VALID_CREDS, IN_VALID_CREDS} from '../../test_data/account/TC_001_Login'
import LoginFlow from '../../test_flows/account/LoginFlow'
import allureReporter from '@wdio/allure-reporter'

describe(`Account Function for ${browser.capabilities.deviceName}`, function () {

    it('Login successfully', function () {
        allureReporter.addTestId("TC_001")
        allureReporter.addSeverity("critical")
        const {email, password} = VALID_CREDS
        const loginFlow = new LoginFlow(email, password)
        loginFlow
            .login_with_credentials()
            .verify_login_successfully()
    });

    it('Login unsuccessfully', function () {
        allureReporter.addTestId("TC_002")
        allureReporter.addSeverity("normal")
        const {email, password} = IN_VALID_CREDS
        const loginFlow = new LoginFlow(email, password)
        loginFlow
            .login_with_credentials()
            .verify_login_unsuccessfully()
    });
});
