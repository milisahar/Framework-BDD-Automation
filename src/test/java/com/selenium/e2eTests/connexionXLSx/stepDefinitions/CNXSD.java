package com.selenium.e2eTests.connexionXLSx.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.selenium.e2eTests.connexionXLSx.pageObjects.CNXP;
import com.selenium.e2eTests.utils.Constant;
import com.selenium.e2eTests.utils.ExcelUtils;
import com.selenium.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class CNXSD {

	public WebDriver driver;
    public CNXP cnxp = new CNXP();

	public CNXSD() {
		driver = Setup.driver;
	}

	@Given("^J'ouvre l'application$")
	public void jOuvreLApplication() throws Throwable {
		ExcelUtils.setExcelFile(Constant.Path_TestData + Constant.File_TestData, "sheet1");
		driver.get(Constant.URL);
	}

	@When("^Je saisis le username et le mot de passe$")
	public void jeSaisisLeUsernameEtLeMotDePasse() throws Throwable {
		PageFactory.initElements(driver, CNXP.class);
		cnxp.connexionExcel();
		ExcelUtils.setCellData("Pass", 1, 3);

	}

}