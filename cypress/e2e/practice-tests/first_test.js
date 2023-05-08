/// <reference types="cypress"/> 


describe('template spec', () => {
    it('passes', () => {
        
        viewport(1840, 1240)
        cy.visit("http://www.webdriveruniversity.com/") 
    })

    it('demo test', () => {

        cy.demo("indu.aggarwal")


    })

    //timeouts
    it.only('experiment timeouts', () => {

        cy.visit("https://www.yodel.co.uk/",{timeout: 2000})
        // .as('waitYodel')
        // cy.wait('@waitYodel')
        cy.get('#ccc-notify-accept').click()
        cy.get("[name='fromPostcode']").type('SL1 2NE')
        cy.get("[name='destinationPostcode']").type('SL1 4DX')
        cy.get("[name='button']").contains('Get Quote')



    })

    
})

