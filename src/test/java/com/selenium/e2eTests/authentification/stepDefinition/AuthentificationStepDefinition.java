package com.selenium.e2eTests.authentification.stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.selenium.e2eTests.authentification.pageObjects.AuthentificationPage;
import com.selenium.e2eTests.utils.CommonMethods;
import com.selenium.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationStepDefinition extends CommonMethods {
	
	public WebDriver driver;
	public AuthentificationPage authentificationPage = new AuthentificationPage();
	public CommonMethods commonMethods= new CommonMethods();
	
	//Constructor
	public AuthentificationStepDefinition() {
		driver=Setup.driver;
		
	}
	
	
	@Given("^j'ouvre l'application orangeHRM$")
	public void jOuvreLApplicationOrangeHRM() throws Throwable {
		logger.info("j'ouvre l'application orangeHRM");
		commonMethods.openApplication();
		
	}

	@When("^Je saisie le username \"([^\"]*)\"$")
	public void jeSaisieLeUsername(String name) throws Throwable {
		logger.info("Je saisie le username");
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationPage.fillUserName(name); 
		
	}

	@When("^Je saisie le mot de passe \"([^\"]*)\"$")
	public void jeSaisieLeMotDePasse(String password) throws Throwable {
		logger.info("Je saisie le mot de passe");
		authentificationPage.fillPassword(password);
	    
	}

	@When("^Je clique sur le bouton Login$")
	public void jeCliqueSurLeBoutonLogin() throws Throwable {
		logger.info("Je clique sur le bouton Login");
		authentificationPage.clickOnBtnLogin();
		
	}

	@Then("^Redirection vers la page Home de l'application OrangeHRM \"([^\"]*)\"$")
	public void redirectionVersLaPageHomeDeLApplicationOrangeHRM(String textWelcome) throws Throwable {
		logger.info("Redirection vers la page Home de l'application OrangeHRM");
		String adminUser = AuthentificationPage.welcome.getText();
		Assert.assertTrue(adminUser.contains(textWelcome));
		
	}
	
}
