const { config } = require('./wdio.shared.conf');
const path = require('path');

//==============
// Runner configuration
//==============

config.port = 4723

//==============
// specs
//==============
config.specs = [
    './test/specs/androidNative.spec.js'
];


//==============
// capabilities
//==============
config.capabilities = [

        {
            platformName: "Android",
            "appium:platformVersion": "11.0",
            "appium:deviceName": "Pixel 3",
            "appium:automationName": "UIAutomator2", //for ios it is XCUITest
            // "appium:app": path.join(process.cwd(),"./app/android/ApiDemos-debug.apk"),
            "appium:app": path.join(process.cwd(),"./app/android/ColorNote+Notepad.apk"),
            "appium:autoGrantPermissions": true

       }
]


config.services [
    ['appium', {
    args: {
        address: 'localhost',
        port: 4723
    },
    logPath: './'

 }]
]

exports.config = config;
