import LoginPage from '../../page_objects/account/Login'
import NavBar from '../../page_objects/common/NavBar'
import LoginMessagePopup from "../../page_objects/account/LoginMessagePopup";

class LoginFlow {

    constructor(email, password) {
        this.email = email
        this.password = password
    }

    login_with_credentials(){
        NavBar.login_icon.click()
        LoginPage.email_txt_field.setValue(this.email)
        LoginPage.password_txt_field.setValue(this.password)
        LoginPage.click_on_login_btn()
        return this;
    }

    verify_login_successfully(){
        const expected_msg_title = "Success"
        const expected_msg_content = "You are logged in!"
        expect(LoginMessagePopup.msg_title).toHaveText(expected_msg_title)
        expect(LoginMessagePopup.msg_content).toHaveText(expected_msg_content)
        LoginMessagePopup.accept_btn.click()
    }

}
export default LoginFlow
