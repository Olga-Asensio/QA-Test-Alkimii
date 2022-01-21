describe('TEST 2: Create a list', () => {
    it('Login', () => {
        cy.visit('https://flask.io')
        cy.get('.btn-tertiary').click()
        cy.get('#user_email').type('olga200@mailinator.com')
        cy.get('#user_password').type('1234567')
        cy.get('[name^=commit]').click()
        cy.contains('Signed in successfully.')
    })
    it('Create list', () => {
        //Click "Create a new list" buttom
        cy.get('.btn-primary').click()
    })
})