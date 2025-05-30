# 🧪 SauceDemoCypressBDD

## 🤖 Cypress BDD - Automation for SauceDemo

This project implements **automation testing** using **Cypress** with **BDD-style (Behavior Driven Development)** syntax via `@badeball/cypress-cucumber-preprocessor` to test key features on [https://www.saucedemo.com](https://www.saucedemo.com), including:

- Valid and invalid login
- Product filtering
- Add to cart
- View cart
- Remove product from cart
- Product checkout

---

## 🗂️ Folder Structure

```

cypress-saucedemo-bdd/
├── cypress/
│   ├── e2e/
│   │   └── saucedemo/
│   │       ├── login.feature          # Login scenarios (positive & negative)
│   │       ├── login.js               # Step definitions for login
│   │       ├── filter.feature         # Product filter scenarios
│   │       ├── filter.js              # Step definitions for filter
│   │       ├── add\_to\_cart.feature    # Add to cart scenarios
│   │       └── add\_to\_cart.js         # Step definitions for add to cart
│   ├── support/
│   │   └── e2e.js                     # Global support (can be empty)
├── cypress.config.js                 # Cypress configuration
├── package.json                      # Dependencies and scripts
├── README.md                         # Project documentation

````

---

## ⚙️ How to Run

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd cypress-saucedemo-bdd
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run tests

#### Open Cypress UI

```bash
npx cypress open
```

#### Or headless run via CLI

```bash
npx cypress run --browser chrome
```

---

## ✅ Test Scenarios Covered

### Login:

* ✅ Successful login with valid credentials
* ❌ Login with incorrect password
* ❌ Login with incorrect username
* ❌ Login with empty username
* ❌ Login with empty password
* ❌ Login with locked out user

### Products:

* ✅ Filter products by Name (A-Z)
* ✅ Filter products by Name (Z-A)
* ✅ Filter products by Price (Low to High)
* ✅ Filter products by Price (High to Low)

### Cart:

* ✅ Add product to cart
* ⬜ View shopping cart
* ⬜ Remove product from cart

### Checkout:

* ⬜ Successful checkout
* ⬜ Checkout with missing First Name
* ⬜ Checkout with missing Last Name
* ⬜ Checkout with missing Zip Code

---

## 🧪 Execution Results

After running the tests, Cypress will show:

* CLI summary with passed/failed specs
* Screenshots for failed tests (in `cypress/screenshots/`)
* Optional video (if enabled in config)

---

## 📦 Requirements

* Node.js v18+
* npm
* Google Chrome or Microsoft Edge

---

## 📘 Notes

This project uses:

* [`@badeball/cypress-cucumber-preprocessor`](https://github.com/badeball/cypress-cucumber-preprocessor)
* `Cypress` for automation engine
* `esbuild` for BDD support

