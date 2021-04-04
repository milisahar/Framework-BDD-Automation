$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 3,
  "name": "Authentification - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m\u0027authantifier",
  "id": "authentification---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 26628864800,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Vérifier l\u0027authentification",
  "description": "",
  "id": "authentification---orangehrm;vérifier-l\u0027authentification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "j\u0027ouvre l\u0027application orangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Je saisie le username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Je saisie le mot de passe",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Je clique sur le bouton Login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Redirection vers la page Home de l\u0027application OrangeHRM",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 6368703100,
  "status": "passed"
});
});