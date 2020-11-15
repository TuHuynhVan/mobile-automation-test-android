import Login from "./Login";

const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'

class CredentialForm {

    get email_txt_field(){
        return $(EMAIL_TXT_FIELD)
    }

    get password_txt_field(){
        return $(PASSWORD_TXT_FIELD)
    }

    wait_till_screen_displayed(){
        $(EMAIL_TXT_FIELD).waitForDisplayed()
    }

    input_email(email) {
        $(EMAIL_TXT_FIELD).setValue(email)
        return this
    }

    input_password(password) {
        $(PASSWORD_TXT_FIELD).setValue(password)
        return this
    }

    verify_email_text_displayed(value){
        expect(this.email_txt_field).toHaveText(value, {trim: true})
        chaiExpect(this.email_txt_field.getText()).to.be.equal(value, "[ERR] the email field value is incorrect!")
    }

}
export default CredentialForm
