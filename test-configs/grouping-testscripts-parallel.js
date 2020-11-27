const {config} = require('./main')

config.capabilities = [
    {
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "udid": "emulator-5554",
        "appPackage": "com.wdiodemoapp",
        "appActivity": ".MainActivity",
        "systemPort": 6001,
        port: 6000,
        deviceName: "Samsung J7"
    },
    {
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "udid": "3300d3672cca62b9",
        "appPackage": "com.wdiodemoapp",
        "appActivity": ".MainActivity",
        "systemPort": 7001,
        port: 7000,
        deviceName: "Emulator"
    }
]
config.suites = {
    smokeTest: [
        './src/test_scripts/account/TC_002_Login.js'
    ],
    regressionTest: [
        './src/test_scripts/account/TC_001_Login.js'
    ]
}
exports.config = config