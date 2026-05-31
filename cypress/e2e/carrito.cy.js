describe('Inventario - Sauce Demo',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','/inventory.html')
    })

    it('Agregar un producto al carrito',()=> {
        cy.get('#item_1_title_link').scrollIntoView()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').should('be.visible')
        cy.get('.app_logo').scrollIntoView()
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
    })

    it('Agregar múltiples productos y verificar contador',()=> {
        const cantidadSelec = 3;

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        
        cy.get('#item_1_title_link').scrollIntoView()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('be.visible')

        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').should('be.visible')

        cy.get('.app_logo').scrollIntoView()
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible')

        cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', cantidadSelec.toString());
    })

    it('Eliminar un producto desde la página del carrito',()=> {
        const cantidad = 1;

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible')
        cy.get('#item_3_title_link').scrollIntoView()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').should('be.visible')
        cy.get('.app_logo').scrollIntoView()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"').click()
        cy.get('[data-test="inventory-item"]').should('have.length', cantidad);
    })

})