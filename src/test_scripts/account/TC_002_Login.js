import {VALID_CREDS, IN_VALID_CREDS} from '../../test_data/account/TC_001_Login'
import LoginFlow from '../../test_flows/account/LoginFlow'
import allureReporter from '@wdio/allure-reporter'

describe(`Smoke Test for ${browser.capabilities.deviceName}`, function () {

    it('Smoke 001', function () {
        expect(true).toBe(true)
    });

    it('smoke 002', function () {
        expect(true).toBe(true)
    });
});
