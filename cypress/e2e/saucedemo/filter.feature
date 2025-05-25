Feature: Product Filtering Feature

  Scenario: Filter products by Name (A to Z)
    Given the user is logged in with valid credentials
    When the user selects the "Name (A to Z)" filter option
    Then the products should be sorted alphabetically from A to Z

  Scenario: Filter products by Name (Z to A)
    Given the user is logged in with valid credentials
    When the user selects the "Name (Z to A)" filter option
    Then the products should be sorted alphabetically from Z to A

  Scenario: Filter products by Price (Low to High)
    Given the user is logged in with valid credentials
    When the user selects the "Price (low to high)" filter option
    Then the products should be sorted by price from lowest to highest

  Scenario: Filter products by Price (High to Low)
    Given the user is logged in with valid credentials
    When the user selects the "Price (high to low)" filter option
    Then the products should be sorted by price from highest to lowest
