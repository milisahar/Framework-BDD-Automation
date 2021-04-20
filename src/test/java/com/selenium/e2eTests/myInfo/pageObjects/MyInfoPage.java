package com.selenium.e2eTests.myInfo.pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;


public class MyInfoPage {
	
	/* locators */
	final static String MENU_MY_INFO_ID = "menu_pim_viewMyDetails";
	final static String EDIT_BUTTON_ID = "btnSave";
	final static String FULL_NAME_ID = "personal_txtEmpFirstName";
	final static String LAST_NAME_ID = "personal_txtEmpLastName";
	final static String EMPLOYEE_ID = "personal_txtEmployeeId";
	final static String SAVE_BUTTON_ID = "btnSave";
	final static String SECOND_EDIT_BUTTON_ID = "btnEditCustom";
	final static String CUSTOM_FIELDS_NAME = "custom1";
	final static String ADD_BUTTON_ID = "btnAddAttachment";
	final static String UPLOAD_FILE_BUTTON_ID = "ufile";
	final static String UPLOAD_BUTTON_ID = "btnSaveAttachment";
	
	/* @FindBy */
	@FindBy(how = How.ID, using = MENU_MY_INFO_ID)
	public static WebElement menuMyInfo;
	@FindBy(how = How.ID, using = EDIT_BUTTON_ID)
	public static WebElement btnEdit;
	@FindBy(how = How.ID, using = FULL_NAME_ID)
	public static WebElement fullName;
	@FindBy(how = How.ID, using = LAST_NAME_ID)
	public static WebElement lastName;
	@FindBy(how = How.ID, using = EMPLOYEE_ID)
	public static WebElement employee;
	@FindBy(how = How.ID, using = SAVE_BUTTON_ID)
	public static WebElement btnSave;
	@FindBy(how = How.ID, using = SECOND_EDIT_BUTTON_ID)
	public static WebElement SecBtnEdit;
	@FindBy(how = How.NAME, using = CUSTOM_FIELDS_NAME)
	public static WebElement customField;
	@FindBy(how = How.ID, using = ADD_BUTTON_ID)
	public static WebElement btnAdd;
	@FindBy(how = How.ID, using = UPLOAD_FILE_BUTTON_ID)
	public static WebElement btnUpFile ;
	@FindBy(how = How.ID, using = UPLOAD_BUTTON_ID)
	public static WebElement btnUpload;
	/* Methods */
	
	public void clickOnMyInfo() {
		menuMyInfo.click();
	}

	public void clickOnEditButton() {
		btnEdit.click();
	}

	public void fillFullName(String fullname) {
		fullName.sendKeys(fullname);
	}

	public void fillLastName(String lastname) {
		lastName.sendKeys(lastname);
	}

	public void fillEmployeeID(String employeeid) {
		employee.sendKeys(employeeid);
	}
	

	public void clickOnSaveButton() {
		btnSave.click();
	}
	
	public void clickOnSecEditButton() {
		SecBtnEdit.click();
	}

	public void selectInCustomFields() {
		Select fields = new Select(customField);
		fields.selectByIndex(1);
		//fields.getFirstSelectedOption();
		//fields.selectByVisibleText(ADD_BUTTON_ID);
	}
	public void clickOnAddButton() {
		btnAdd.click();
	}
	
	public void clickOnUploadFileButton(String url) {
		btnUpFile.sendKeys(url);
	}
	public void clickOnUploadButton() {
		btnUpload.click();
	}
}
