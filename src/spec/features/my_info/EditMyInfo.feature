@info
Feature: Ajouter Info- OrangeHRM
  
  En tant que utilisateur je souhaite ajouter des informations dans le module MyInfo

  Background: 
    Given j'ouvre l'application orangeHRM
    When Je saisie le username "Admin" 
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton Login
    Then Redirection vers la page Home de l'application OrangeHRM "Welcome"
   
  @myinfo1 
  Scenario: Ajouter Info dans le premier formulaire- OrangeHRM
   When Je clique sur le module My Info
   And Je clique sur le boutton Edit
    And Je saisis le champ Full Name "Sahar Mili" 
    And Je saisis le champ Last Name "Sahar" 
    And Je saisis le champ Employee Id "00225"
    And Je clique sur le boutton Save
  
  @myinfo2
  Scenario: Ajouter Info dans le deuxième formulaire- OrangeHRM
   When Je clique sur le module My Info
   And Je clique sur le deuxième boutton Edit
   And Je selectionne dans Custom Fields 
   And Je clique sur le boutton Save
   
   @myinfo3
   Scenario: Ajouter un attachment - OrangeHRM
   When Je clique sur le module My Info
   And Je clique sur le boutton Add
   And Je clique sur le boutton Choisir un fichier "C:\Users\asus\Desktop\testpom\feature.PNG" 
   And Je clique sur le boutton Upload
  
 
