$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 3,
  "name": "Login page feature",
  "description": "",
  "id": "login-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 7712516265,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on main page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.setMainPage()"
});
formatter.result({
  "duration": 1796418320,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Click login button from main page",
  "description": "",
  "id": "login-page-feature;click-login-button-from-main-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter talhakaragoz@gmail.com into username field on the login page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter test786! into password field on the login page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on the login page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify invalid login massage on login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "talhakaragoz@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 36
    }
  ],
  "location": "LoginPageSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "duration": 296281168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test786!",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "LoginPageSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "duration": 54025575,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.clickOnLoginButton()"
});
formatter.result({
  "duration": 7894652018,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyLoginErrorMessage()"
});
formatter.result({
  "duration": 26638726,
  "status": "passed"
});
formatter.after({
  "duration": 199700684,
  "status": "passed"
});
});