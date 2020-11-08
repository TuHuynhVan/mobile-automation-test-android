describe('Swipr horizontally', function () {

    it('should swipr horizontally', function () {
        const SWIPE_ICON_HOME_SCREEN = `~Swipe`
        const SWIPE_HEADER_TEXT = `~Swipe-screen`

        // 1. click on SWIPE ICON
        $(SWIPE_ICON_HOME_SCREEN).click()

        // 2. Touch on the screen
        $(SWIPE_HEADER_TEXT).click()

        // 3. Swipe from right to left
        const anchorPercentage = 50
        const startPointPercentage = 90
        const endPointPercentage = 10

        const {height, width} = driver.getWindowSize()
        const anchor = height * anchorPercentage / 100
        const startPoint = width * startPointPercentage / 100
        const endPoint = width * endPointPercentage / 100

        for (let swipeTime = 0; swipeTime < 5; swipeTime++){
            driver.touchPerform([
                {
                    action: 'press',
                    options: {
                        x: startPoint,
                        y: anchor
                    }
                },
                {
                    action: 'wait',
                    options: {ms: 1000}
                },
                {
                    action: 'moveTo',
                    options: {
                        x: endPoint,
                        y: anchor
                    }
                },
                {
                    action: 'release',
                    options: {}
                }
            ])
        }

    });
});
