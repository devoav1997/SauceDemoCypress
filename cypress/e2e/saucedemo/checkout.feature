Feature: Product Checkout

  As a user
  I want to complete the checkout process
  So that I can purchase products successfully

  Background:
    Given I open the SauceDemo website
    And I log in with valid credentials
    And I add the product "Sauce Labs Backpack" to the cart
    And I navigate to the shopping cart
    And I proceed to checkout

  # ✅ Positive Scenario
  Scenario: Successful checkout with all required fields
    When I fill the checkout information:
      | firstName  | John    |
      | lastName   | Doe     |
      | postalCode | 12345   |
    And I continue to the overview page
    And I finish the checkout
    Then I should see the checkout complete page

  # ❌ Negative Scenario 1 - Missing First Name
  Scenario: Checkout with missing First Name
    When I fill the checkout information:
      | firstName  |         |
      | lastName   | Doe     |
      | postalCode | 12345   |
    And I continue to the overview page
    Then I should see an error message "Error: First Name is required"

  # ❌ Negative Scenario 2 - Missing Last Name
  Scenario: Checkout with missing Last Name
    When I fill the checkout information:
      | firstName  | John    |
      | lastName   |         |
      | postalCode | 12345   |
    And I continue to the overview page
    Then I should see an error message "Error: Last Name is required"

  # ❌ Negative Scenario 3 - Missing Postal Code
  Scenario: Checkout with missing Zip Code
    When I fill the checkout information:
      | firstName  | John    |
      | lastName   | Doe     |
      | postalCode |         |
    And I continue to the overview page
    Then I should see an error message "Error: Postal Code is required"
