describe('template spec', () => {
  it('register', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').clear('w');
    cy.get('[data-qa="signup-name"]').type('wahyu');
    cy.get('[data-qa="signup-email"]').clear();
    cy.get('[data-qa="signup-email"]').type('wahyu@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get(':nth-child(3) > .top').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear('12');
    cy.get('[data-qa="password"]').type('12345678');
    cy.get('[data-qa="days"]').select('2');
    cy.get('[data-qa="months"]').select('10');
    cy.get('[data-qa="years"]').select('2001');
    cy.get('[data-qa="first_name"]').clear('W');
    cy.get('[data-qa="first_name"]').type('Wahyu');
    cy.get('[data-qa="last_name"]').clear();
    cy.get('[data-qa="last_name"]').type('Pratama');
    cy.get('[data-qa="address"]').clear();
    cy.get('[data-qa="address"]').type('Malang');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').clear('I');
    cy.get('[data-qa="state"]').type('Malang');
    cy.get('[data-qa="city"]').clear();
    cy.get('[data-qa="city"]').type('Malang');
    cy.get('[data-qa="zipcode"]').clear();
    cy.get('[data-qa="zipcode"]').type('61264');
    cy.get('[data-qa="mobile_number"]').clear();
    cy.get('[data-qa="mobile_number"]').type('01');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('login user', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear();
    cy.get('[data-qa="login-email"]').type('wahyu@gmail.com');
    cy.get('[data-qa="login-password"]').clear('12');
    cy.get('[data-qa="login-password"]').type('12345678');
    cy.get('[data-qa="login-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Login User with incorrect email and password', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').click();
    cy.get('[data-qa="login-email"]').clear('wahyu@gmail.com');
    cy.get('[data-qa="login-email"]').type('wahyu@gmail.com');
    cy.get('[data-qa="login-password"]').clear('a');
    cy.get('[data-qa="login-password"]').type('awawaw');
    cy.get('[data-qa="login-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Logout User', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.header-middle > .container > .row').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('wahyu@gmail.com');
    cy.get('[data-qa="login-email"]').type('wahyu@gmail.com');
    cy.get('[data-qa="login-password"]').clear('1');
    cy.get('[data-qa="login-password"]').type('12345678');
    cy.get('[data-qa="login-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Register User with existing email', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4)').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').clear('wahyu');
    cy.get('[data-qa="signup-name"]').type('wahyu');
    cy.get('[data-qa="signup-email"]').click();
    cy.get('[data-qa="signup-email"]').clear('wahyu@gmail.com');
    cy.get('[data-qa="signup-email"]').type('wahyu@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Contact Us Form', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
    cy.get('[data-qa="name"]').clear('wa');
    cy.get('[data-qa="name"]').type('wahyu');
    cy.get('[data-qa="email"]').clear();
    cy.get('[data-qa="email"]').type('wahyu@gmail.com');
    cy.get('[data-qa="subject"]').clear();
    cy.get('[data-qa="subject"]').type('subject');
    cy.get('[data-qa="message"]').click();
    cy.get('[data-qa="message"]').click();
    cy.get(':nth-child(6) > .form-control').click();
    cy.get('[data-qa="submit-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Verify Test Cases Page', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get(':nth-child(2) > .panel > .panel-heading > .panel-title > a > u').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Verify All Products and product detail page', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Search Product', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').clear('B');
    cy.get('#search_product').type('Blue Top');
    cy.get('#submit_search > .fa').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Verify Subscription in home page', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#susbscribe_email').clear('wa');
    cy.get('#susbscribe_email').type('wahyu@gmail.com');
    cy.get('#subscribe > .fa').click();
    /* ==== End Cypress Studio ==== */
  })
})