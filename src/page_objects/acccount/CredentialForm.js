const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'

class CredentialForm {

    wait_till_screen_displayed(){
        $(EMAIL_TXT_FIELD).waitForDisplayed({timeout: 5000})
    }

    get email_txt_field(){
        $(EMAIL_TXT_FIELD).waitForDisplayed({timeout: 5000})
        return $(EMAIL_TXT_FIELD)
    }

    get password_txt_field(){
        $(PASSWORD_TXT_FIELD).waitForDisplayed({timeout: 5000})
        return $(PASSWORD_TXT_FIELD)
    }

}
export default CredentialForm
