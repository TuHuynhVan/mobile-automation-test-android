describe('Learning WebdriverIO API', function () {

    it('should click on Login Icon successfully', function () {
        const LOGIN_ICON = '~Login'

        $(LOGIN_ICON).click()
        browser.pause(3000)

    });
});
