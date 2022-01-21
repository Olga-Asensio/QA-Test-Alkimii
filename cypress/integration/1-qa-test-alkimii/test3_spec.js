describe('TEST 3: Create a list with task', () => {
    it('Login', () => {
        cy.visit('https://flask.io')
        cy.get('.btn-tertiary').click()
        cy.get('#user_email').type('olga200@mailinator.com')
        cy.get('#user_password').type('1234567')
        cy.get('[name^=commit]').click()
        cy.contains('Signed in successfully.')
    })
    it('Create a list with task', () => {
        //Click "Create a new list" buttom
        cy.get('.btn-primary').click()
        //Type a task
        cy.get('#list_tasks_attributes_0_description').type('First task')
        cy.get('#list_tasks_attributes_0_description').type('{enter}')
        //Check the list was created succesfully
        cy.contains("Great, we've created a list for you. You should save your list so you don't forget it.")
    })
})