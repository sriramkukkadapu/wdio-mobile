# Course referred: Dilpreet Johal Udemy wdio

# Appium resources - Just FYI
https://github.com/SrinivasanTarget/awesome-appium#server

Java - 1.11
Node - 16
Appium - 2.0

# Install android studio & setup env variables, emulator

Vi ~/.bash_profile would look like this

export JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-11.jdk/Contents/Home
export ANDROID_HOME=${HOME}/Library/Android/sdk
export PATH="/Users/sriramku/Downloads/apache-jmeter-5.5/bin:${ANDROID_HOME}/emulator:${JAVA_HOME}/bin:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools:${PATH}"

# Install appium inspector
https://github.com/appium/appium-inspector
in releases install latest dmg file

# Install appium
npm install -g appium@next
npm i appium@2.0.0-beta.43
sudo npm install -g appium@2.0.0-beta.43

# Install appium doctor
npm install -g appium-doctor

# Use appium-doctor to verify things

appium-doctor --android -> To check if android setup is fine
appium-doctor --ios -> To check if ios setup is fine


# install the Appium drivers

npx appium driver list

npx appium driver install xcuitest
npx appium driver install uiautomator2

Now to verify if its been installed, you can run - appium driver list

# Setup project

npm init -y
npm install @wdio/cli
npx wdio config

# start appium locally

appium driver list
appium -p 4724
appium driver install uiautomator2
appium driver install xcuitest


# appium inspector

Start appium on terminal
appium -p 4724
Start desired emulator
In appium inspector
use 0.0.0.0 & port as 4724, we dont use 4723 so that we dont get port conflicts.
Now start session with capabilities on appium inspector.

# Locators

Accessibility Id : $('~App'); '~' symbol for accessibility id
UI automator locator link:
https://appium.io/docs/en/writing-running-appium/android/uiautomator-uiselector/

# To run tests 
source ~/.bash_wdio
Keep desired emulator open
npx wdio
wdio will start appium service by itself on port 4723 and run tests on the emulator.

# Tip: To open a particular activity directly in the automation script

await driver.startActivity("<package name>","<package name>.<activity name>");
await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

# Tip: Handling alert

driver.acceptAlert();
driver.dismissAlert();
To get alert text : await driver.getAlertText()


# To assert that element does not exist

const ele = await $('<Locator>');
await expect(ele).not.toExist();

# To perform scrolling

1) Scroll till end - Vertical
await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)') //scroll till the end
await $('~Secure Surfaces').click(); //click the element
        
2) Scroll text into view - efficient and stable
await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surface")').click();

3) Horizontal scrolling
await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');


# iOS setup

1) install xcode
2) install xcode command line tools
xcode-select --install
3) install carthage
brew install carthage
4) verify everything using appium-doctor
appium-doctor --ios
5) appium driver list
verify xcuitest is present
appium driver install xcuitest


# ios class chain locator strategy
https://github.com/facebookarchive/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules
const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
await $(`-ios class chain:${alertText}`).click();

# ios predicate string locator strategy
https://github.com/facebookarchive/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules
// const alertText = 'label == "Alert Views"';
const alertText = 'value BEGINSWITH[c] "alert"';
await $(`-ios predicate string:${alertText}`).click();

# ios how to do scrolling & select value from picker
//scroll screen down
await driver.execute('mobile:scroll', {direction: "down"})
//scroll screen up
await driver.execute('mobile:scroll', {direction: "up"})

// scroll a particular element
const redPicker = await $('~Red color component value');
await driver.execute('mobile:scroll', {element: redPicker.elementId, direction: "down"})

// set value to picker
await redPicker.addValue('125'); 


# Created separate configs for iOS & Android

# To run tests with iOS config
npx wdio ./config/wdio.ios.conf.js

# To run tests with Android config
npx wdio ./config/wdio.android.conf.js

# Hooks execution order
Before hook
Before each hook
After hook
After each hook

# Browser stack setup.
Browser stack create account
upload app file and copy the path
For this separate config file we have created 

run it using below command
npx wdio ./config/wdio.android.bs.conf.js

In browserstack dashboard view the execution
https://app-automate.browserstack.com/dashboard/v2

