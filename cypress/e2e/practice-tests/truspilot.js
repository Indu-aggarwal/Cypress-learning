/// <reference types="cypress"/> 


describe('test truspilot widge navigation', () => {
    it('truspilot navigation', () => {
        cy.viewport(1840, 1240)
        cy.visit("https://www.yodel.co.uk/") 
        cy.scrollTo('bottom')

        cy.get('.trustpilot-widget > iframe').as('iframe')

        cy.get('@iframe').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe')
        .find("#profileLink")
        .invoke("removeAttr", '_blank')
        .click()

        

        cy.origin(`https://uk.trustpilot.com/review/yodel.co.uk`,()=>{
            cy.url().should('contain', 'https://uk.trustpilot.com/review/yodel.co.uk')
            
        })
    })
})

