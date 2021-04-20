@buzz
Feature: Buzz - OrangeHRM
  En tant que utilisateur je souhaite m'authentifier et ecrire mon nom dans le champs buzz

  @authetification
  Scenario: Vérifier l'authentification
  
    Given j'ouvre l'application orangeHRM
    When Je saisie le username "Admin" 
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton Login
    Then Redirection vers la page Home de l'application OrangeHRM "Welcome Paul"
    When Je clique sur le buzz
    And Je saisie mon nom dans le champs update status "Sahar Mili"

