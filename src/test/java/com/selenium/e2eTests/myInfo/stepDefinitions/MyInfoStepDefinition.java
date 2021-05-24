package com.selenium.e2eTests.myInfo.stepDefinitions;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;

import org.json.simple.JSONObject;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.selenium.e2eTests.myInfo.pageObjects.MyInfoPage;
import com.selenium.e2eTests.utils.CommonMethods;
import com.selenium.e2eTests.utils.Setup;


import cucumber.api.java.en.When;

public class MyInfoStepDefinition {
	
	public WebDriver driver;
	public MyInfoPage myInfoPage = new MyInfoPage();
	public CommonMethods commonMethods = new  CommonMethods();
	
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

	@When("^Je selectionne dans Custom Fields \"([^\"]*)\"$")
	public void jeSelectionneDansCustomFields(String bloodType ) throws Throwable {
		myInfoPage.selectInCustomFields(bloodType);
		//commonMethods.selectDropDownListByVisibleText(myInfoPage.customField, bloodType);
	}

	@When("^Je clique sur le boutton Add$")
	public void jeCliqueSurLeBouttonAdd() throws Throwable {
		myInfoPage.clickOnAddButton();
	}
	@When("^Je clique sur le boutton Choisir un fichier$")
	public void jeCliqueSurLeBouttonChoisirUnFichier() throws Throwable {
		// TODO with json file
				JSONObject jsonLocator = commonMethods.JsonLocatorData(0);
				String image = (String) jsonLocator.get("pic");
				String path_pic = new File(image).getAbsolutePath();
				StringSelection ss = new StringSelection(path_pic);
				Toolkit.getDefaultToolkit().getSystemClipboard().setContents(ss, null);
				Robot robot = new Robot();
				robot.keyPress(KeyEvent.VK_ENTER);
				robot.keyRelease(KeyEvent.VK_ENTER);
				robot.keyPress(KeyEvent.VK_CONTROL);
				robot.keyPress(KeyEvent.VK_V);
				robot.keyRelease(KeyEvent.VK_V);
				robot.keyRelease(KeyEvent.VK_CONTROL);
				robot.keyPress(KeyEvent.VK_ENTER);
				robot.keyRelease(KeyEvent.VK_ENTER);
			}


	@When("^Je clique sur le boutton Upload$")
	public void jeCliqueSurLeBouttonUpload() throws Throwable {
		myInfoPage.clickOnUploadButton();
	}

}
