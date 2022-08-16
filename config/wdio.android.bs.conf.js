require('dotenv').config()
const { config } = require('./wdio.shared.conf');
// const path = require('path');


// config.user = 'sriramkukkadapu_kZ7rpb';
// config.key = 'bzrwDTgPMtH7ATKxc4x3';

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;


//==============
// specs
//==============
config.specs = [
    './test/specs/android/add-note.spec.js'
];


//==============
// capabilities
//==============
config.capabilities = [

        {
            platformName: "Android",
            "appium:platformVersion": "10.0",
            "appium:deviceName": "Google Pixel 3",
            "appium:automationName": "UIAutomator2", //for ios it is XCUITest
            // "appium:app": path.join(process.cwd(),"./app/android/ApiDemos-debug.apk"),
            // "appium:app": path.join(process.cwd(),"./app/android/ColorNote+Notepad.apk"),
            "appium:app": "bs://f97d601cbf99cbf144d78adced66122141243836",
            "appium:autoGrantPermissions": true

       }
]


config.services = [ 'browserstack']


exports.config = config;
