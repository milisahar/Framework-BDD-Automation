
@connexion
Feature: Authentification - OrangeHRM
En tant que utilisateur je souhaite m'authantifier 

  @cnx
  Scenario: Vérifier l'authentification
  
    Given j'ouvre l'application orangeHRM
    When Je saisie le username "Admin" 
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton Login
    Then Redirection vers la page Home de l'application OrangeHRM "Welcome"
    
