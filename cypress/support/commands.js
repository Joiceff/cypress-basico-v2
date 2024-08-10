Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Joice')
    cy.get('#lastName').type('Ferreira')
    cy.get('#email').type('Joicefernanda.ferreira@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
})