describe('login',()=>{

    beforeEach(()=>{
        cy.visit('http://www.saucedemo.com/')

    })

    it('Login con usuario bloqueado',()=>{
        cy.log('Test1')
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain','Epic sadface: Sorry, this user has been locked out.')
    })
})