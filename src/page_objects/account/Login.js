import CredentialForm from "./CredentialForm"

const LOGIN_BTN = '~button-LOGIN'

class Login  extends CredentialForm {

    wait_till_screen_displayed(){
        $(LOGIN_BTN).waitForDisplayed()
    }

    click_on_login_btn(){
        $(LOGIN_BTN).click()
    }
}

export default new Login()
