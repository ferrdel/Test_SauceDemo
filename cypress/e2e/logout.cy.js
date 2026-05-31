describe('Logout Sauce Demo',()=>{
    
    beforeEach(()=>{
        cy.visit('http://www.saucedemo.com/')
    })

    it('Logout desde hamburguesa',()=>{
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="title"]').should('contain','Products')
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('[data-test="login-button"]').should('be.visible')
    })

})



