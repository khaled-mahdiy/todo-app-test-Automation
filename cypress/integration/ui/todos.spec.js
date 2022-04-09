describe('verify todo page',()=>{
    beforeEach(()=>{
        localStorage.setItem('user',
        '{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGY0ZjdjODY2MDU2MDJlOGYyMzc4YSIsImZpcnN0TmFtZSI6ImFiYyIsImxhc3ROYW1lIjoiYWJjIiwiaWF0IjoxNjQ5MzY5ODUxfQ.GA2YKmenBwHk9m6NVl2bb3D92iVilzxIQXru-AJYLtw","userID":"624f4f7c86605602e8f2378a","firstName":"abc"}')
        cy.intercept('GET','**api/v1/tasks',{
            fixture:'todo'
        })
        cy.visit('/todo')
    })
    it('should show not completed todos',()=>{
        cy.get('[data-testid="todo-item"]').first().should('have.css','background-color', 'rgb(33, 76, 97)')
        cy.get('[data-testid="complete-task"]').first().should('have.attr','checked')
        cy.get('[data-testid="todo-text"]').first().should('have.css','text-decoration','line-through solid rgb(145, 158, 171)')
    })
    it('should show  completed todos',()=>{
        cy.get('[data-testid="todo-item"]').last().should('have.css','background-color', 'rgb(63, 81, 181)')
        cy.get('[data-testid="complete-task"]').last().should('not.have.attr','checked')
    })

    it('verify pagenation todo page',()=>{
        cy.intercept('GET','**api/v1/tasks',{
            fixture:'pagenation'
        })
        cy.visit('/todo')
        cy.get('[data-test-id="pagination-link"]').should('be.visible').and('have.length',2)

    })
})