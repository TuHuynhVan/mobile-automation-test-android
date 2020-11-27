const {config} = require('./main')

config.capabilities = [
    {
        "appium:platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:udid": "emulator-5554",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".MainActivity",
        "appium:deviceName": "Emulator"
    },
    {
        "appium:platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:udid": "3300d3672cca62b9",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".MainActivity",
        "appium:deviceName": "Samsung J7"
    }
]

exports.config = config

