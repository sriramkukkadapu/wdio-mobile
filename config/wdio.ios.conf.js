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
    // './test/specs/ios/ios-todo-pom.spec.js'
    './test/specs/ios/ios-before-hook.spec.js'
];


//==============
// capabilities
//==============
config.capabilities = [

    {
        platformName: "ios",
        "appium:platformVersion": "14.5",  //this version find in ur xcode -> window menu -> devices & simluators check version for iphone 12 device put it here
        "appium:deviceName": "iPhone 12",
        "appium:automationName": "XCUITest", //for ios it is XCUITest
        "appium:app": path.join(process.cwd(),"./app/ios/MVCTodo.app"),
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

