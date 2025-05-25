import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the SauceDemo login page", () => {
  cy.visit("https://www.saucedemo.com/");
}
);

When("the user enters username {string} and password {string}", (username, password) => {
    if (username !== "") {
      cy.get('[data-test="username"]').clear().type(username);
    }else {
      cy.get('[data-test="username"]').clear();
    }

    if (password !== "") {  
      cy.get('[data-test="password"]').clear().type(password);
    }
    else {
      cy.get('[data-test="password"]').clear();
    }
});

When("the user clicks the login button", () => {
  cy.get('[data-test="login-button"]').click();
});

Then("the user should be redirected to the product inventory page", () => {
  cy.url().should("include", "/inventory.html");
  cy.contains("Products").should("exist");
});

Then("an error message {string} should be displayed", (errorMessage) => {
  cy.get('[data-test="error"]').should("be.visible").and("contain.text", errorMessage);
});