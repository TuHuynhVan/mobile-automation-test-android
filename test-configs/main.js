let chai = require("chai")
const allure = require('allure-commandline');

exports.config = {
    runner: 'local',
    port: 5555,
    hostname: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    waitforTimeout: 10000,
    maxInstances: 10,
    sync: true,
    specs: [
        './src/test_scripts/account/TC_001_Login.js'
    ],
    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableMochaHooks: true,
            issueLinkTemplate: "https://mybug-tracker/{}",
            tmsLinkTemplate: "https://my-tms/{}"
        }]
    ],

    before: function () {
        global.chaiExpect = chai.expect
    },

    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                10000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if(error){
            browser.takeScreenshot()
        }
    }
}
