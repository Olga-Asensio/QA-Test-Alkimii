describe('TEST 6: Enter in the previous list, mark task as completed', () => {
    it('Login', () => {
        cy.visit('https://flask.io')
        cy.get('.btn-tertiary').click()
        cy.get('#user_email').type('olga200@mailinator.com')
        cy.get('#user_password').type('1234567')
        cy.get('[name^=commit]').click()
        cy.contains('Signed in successfully.')
    })
    it('Enter in the previous list', () => {
        
    })
})