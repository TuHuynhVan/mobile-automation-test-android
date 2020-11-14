import DashBoard from "./DashBoard";

const EMAIL_TXT_FIELD = '~input-emailABC'
const PASSWORD_TXT_FIELD = '~input-password'
const LOGIN_BTN = '~button-LOGIN'

class LoginWithMethodChaining {

    wait_screen_displayed() {
        $(EMAIL_TXT_FIELD).waitForDisplayed()
        return this
    }

    input_email(email) {
        $(EMAIL_TXT_FIELD).setValue(email)
        return this
    }

    input_password(password) {
        $(PASSWORD_TXT_FIELD).setValue(password)
        return this
    }

    click_on_login_button() {
        $(LOGIN_BTN).click()
        return DashBoard
    }

}

export default new LoginWithMethodChaining()
