const MSG_TITLE = '//*[@resource-id="android:id/alertTitle"]'
const MSG_CONTENT = '//*[@resource-id="android:id/message"]'
const MSG_ACCEPT_BTN = '//*[@resource-id="android:id/button1"]'

class LoginMessagePopup {

    wait_til_screen_displayed(){
        $(MSG_TITLE).waitForDisplayed()
    }

    get msg_title() {
        return $(MSG_TITLE)
    }

    get msg_content(){
        return $(MSG_CONTENT)
    }

    get accept_btn(){
        return $(MSG_ACCEPT_BTN)
    }
}

export default new LoginMessagePopup()
