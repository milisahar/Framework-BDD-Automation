package com.selenium.e2eTests.connexionXLSx.pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import com.selenium.e2eTests.utils.ExcelUtils;

public class CNXP {

	/* Locators */
	final static String USER_NAME_ID = "txtUsername";
	final static String USER_PASSWORD_ID = "txtPassword";

	/* @FindBy */

	@FindBy(how = How.ID, using = USER_NAME_ID)
	public static WebElement userName;
	@FindBy(how = How.ID, using = USER_PASSWORD_ID)
	public static WebElement password;

	public static void connexionExcel() {
		String xlUsername = ExcelUtils.getCellData(1, 1);
		String xlPassword = ExcelUtils.getCellData(1, 2);
		userName.sendKeys(xlUsername);
		password.sendKeys(xlPassword);
	}

}