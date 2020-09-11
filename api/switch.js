describe('Learning API', function () {

    it('Toggle switch button', function () {

        const FORMS_ICON_HOME_SCREEN = '~Forms'
        const SWITCH_BTN = '~switch'

        // 0. go to the forms field
        $(FORMS_ICON_HOME_SCREEN).click()

        // 1. Toggle the Switch button
        $(SWITCH_BTN).click()

        // 2. Wait a little to see result
        browser.pause(2000)
    });
});
