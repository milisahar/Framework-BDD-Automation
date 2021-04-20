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
  "duration": 43612675900,
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
  "duration": 14648558900,
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
  "duration": 1900925700,
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
  "duration": 259712600,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 8065712300,
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
  "duration": 208457200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Ajouter Info dans le premier formulaire- OrangeHRM",
  "description": "",
  "id": "ajouter-info--orangehrm;ajouter-info-dans-le-premier-formulaire--orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@myinfo1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Je clique sur le module My Info",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Je clique sur le boutton Edit",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Je saisis le champ Full Name \"Sahar Mili\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Je saisis le champ Last Name \"Sahar\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Je saisis le champ Employee Id \"00225\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Je clique sur le boutton Save",
  "keyword": "And "
});
formatter.match({
  "location": "MyInfoStepDefinition.jeCliqueSurLeModuleMyInfo()"
});
formatter.result({
  "duration": 2712328000,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.jeCliqueSurLeBouttonEdit()"
});
formatter.result({
  "duration": 321707900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sahar Mili",
      "offset": 30
    }
  ],
  "location": "MyInfoStepDefinition.jeSaisisLeChampFullName(String)"
});
formatter.result({
  "duration": 1840655700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sahar",
      "offset": 30
    }
  ],
  "location": "MyInfoStepDefinition.jeSaisisLeChampLastName(String)"
});
formatter.result({
  "duration": 971987800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00225",
      "offset": 32
    }
  ],
  "location": "MyInfoStepDefinition.jeSaisisLeChampEmployeeId(String)"
});
formatter.result({
  "duration": 117673700,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.jeCliqueSurLeBouttonSave()"
});
formatter.result({
  "duration": 2157082100,
  "status": "passed"
});
formatter.after({
  "duration": 16458336400,
  "status": "passed"
});
formatter.before({
  "duration": 45920514300,
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
  "duration": 5297332500,
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
  "duration": 343319000,
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
  "duration": 326006300,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 4007160200,
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
  "duration": 154555100,
  "status": "passed"
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
  "name": "Je selectionne dans Custom Fields",
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
  "duration": 1636432200,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.jeCliqueSurLeDeuxièmeBouttonEdit()"
});
formatter.result({
  "duration": 166456000,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.jeSelectionneDansCustomFields()"
});
formatter.result({
  "duration": 389885400,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.jeCliqueSurLeBouttonSave()"
});
formatter.result({
  "duration": 104656700,
  "status": "passed"
});
formatter.after({
  "duration": 5418508500,
  "status": "passed"
});
formatter.before({
  "duration": 3738484500,
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
  "duration": 5192862100,
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
  "duration": 174966100,
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
  "duration": 192830800,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 4272145600,
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
  "duration": 59941000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Ajouter un attachment - OrangeHRM",
  "description": "",
  "id": "ajouter-info--orangehrm;ajouter-un-attachment---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@myinfo3"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Je clique sur le module My Info",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Je clique sur le boutton Add",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Je clique sur le boutton Choisir un fichier \"C:\\Users\\asus\\Desktop\\testpom\\feature.PNG\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Je clique sur le boutton Upload",
  "keyword": "And "
});
formatter.match({
  "location": "MyInfoStepDefinition.jeCliqueSurLeModuleMyInfo()"
});
formatter.result({
  "duration": 4397120800,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.jeCliqueSurLeBouttonAdd()"
});
formatter.result({
  "duration": 114185400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\asus\\Desktop\\testpom\\feature.PNG",
      "offset": 45
    }
  ],
  "location": "MyInfoStepDefinition.jeCliqueSurLeBouttonChoisirUnFichier(String)"
});
formatter.result({
  "duration": 118800,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.jeCliqueSurLeBouttonUpload()"
});
formatter.result({
  "duration": 45700,
  "status": "passed"
});
formatter.after({
  "duration": 2084546400,
  "status": "passed"
});
});