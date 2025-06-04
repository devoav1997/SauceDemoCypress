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

Given("I add the product {string} to the cart", (productName) => {
  cy.contains(".inventory_item", productName)
    .find("button")
    .click();
});

Given("I navigate to the shopping cart", () => {
  cy.get(".shopping_cart_link").click();
});

Given("I proceed to checkout", () => {
  cy.get('[data-test="checkout"]').click();
});

When("I fill the checkout information:", (dataTable) => {
  const data = dataTable.rowsHash();

  if (data.firstName !== undefined && data.firstName.trim() !== "") {
    cy.get('[data-test="firstName"]').clear().type(data.firstName);
  } else {
    cy.get('[data-test="firstName"]').clear();
  }

  if (data.lastName !== undefined && data.lastName.trim() !== "") {
    cy.get('[data-test="lastName"]').clear().type(data.lastName);
  } else {
    cy.get('[data-test="lastName"]').clear();
  }

  if (data.postalCode !== undefined && data.postalCode.trim() !== "") {
    cy.get('[data-test="postalCode"]').clear().type(data.postalCode);
  } else {
    cy.get('[data-test="postalCode"]').clear();
  }
});


When("I continue to the overview page", () => {
  cy.get('[data-test="continue"]').click();
});

When("I finish the checkout", () => {
  cy.get('[data-test="finish"]').click();
});

Then("I should see the checkout complete page", () => {
  cy.get(".complete-header").should("have.text", "Thank you for your order!");
});

Then("I should see an error message {string}", (errorMessage) => {
  cy.get('[data-test="error"]').should("have.text", errorMessage);
});
