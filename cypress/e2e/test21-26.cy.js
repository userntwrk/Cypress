describe('template spec', () => {
  it('Add review on product', () => { // error
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#name').clear('wahyu');
    cy.get('#name').type('wahyu');
    cy.get('#email').clear('wahyu@gmail.com');
    cy.get('#email').type('wahyu@gmail.com');
    cy.get('#review').click();
    cy.get('#review').click();
    cy.get('#button-review').click();
    cy.get('.col-md-12 > .alert-success').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Add to cart from Recommended items', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('u').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Verify address details in checkout page', () => { // error
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
    cy.get('[data-qa="password"]').click();
    cy.get('[data-qa="days"]').select('2');
    cy.get('[data-qa="months"]').select('10');
    cy.get('[data-qa="years"]').select('2001');
    cy.get('[data-qa="first_name"]').clear('wahyu');
    cy.get('[data-qa="first_name"]').type('wahyu');
    cy.get('[data-qa="last_name"]').clear('pratama');
    cy.get('[data-qa="last_name"]').type('pratama');
    cy.get('[data-qa="address"]').clear('Malang');
    cy.get('[data-qa="address"]').type('Malang');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('form > :nth-child(17)').click();
    cy.get('[data-qa="state"]').clear('Malang');
    cy.get('[data-qa="state"]').type('Malang');
    cy.get('[data-qa="city"]').clear('Malang');
    cy.get('[data-qa="city"]').type('Malang');
    cy.get('[data-qa="zipcode"]').clear('61264');
    cy.get('[data-qa="zipcode"]').type('61264');
    cy.get('form > :nth-child(20)').click();
    cy.get('[data-qa="mobile_number"]').clear('01');
    cy.get('[data-qa="mobile_number"]').type('01');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Download Invoice after purchase order', () => { // error
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
    cy.get('.modal-body').click();
    cy.get('u').click();
    cy.get('#cart_items').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.modal-body > :nth-child(2) > a > u').click();
    cy.get('[data-qa="signup-name"]').clear('wahyu');
    cy.get('[data-qa="signup-name"]').type('wahyu');
    cy.get('[data-qa="signup-email"]').clear('wahyu@gmail.com');
    cy.get('[data-qa="signup-email"]').type('wahyu@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get(':nth-child(3) > .top > [data-qa="title"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear('12');
    cy.get('[data-qa="password"]').type('12345678');
    cy.get('[data-qa="days"]').select('2');
    cy.get('[data-qa="months"]').select('10');
    cy.get('[data-qa="years"]').select('2001');
    cy.get('[data-qa="first_name"]').clear('wahyu');
    cy.get('[data-qa="first_name"]').type('wahyu');
    cy.get('[data-qa="last_name"]').clear('pratama');
    cy.get('[data-qa="last_name"]').type('pratama');
    cy.get('[data-qa="address"]').clear('Malang');
    cy.get('[data-qa="address"]').type('Malang');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').clear('Malang');
    cy.get('[data-qa="state"]').type('Malang');
    cy.get('[data-qa="city"]').clear();
    cy.get('[data-qa="city"]').type('Malang');
    cy.get('[data-qa="zipcode"]').clear();
    cy.get('[data-qa="zipcode"]').type('61264');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="mobile_number"]').clear('01');
    cy.get('[data-qa="mobile_number"]').type('01');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('wahyu pratama');
    cy.get('[data-qa="name-on-card"]').type('wahyu pratama');
    cy.get('[data-qa="card-number"]').clear('1');
    cy.get('[data-qa="card-number"]').type('1234');
    cy.get('[data-qa="cvc"]').clear('31');
    cy.get('[data-qa="cvc"]').type('311');
    cy.get('[data-qa="expiry-month"]').clear();
    cy.get('[data-qa="expiry-month"]').type('02');
    cy.get('[data-qa="expiry-year"]').clear();
    cy.get('[data-qa="expiry-year"]').type('2025');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('.col-sm-9 > .btn-default').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Verify Scroll Up using Arrow button and Scroll Down functionality', () => { // error
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.active > :nth-child(2) > .girl').click();
    cy.get('#scrollUp > .fa').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#slider').click();
    /* ==== End Cypress Studio ==== */
  })
})