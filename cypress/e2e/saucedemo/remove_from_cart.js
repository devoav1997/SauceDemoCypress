import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const BASE_URL = "https://www.saucedemo.com";

Given("I open the SauceDemo website", () => {
  cy.visit(BASE_URL);
});

Given("I log in with valid credentials", () => {
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

When("I add the product {string} to the cart", (productName) => {
  cy.contains(".inventory_item", productName)
    .find("button")
    .click();
});

When("I navigate to the shopping cart", () => {
  cy.get(".shopping_cart_link").click();
});

When("I remove the product {string} from the cart", (productName) => {
  cy.contains(".cart_item", productName)
    .find("button")
    .click();
});

Then("the cart should be empty", () => {
  cy.get(".cart_item").should("not.exist");
});

Then("I should see the product {string} in the cart", (productName) => {
  cy.contains(".cart_item", productName).should("exist");
});

Then("I should not see the product {string} in the cart", (productName) => {
  cy.contains(".cart_item", productName).should("not.exist");
});
