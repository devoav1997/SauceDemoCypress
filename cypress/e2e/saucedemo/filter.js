import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("the user is logged in with valid credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
});

When("the user selects the {string} filter option", (filterOption) => {
    cy.get('[data-test="product-sort-container"]').select(filterOption);
});

Then("the products should be sorted alphabetically from A to Z", () => {
  cy.get(".inventory_item_name").then((items) => {
    const names = [...items].map((el) => el.innerText);
    const sorted = [...names].sort();
    expect(names).to.deep.equal(sorted);
  });
});

Then("the products should be sorted alphabetically from Z to A", () => {
  cy.get(".inventory_item_name").then((items) => {
    const names = [...items].map((el) => el.innerText);
    const sorted = [...names].sort().reverse();
    expect(names).to.deep.equal(sorted);
  });
});

Then("the products should be sorted by price from lowest to highest", () => {
  cy.get(".inventory_item_price").then((items) => {
    const prices = [...items].map((el) => parseFloat(el.innerText.replace("$", "")));
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).to.deep.equal(sorted);
  });
});

Then("the products should be sorted by price from highest to lowest", () => {
  cy.get(".inventory_item_price").then((items) => {
    const prices = [...items].map((el) => parseFloat(el.innerText.replace("$", "")));
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).to.deep.equal(sorted);
  });
});
