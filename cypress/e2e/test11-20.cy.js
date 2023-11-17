describe('template spec', () => {
  it('Verify Subscription in Cart page', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('#susbscribe_email').clear('wahyu@gmail.com');
    cy.get('#susbscribe_email').type('wahyu@gmail.com');
    cy.get('#subscribe').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('#susbscribe_email').clear('wahyu@gmail.com');
    cy.get('#susbscribe_email').type('wahyu@gmail.com');
    cy.get('#subscribe').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('#susbscribe_email').clear('wahyu@gmail.com');
    cy.get('#susbscribe_email').type('wahyu@gmail.com');
    cy.get('#subscribe').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Add Products in Cart', () => {
    cy.visit('https://www.automationexercise.com/')    
  })
  it('Verify Product quantity in Cart', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('#quantity').click();
    cy.get('#quantity').click();
    cy.get('#quantity').click();
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Place Order: Register while Checkout', () => { // Error
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.automationexercise.com/');
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.modal-body').click();
    cy.get('.modal-body > :nth-child(2) > a > u').click();
    cy.get('[data-qa="signup-name"]').clear('wahyu');
    cy.get('[data-qa="signup-name"]').type('wahyu');
    cy.get('[data-qa="signup-email"]').clear('wahyu@gmail.com');
    cy.get('[data-qa="signup-email"]').type('wahyu@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="password"]').clear('12');
    cy.get('[data-qa="password"]').type('12345678');
    cy.get('[data-qa="days"]').select('2');
    cy.get('[data-qa="months"]').select('10');
    cy.get('[data-qa="years"]').select('2001');
    cy.get('[data-qa="first_name"]').clear('w');
    cy.get('[data-qa="first_name"]').type('wahyu');
    cy.get('[data-qa="last_name"]').clear();
    cy.get('[data-qa="last_name"]').type('pratama');
    cy.get('[data-qa="address"]').clear('Malang');
    cy.get('[data-qa="address"]').type('Malang');
    cy.get('[data-qa="address2"]').click();
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').clear('Malang');
    cy.get('[data-qa="state"]').type('Malang');
    cy.get('[data-qa="city"]').clear('Malang');
    cy.get('[data-qa="city"]').type('Malang');
    cy.get('[data-qa="zipcode"]').clear('61264');
    cy.get('[data-qa="zipcode"]').type('61264');
    cy.get('[data-qa="mobile_number"]').clear('01');
    cy.get('[data-qa="mobile_number"]').type('01');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('wa');
    cy.get('[data-qa="name-on-card"]').type('wahyu pratama');
    cy.get('[data-qa="card-number"]').clear('1');
    cy.get('[data-qa="card-number"]').type('1234');
    cy.get('[data-qa="cvc"]').clear('31');
    cy.get('[data-qa="cvc"]').type('311');
    cy.get('[data-qa="expiry-month"]').clear('02');
    cy.get('[data-qa="expiry-month"]').type('02');
    cy.get('[data-qa="expiry-year"]').clear();
    cy.get('[data-qa="expiry-year"]').type('2025');
    cy.get('[data-qa="pay-button"]').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Place Order: Register before Checkout', () => { // Error
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').clear('wahyu');
    cy.get('[data-qa="signup-name"]').type('wahyu');
    cy.get('[data-qa="signup-email"]').clear('wahyu@gmail.com');
    cy.get('[data-qa="signup-email"]').type('wahyu@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear('12');
    cy.get('[data-qa="password"]').type('12345678');
    cy.get('[data-qa="days"]').select('2');
    cy.get('[data-qa="months"]').select('10');
    cy.get('[data-qa="years"]').select('2001');
    cy.get('[data-qa="first_name"]').clear('wahyu');
    cy.get('[data-qa="first_name"]').type('wahyu');
    cy.get('.login-form > form').click();
    cy.get('[data-qa="last_name"]').clear('pratama');
    cy.get('[data-qa="last_name"]').type('pratama');
    cy.get('[data-qa="company"]').click();
    cy.get('[data-qa="address"]').clear('Malang');
    cy.get('[data-qa="address"]').type('Malang');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').clear('Malang');
    cy.get('[data-qa="state"]').type('Malang');
    cy.get('[data-qa="city"]').clear('Malang');
    cy.get('[data-qa="city"]').type('Malang');
    cy.get('[data-qa="zipcode"]').clear('61264');
    cy.get('[data-qa="zipcode"]').type('61264');
    cy.get('[data-qa="mobile_number"]').clear('01');
    cy.get('[data-qa="mobile_number"]').type('01');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.modal-body').click();
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('wahyu pratama');
    cy.get('[data-qa="name-on-card"]').type('wahyu pratama');
    cy.get('[data-qa="card-number"]').clear('12');
    cy.get('[data-qa="card-number"]').type('1234');
    cy.get('[data-qa="cvc"]').clear('3');
    cy.get('[data-qa="cvc"]').type('311');
    cy.get('[data-qa="expiry-month"]').clear('0');
    cy.get('[data-qa="expiry-month"]').type('02');
    cy.get('[data-qa="expiry-year"]').clear();
    cy.get('[data-qa="expiry-year"]').type('2025');
    cy.get('[data-qa="pay-button"]').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Place Order: Login before Checkout', () => { // error
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('wahyu@gmail.com');
    cy.get('[data-qa="login-email"]').type('wahyu@gmail.com');
    cy.get('[data-qa="login-password"]').clear();
    cy.get('[data-qa="login-password"]').type('12345678');
    cy.get('[data-qa="login-button"]').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('wahyu pratama');
    cy.get('[data-qa="name-on-card"]').type('wahyu pratama');
    cy.get('[data-qa="card-number"]').clear('12');
    cy.get('[data-qa="card-number"]').type('1234');
    cy.get('[data-qa="cvc"]').clear('31');
    cy.get('[data-qa="cvc"]').type('311');
    cy.get('[data-qa="expiry-month"]').clear('0');
    cy.get('[data-qa="expiry-month"]').type('02');
    cy.get('[data-qa="expiry-year"]').clear('20');
    cy.get('[data-qa="expiry-year"]').type('2025');
    cy.get('[data-qa="pay-button"]').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('.col-sm-9').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Remove Products From Cart', () => { // error
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
    cy.get('u').click();
    cy.get('.cart_quantity_delete').click();
    /* ==== End Cypress Studio ==== */
  })
  it('View Category Products', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click();
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click();
    cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click();
    /* ==== End Cypress Studio ==== */
  })
  it('View & Cart Brand Products', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('.brands-name > .nav > :nth-child(1) > a').click();
    cy.get('section').click();
    cy.get('section').click();
    cy.get('.brands-name > .nav > :nth-child(2) > a').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Search Products and Verify Cart After Login', () => { // error
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('a > .material-icons').click();
    cy.get('#search_product').clear('Blue Top');
    cy.get('#search_product').type('Blue Top{enter}');
    cy.get('#submit_search').click();
    cy.get('.overlay-content > .btn').click();
    cy.get('.modal-body > :nth-child(2)').click();
    cy.get('u').click();
    cy.get(':nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('wahyu@gmail.com');
    cy.get('[data-qa="login-email"]').type('wahyu@gmail.com');
    cy.get('[data-qa="login-password"]').clear('12');
    cy.get('[data-qa="login-password"]').type('12345678{enter}');
    cy.get('[data-qa="login-button"]').click();
    /* ==== End Cypress Studio ==== */
  })  
})