@web

  Feature: Login page feature

    Background:
      Given I am on main page

      @login
      Scenario: Click login button from main page
        When I enter talhakaragoz@gmail.com into username field on the login page
        And I enter test786! into password field on the login page
        And I click on login button on the login page
        Then I verify invalid login massage on login page
