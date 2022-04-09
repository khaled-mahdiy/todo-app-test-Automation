describe('verify e2e scenarios',()=>{
    it('should able to add ,update and delete task',()=>{
        cy.visit('http://localhost:3000/todo')
        cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
        cy.get('[data-testid="password"]').type('Test123!')
        cy.get('[data-testid="submit"]').click()
        cy.url().should('contain','/todo')
        cy.get('[data-testid="welcome"]').should('be.visible')
        cy.get('[data-testid="add"]').click()
        cy.get('[data-testid="new-todo"]').type('helo world')
        cy.get('[data-testid="submit-newTask"]').click()
        cy.get('[data-testid="todo-item"]').first().should('have.text','helo world')
        cy.get('[data-testid="complete-task"]').first().click()
        cy.get('[data-testid="todo-item"]').first().should('have.css','background-color','rgb(33, 76, 97)')
        cy.get('[data-testid="delete"]').first().click()
        cy.get('[data-testid="todo-item"]').first().should('not.exist')
        cy.get('[data-testid="no-todos"]').should('be.visible')

    })
})