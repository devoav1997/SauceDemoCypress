Feature: SauceDemo Login Feature

  Scenario: Successful login with valid credentials
    Given the user is on the SauceDemo login page
    When the user enters username "standard_user" and password "secret_sauce"
    And the user clicks the login button
    Then the user should be redirected to the product inventory page

  Scenario: Failed login with invalid password
    Given the user is on the SauceDemo login page
    When the user enters username "standard_user" and password "wrong_password"
    And the user clicks the login button
    Then an error message "Username and password do not match" should be displayed

  Scenario: Failed login with invalid username
    Given the user is on the SauceDemo login page
    When the user enters username "wrong_user" and password "secret_sauce"
    And the user clicks the login button
    Then an error message "Username and password do not match" should be displayed

  Scenario: Failed login with locked out user
    Given the user is on the SauceDemo login page
    When the user enters username "locked_out_user" and password "secret_sauce"
    And the user clicks the login button
    Then an error message "Sorry, this user has been locked out." should be displayed

  Scenario: Failed login with empty username
    Given the user is on the SauceDemo login page
    When the user enters username "" and password "secret_sauce"
    And the user clicks the login button
    Then an error message "Username is required" should be displayed

  Scenario: Failed login with empty password
    Given the user is on the SauceDemo login page
    When the user enters username "standard_user" and password ""
    And the user clicks the login button
    Then an error message "Password is required" should be displayed
