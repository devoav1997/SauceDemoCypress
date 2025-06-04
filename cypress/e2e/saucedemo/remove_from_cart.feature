Feature: Remove Product from Cart

  As a user
  I want to be able to remove products from my shopping cart
  So that I can update my purchase before checkout

  Background:
    Given I open the SauceDemo website
    And I log in with valid credentials

  Scenario: Remove single product from cart
    When I add the product "Sauce Labs Backpack" to the cart
    And I navigate to the shopping cart
    And I remove the product "Sauce Labs Backpack" from the cart
    Then the cart should be empty

  Scenario: Remove one of multiple products from cart
    When I add the product "Sauce Labs Backpack" to the cart
    And I add the product "Sauce Labs Bolt T-Shirt" to the cart
    And I navigate to the shopping cart
    And I remove the product "Sauce Labs Backpack" from the cart
    Then I should see the product "Sauce Labs Bolt T-Shirt" in the cart
    And I should not see the product "Sauce Labs Backpack" in the cart
