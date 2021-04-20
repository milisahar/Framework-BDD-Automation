package com.selenium.e2eTests.myInfo.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.selenium.e2eTests.myInfo.pageObjects.MyInfoPage;
import com.selenium.e2eTests.utils.Setup;

import cucumber.api.java.en.When;

public class MyInfoStepDefinition {
	
	public WebDriver driver;
	public MyInfoPage myInfoPage = new MyInfoPage();
	
	public MyInfoStepDefinition() {
		driver = Setup.driver;
		PageFactory.initElements(driver, myInfoPage);
	}
	
	@When("^Je clique sur le module My Info$")
	public void jeCliqueSurLeModuleMyInfo() throws Throwable {
		myInfoPage.clickOnMyInfo(); 
	}

	@When("^Je clique sur le boutton Edit$")
	public void jeCliqueSurLeBouttonEdit() throws Throwable {
		myInfoPage.clickOnEditButton();
	}

	@When("^Je saisis le champ Full Name \"([^\"]*)\"$")
	public void jeSaisisLeChampFullName(String fullname) throws Throwable {
		myInfoPage.fillFullName(fullname); 
	}

	@When("^Je saisis le champ Last Name \"([^\"]*)\"$")
	public void jeSaisisLeChampLastName(String lastname) throws Throwable {
		myInfoPage.fillLastName(lastname);
	}

	@When("^Je saisis le champ Employee Id \"([^\"]*)\"$")
	public void jeSaisisLeChampEmployeeId(String employeeid) throws Throwable {
		myInfoPage.fillEmployeeID(employeeid);
	}

	@When("^Je clique sur le boutton Save$")
	public void jeCliqueSurLeBouttonSave() throws Throwable {
		myInfoPage.clickOnSaveButton();
	}

	@When("^Je clique sur le deuxième boutton Edit$")
	public void jeCliqueSurLeDeuxièmeBouttonEdit() throws Throwable {
		myInfoPage.clickOnSecEditButton();
	}

	@When("^Je selectionne dans Custom Fields$")
	public void jeSelectionneDansCustomFields() throws Throwable {
		myInfoPage.selectInCustomFields();
	}

	@When("^Je clique sur le boutton Add$")
	public void jeCliqueSurLeBouttonAdd() throws Throwable {
		myInfoPage.clickOnAddButton();
	}
	@When("^Je clique sur le boutton Choisir un fichier \"([^\"]*)\"$")
	public void jeCliqueSurLeBouttonChoisirUnFichier(String arg1) throws Throwable {
	   
	}

	@When("^Je clique sur le boutton Upload$")
	public void jeCliqueSurLeBouttonUpload() throws Throwable {
	   
	}

}
