import Login from "../../page_objects/acccount/Login"

class LoginFlow {

    login_with_credentials(email, password){
        Login.email_txt_field.setValue(email)
        Login.password_txt_field.setValue(password)
        Login.login_btn.click()
    }

    verify_email_text_field(email){
        expect(Login.email_txt_field).toHaveText(email)
    }

}
export default LoginFlow
