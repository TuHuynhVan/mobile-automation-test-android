const {config} = require('./main')

config.capabilities = [{
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "udid": "3300d3672cca62b9",
    "appPackage": "com.wdiodemoapp",
    "appActivity": ".MainActivity"
}]

config.specs = [
    './src/test_scripts/webview/TC_003_Webview.js'
]

exports.config = config