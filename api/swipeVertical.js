describe('Learning Swipe Vertially', function () {

    it('should swipr vertially', function () {

        const FORMS_ICON_HOME_SCREEN = '~Forms'
        const ACTIVE_BUTTON = `~button-Active`
        const FORM_HEADER_TEXT = '~Forms-screen'

        // 1. Click on Form icon
        $(FORMS_ICON_HOME_SCREEN).click()

        // 2. Swipe up vertically

        const {height} = driver.getWindowSize()
        const anchorPercentage = 50
        const startPointPercentage = 90
        const endPointPercentage = 10

        const anchor = height * anchorPercentage / 100
        const startPoint = height * startPointPercentage / 100
        const endPoint = height * endPointPercentage / 100

        // Touch on Screen before doing touch action
        $(FORM_HEADER_TEXT).click()

        // Press on start point, wait 1s, moveTo endPoint , release
        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 1000
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint
                }
            },
            {
                action: 'release',
                options: {}
            }
        ])

        // 3. Click on ACTIVE button
        $(ACTIVE_BUTTON).click()
    });

});
