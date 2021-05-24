$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("my_info/EditMyInfo.feature");
formatter.feature({
  "line": 2,
  "name": "Ajouter Info- OrangeHRM",
  "description": "\nEn tant que utilisateur je souhaite ajouter des informations dans le module MyInfo",
  "id": "ajouter-info--orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@info"
    }
  ]
});
formatter.before({
  "duration": 59782268100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "j\u0027ouvre l\u0027application orangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur le bouton Login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Redirection vers la page Home de l\u0027application OrangeHRM \"Welcome\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 14451906000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 23
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 1881099400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 132233900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 1967900200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 58
    }
  ],
  "location": "AuthentificationStepDefinition.redirectionVersLaPageHomeDeLApplicationOrangeHRM(String)"
});
formatter.result({
  "duration": 28262000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"welcome\"}\n  (Session info: chrome\u003d90.0.4430.85)\n  (Driver info: chromedriver\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform\u003dWindows NT 10.0.19041 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 26 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027DESKTOP-GPB8NU3\u0027, ip: \u0027192.168.1.36\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53875}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}), userDataDir\u003dC:\\Users\\asus\\AppData\\Local\\Temp\\scoped_dir6036_396816414}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d90.0.4430.85, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 487ab2a3592b9cfba9ec2a58ee4e64ed\n*** Element info: {Using\u003did, value\u003dwelcome}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:389)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:215)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat com.selenium.e2eTests.authentification.stepDefinition.AuthentificationStepDefinition.redirectionVersLaPageHomeDeLApplicationOrangeHRM(AuthentificationStepDefinition.java:60)\r\n\tat ✽.Then Redirection vers la page Home de l\u0027application OrangeHRM \"Welcome\"(my_info/EditMyInfo.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 23,
  "name": "Ajouter Info dans le deuxième formulaire- OrangeHRM",
  "description": "",
  "id": "ajouter-info--orangehrm;ajouter-info-dans-le-deuxième-formulaire--orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@myinfo2"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Je clique sur le module My Info",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Je clique sur le deuxième boutton Edit",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Je selectionne dans Custom Fields \"A+\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Je clique sur le boutton Save",
  "keyword": "And "
});
formatter.match({
  "location": "MyInfoStepDefinition.jeCliqueSurLeModuleMyInfo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyInfoStepDefinition.jeCliqueSurLeDeuxièmeBouttonEdit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "MyInfoStepDefinition.jeCliqueSurLeBouttonSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current page url is https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 7316006100,
  "status": "passed"
});
});