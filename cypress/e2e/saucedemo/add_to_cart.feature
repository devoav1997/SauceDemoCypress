Feature: Add Product to Cart

  As a user
  I want to add a product to my shopping cart
  So that I can purchase it later

  Background:
    Given I open the SauceDemo website
    And I log in with valid credentials

  Scenario: Successfully add a single product to the cart
    When I add the product "Sauce Labs Backpack" to the cart
    Then the cart badge should display "1"
    And the product "Sauce Labs Backpack" should appear in the cart

  Scenario: Add multiple products to the cart
    When I add the product "Sauce Labs Backpack" to the cart
    And I add the product "Sauce Labs Bolt T-Shirt" to the cart
    Then the cart badge should display "2"
    And the cart should contain:
      | Sauce Labs Backpack       |
      | Sauce Labs Bolt T-Shirt  |
