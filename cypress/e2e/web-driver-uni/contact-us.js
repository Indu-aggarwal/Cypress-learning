/// <reference types="cypress"/> 


describe('contact us form', () => {
    it('click on the contact us link and valid the contact us url', () => {
        cy.viewport(1840, 1240)
        cy.visit("http://www.webdriveruniversity.com/")

        cy.get('#contact-us').invoke('removeAttr', 'target').click()

        cy.url().should('include', '/Contact-Us/contactus')
    })

    it('submit the contact us form', () => {
        cy.viewport(1840, 1240)
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")

        cy.get('[name="first_name"]')
        .should('have.attr', 'placeholder', 'First Name')
        .type("Sankar")

        cy.get('[name="last_name"]')
        .should('have.attr', 'placeholder', 'Last Name')
        .type("Govindan")

        cy.get('[name="email"]')
        .should('have.attr', 'placeholder', 'Email Address')
        .type("Govindan@yopmail.com")

        cy.get('[name="message"]')
        .should('have.attr', 'placeholder', 'Comments')
        .type("I am learning Cypress")

        cy.get('[value="SUBMIT"]')
        .click()




        // cy.url().should('include', '/Contact-Us/contactus')
    })



})

