
@connexion
Feature: Authentification - OrangeHRM
En tant que utilisateur je souhaite m'authantifier 

  @cnx
  Scenario: Vérifier l'authentification
  
    Given j'ouvre l'application orangeHRM
    When Je saisie le username
    And Je saisie le mot de passe
    And Je clique sur le bouton Login
    Then Redirection vers la page Home de l'application OrangeHRM
    
