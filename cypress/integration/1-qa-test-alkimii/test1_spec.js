describe('TEST 1: Login', () => {
  it('Login test case', () => {
    //Visit the site "https://flask.io"
    cy.visit('https://flask.io')
    //Click the "Log in" buttom
    cy.get('.btn-tertiary').click()
    //Fill the form "Email"
    cy.get('#user_email').type('olga200@mailinator.com')
    //Fill the form "Password"
    cy.get('#user_password').type('1234567')
    //Click the "Log in" buttom
    cy.get('[name^=commit]').click()
    //Check the log in
    cy.contains('Signed in successfully.')
  })
})
