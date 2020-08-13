package stepDefinition;

import Utils.BasePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPages.LoginPage;

public class LoginPageSD {

    private LoginPage loginPage = new LoginPage();

    @Given("^I am on main page$")
    public void setMainPage(){
        loginPage.clickMainPageLogin();
        loginPage.clickMainPageLogin2();
        Assert.assertEquals(BasePage.get().getCurrentUrl(), "https://login.salesforce.com/");

    }

    @When("^I enter (.+) into (username|password) field on the login page$")
        public void enterDataIntoTextField(String value, String textField){

        switch (textField){
            case "username":
                loginPage.enterUsername(value);
            case "password":
                loginPage.enterPassword(value);
        }
    }

    @And("^I click on login button on the login page$")
    public void clickOnLoginButton(){
        loginPage.clickLoginPage();
    }

    @Then("^I verify invalid login massage on login page$")
    public void verifyLoginErrorMessage(){
        Assert.assertEquals(loginPage.getErrorMessage(), "Please check your username and password. If you still can't log in, contact your Salesforce administrator.");
    }



}
