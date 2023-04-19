/// <reference types="cypress"/> 


describe('contact us form', () => {
    it('click on the contact us link and valid the contact us url', () => {
        cy.viewport(1840, 1240)
        cy.visit("http://www.webdriveruniversity.com/")

        cy.get('#contact-us').invoke('removeAttr', 'target').click()

        cy.url().should('include', '/Contact-Us/contactus')
    })

})

