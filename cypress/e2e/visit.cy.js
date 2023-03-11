/// <reference types="cypress"/> 


describe('template spec', () => {
    it('passes', () => {
        cy.viewport(1840, 1240)
        cy.visit("https://spring.co.uk/discover")
        // cy.wait(2000)
        cy.get('#q').should("have.attr", "placeholder", "e.g. iPhone 14")
        .type("iphone 14")
    })
})

