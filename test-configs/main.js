import allureReporter from "@wdio/allure-reporter";

let chai = require("chai")
const allure = require('allure-commandline');
const {addStory, addTestId} = require('@wdio/allure-reporter').default

exports.config = {
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    waitforTimeout: 10000,
    maxInstances: 1,
    sync: true,
    specs: [
        './src/test_scripts/account/TC_001_Login.js'
    ],
    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableMochaHooks: true
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
                5000)

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
