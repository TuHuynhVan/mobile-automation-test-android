import LoginPage from '../../page_objects/account/Login'
import NavBar from '../../page_objects/common/NavBar'
import LoginMessagePopup from "../../page_objects/account/LoginMessagePopup";
import allureReporter from '@wdio/allure-reporter'

class LoginFlow {

    constructor(email, password) {
        this.email = email
        this.password = password
    }

    login_with_credentials() {
        if (!LoginPage.is_on_login_screen()) NavBar.login_icon.click()
        allureReporter.addStep(`Input email as ${this.email}`)
        LoginPage.email_txt_field.setValue(this.email)
        allureReporter.addStep(`Input password as ${this.password}`)
        LoginPage.password_txt_field.setValue(this.password)
        allureReporter.addStep('Click on Login button')
        LoginPage.click_on_login_btn()
        return this;
    }

    verify_login_successfully() {
        const expected_msg_title = "Success"
        const expected_msg_content = "You are logged in!"
        expect(LoginMessagePopup.msg_title).toHaveText(expected_msg_title)
        expect(LoginMessagePopup.msg_content).toHaveText(expected_msg_content)
        LoginMessagePopup.accept_btn.click()
    }

    verify_login_unsuccessfully() {
        if (!this.email && this.password.length >= 8) {
            chaiExpect(LoginPage.is_invalid_email_format_msg_displayed()).to.equal(true)
            chaiExpect(LoginPage.is_invalid_password_format_msg_displayed()).to.equal(false)
        } else if (this.email.length > 0 && this.password.length < 8) {
            chaiExpect(LoginPage.is_invalid_email_format_msg_displayed()).to.equal(false)
            chaiExpect(LoginPage.is_invalid_password_format_msg_displayed()).to.equal(true)
        } else{
            chaiExpect(LoginPage.is_invalid_email_format_msg_displayed()).to.equal(true)
            chaiExpect(LoginPage.is_invalid_password_format_msg_displayed()).to.equal(true)
        }

    }

}

export default LoginFlow
