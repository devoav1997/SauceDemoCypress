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

Then("the cart badge should display {string}", (count) => {
  cy.get(".shopping_cart_badge").should("have.text", count);
});

Then("the product {string} should appear in the cart", (productName) => {
  cy.get(".shopping_cart_link").click();
  cy.contains(".cart_item", productName).should("exist");
});

Then("the cart should contain:", (dataTable) => {
  cy.get(".shopping_cart_link").click();

  const expectedProducts = dataTable.raw().flat();

  expectedProducts.forEach((product) => {
    cy.contains(".cart_item", product).should("exist");
  });
});
