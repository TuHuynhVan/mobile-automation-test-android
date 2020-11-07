describe('API Learning', ()=> {

    it('should take sceenshot', () => {

        const FORMS_ICON_HOME_SCREEN = '~Forms'
        const SWITCH_BTN = '~switch'

        // 0. go to the forms field
        $(FORMS_ICON_HOME_SCREEN).click()

        // 1. Take a picture whole screen
        browser.saveScreenshot("./screenshot/API_Learning_saveScreenShot.png")

        // 2. Take a picture Switch button
        $(SWITCH_BTN).saveScreenshot("./screenshot/SwitchButton.png")
    });
});
