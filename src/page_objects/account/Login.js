import CredentialForm from "./CredentialForm"

const LOGIN_BTN = '~button-LOGIN'
const INVALID_EMAIL_TXT = '//*[@text="Please enter a valid email address"]'
const INVALID_PASSWORD_TXT = '//*[@text="Please enter at least 8 characters"]'

class Login  extends CredentialForm {

    wait_till_screen_displayed(){
        $(LOGIN_BTN).waitForDisplayed()
    }

    is_on_login_screen(){
        if($(LOGIN_BTN).isDisplayed()) return true
        return false
    }

    click_on_login_btn(){
        $(LOGIN_BTN).click()
    }

    is_invalid_email_format_msg_displayed(){
        $(INVALID_EMAIL_TXT).waitForDisplayed()
        return $(INVALID_EMAIL_TXT).isDisplayed()
    }

    is_invalid_password_format_msg_displayed(){
        $(INVALID_PASSWORD_TXT).waitForDisplayed()
        return $(INVALID_PASSWORD_TXT).isDisplayed()
    }
}

export default new Login()
