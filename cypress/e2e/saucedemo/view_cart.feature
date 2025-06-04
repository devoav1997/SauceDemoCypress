Feature: View Shopping Cart

  As a user
  I want to view the contents of my shopping cart
  So that I can verify the products I want to purchase

  Background:
    Given I open the SauceDemo website
    And I log in with valid credentials

  # ✅ Positive Scenario 1
  Scenario: View cart after adding a product
    When I add the product "Sauce Labs Backpack" to the cart
    And I navigate to the shopping cart
    Then I should see the product "Sauce Labs Backpack" in the cart

  # ✅ Positive Scenario 2
  Scenario: View cart after adding multiple products
    When I add the product "Sauce Labs Backpack" to the cart
    And I add the product "Sauce Labs Bolt T-Shirt" to the cart
    And I navigate to the shopping cart
    Then I should see the following products in the cart:
      | Sauce Labs Backpack        |
      | Sauce Labs Bolt T-Shirt    |

  # ❌ Negative Scenario 1
  Scenario: View cart without adding any product (empty cart)
    When I navigate to the shopping cart
    Then the cart should be empty

  # ❌ Negative Scenario 2
  Scenario: Cart should not display unadded products
    When I add the product "Sauce Labs Backpack" to the cart
    And I navigate to the shopping cart
    Then I should not see the product "Sauce Labs Fleece Jacket" in the cart