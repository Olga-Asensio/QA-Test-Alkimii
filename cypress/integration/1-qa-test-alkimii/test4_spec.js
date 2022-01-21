describe('TEST 4: Create a list with multiple tasks', () => {
    it('Login', () => {
        cy.visit('https://flask.io')
        cy.get('.btn-tertiary').click()
        cy.get('#user_email').type('olga200@mailinator.com')
        cy.get('#user_password').type('1234567')
        cy.get('[name^=commit]').click()
        cy.contains('Signed in successfully.')
    })
    it('Create a list with multiple tasks', () => {
        //Click "Create a new list" buttom
        cy.get('.btn-primary').click()
        //Add tasks to the list
        for (let i = 0; i < 11; i++) {
            if (i == 0) {
                cy.get('#list_tasks_attributes_0_description').type('....')
                cy.get('#list_tasks_attributes_0_description').type('{enter}')
            } else if (i !== 0) {
                cy.get('#task_description').type('....')
                cy.get('#task_description').type('{enter}')
            }
        }
        //Check the list was created succesfully
        cy.contains("Great, we've created a list for you. You should save your list so you don't forget it.")
    })
})