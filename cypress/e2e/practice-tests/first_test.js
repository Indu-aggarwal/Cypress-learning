/// <reference types="cypress"/> 


describe('template spec', () => {
    it('passes', () => {
        
        viewport(1840, 1240)
        cy.visit("http://www.webdriveruniversity.com/") 
    })

    it.only('demo test', () => {

        cy.demo("indu.aggarwal")

    })
})

