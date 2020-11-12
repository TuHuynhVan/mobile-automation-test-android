const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'
const LOGIN_BTN = '~button-LOGIN'

class LoginWithGlobalWait {

    wait_till_screen_displayed(){
        $(EMAIL_TXT_FIELD).waitForDisplayed({timeout: 5000})
    }

    get email_txt_field(){
        return $(EMAIL_TXT_FIELD)
    }

    get password_txt_field(){
        return $(PASSWORD_TXT_FIELD)
    }

    get login_btn(){
        return $(LOGIN_BTN)
    }

}
export default new LoginWithGlobalWait()
