describe('TEST 5: Create a list, name it, create multiple tasks', () => {
    it('Login', () => {
        cy.visit('https://flask.io')
        cy.get('.btn-tertiary').click()
        cy.get('#user_email').type('olga200@mailinator.com')
        cy.get('#user_password').type('1234567')
        cy.get('[name^=commit]').click()
        cy.contains('Signed in successfully.')
    })
    it('Name the list', () => {
        //Click "Create a new list" buttom
        cy.get('.btn-primary').click()
        //Type a task
        cy.get('#list_tasks_attributes_0_description').type('....')
        cy.get('#list_tasks_attributes_0_description').type('{enter}')
        //Click the default name
        cy.get('.best_in_place').dblclick()
        //Change the name 
        cy.get('header > h1 > span').type('New Name')
        cy.get('#task_description').click()
    })
    it('Create a list with multiple tasks', () => {
        //Add tasks to the list
        cy.get('#task_description').click()
        for (let i = 0; i < 10; i++) {
            cy.get('#task_description').type('....')
            cy.get('#task_description').type('{enter}')
        }
        //Check the list was created succesfully
        cy.contains("Great, we've created a list for you. You should save your list so you don't forget it.")
    })
})