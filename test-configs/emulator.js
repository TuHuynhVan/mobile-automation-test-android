const {config} = require('./main')

config.capabilities = [{
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "udid": "emulator-5554",
    "appPackage": "com.wdiodemoapp",
    "appActivity": ".MainActivity"
}]

exports.config = config

