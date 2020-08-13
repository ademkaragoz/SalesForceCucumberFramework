package runnerTest.webPages;

import org.openqa.selenium.By;

public class LoginPage extends  ElementUtil{

    //Locator
    private By loginBtn = By.xpath("//a[@data-toggle= 'dropdown']");
    private By loginBtn2 = By.xpath("//span[contains(@class,'header-text')][contains(text(),'Login')]");
    private By usernameField = By.id("username");
    private By passwordField = By.id("password");
    private By loginBtn3 = By.id("Login");
    private By errorText = By.id("error");

    //Actions
    public void clickMainPageLogin(){
        moveToElement(loginBtn);
    }

    public void clickMainPageLogin2(){
        clickOn(loginBtn2);
    }

    public void enterUsername(String username){
        sendValue(usernameField, username);
    }

    public void enterPassword(String password){
        sendValue(passwordField, password);
    }

    public void clickLoginPage(){
        clickOn(loginBtn3);
    }

    public String getErrorMessage(){
        return getTextFromElement(errorText);
    }














}
