# e2e-tests, wdio v8, appium v2, hybrid app (android, ios)

e2e-test template with hybrid mob apps

```sh

```

## Setup

### Install software and check out the project

- Download and install Node.JS ( at least 16.17 )
- Typescript 5+ version
- Install Visual Studio Code
- Clone and checkout the github project
- npm install


### How to run the android tests on windows

```sh

```

We defined a default configuration (config/wdio.android.conf.js) for Android which will be executed when you run "npm run test:android".

Be sure that you have:

- Install Java latest via https://www.java.com/ru/download/manual.jsp
- Set the environment variable called `JAVA_HOME` to the jre directory (C:\Program Files\Android\Android Studio\jre\)
- Install Node v16+ https://nodejs.org/uk
- installed the latest Android Studio version https://developer.android.com/studio
- Add `ANDROID_HOME` to path in OS system variables
- Install Appium by command: `npm install -g appium`
- Install Appium inspector v2+ https://github.com/appium/appium-inspector/releases
- Install Appium drivers (uiautomator2, xcuitest and etc..; `appium driver install uiautomator2`)
- Allow virtualization in BIOS https://www.youtube.com/watch?v=UgDxU0jZAe4
- plugged in any android device into your computer. Leave it unlocked.
- allowed USB-Debugging on the connected android device
- run `adb devices` to check device name( device id )
- set the platform version, device name and path to apps(apk/ipa) inside android config (config/wdio.adndroid.conf.js) to the version on your android device.
- run `appium` in cmd
- now you can interact with your apps through the appium inspector on your PC

### Linter

We use eslint to lint the typescript files. The prettier plugin in eslint tries to autoformat the code on every run.

### Test structure

All test cases should be coded inside the test folder. There you can organize tests for different apps (e.g. msb-app) and define generic classes with getters and setters to use classes those methods inside other classes.

We work with the Page Object Pattern described in <https://webdriver.io/docs/pageobjects.html>. The main idea is to encapsulate logic into page classes and use the logic in the spec files to run the tests.

### Generating Allure reports

After running your tests, generate the Allure report with:
npm run allure:generate
You can serve the report locally:
npm run allure
Publishing Allure report to GitHub Pages
If you want to automatically publish the Allure report to GitHub Pages:
npm run publish:report
This requires that the GitHub Pages workflow or script is configured in your project.