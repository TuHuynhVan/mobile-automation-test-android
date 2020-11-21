const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'

class CredentialForm {

    get email_txt_field(){
        return $(EMAIL_TXT_FIELD)
    }

    get password_txt_field(){
        return $(PASSWORD_TXT_FIELD)
    }

}
export default CredentialForm
