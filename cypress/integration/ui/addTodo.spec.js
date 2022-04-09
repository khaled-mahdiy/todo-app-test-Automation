describe('verify add new to dot',()=>{
    beforeEach(()=>{
        localStorage.setItem('user',
        '{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGY0ZjdjODY2MDU2MDJlOGYyMzc4YSIsImZpcnN0TmFtZSI6ImFiYyIsImxhc3ROYW1lIjoiYWJjIiwiaWF0IjoxNjQ5MzY5ODUxfQ.GA2YKmenBwHk9m6NVl2bb3D92iVilzxIQXru-AJYLtw","userID":"624f4f7c86605602e8f2378a","firstName":"abc"}')
        cy.intercept('GET','**api/v1/tasks',{
            statusCode:200,
            fixture:'addTodo'
        })
        cy.visit('/todo')

    })
    it('add new todo shouldnot be present',()=>{
        cy.get('[data-testid="add"]').click()
        cy.url().should('contain','/todo/new')
    })
    it('add new todo shouldnot be possible if user keep feild empty',()=>{
        cy.get('[data-testid="add"]').click()
        cy.get('[data-testid="submit-newTask"]').click()
        cy.get('.MuiFormHelperText-root').should('contain','New todo is required, and it should be more than 3 characters').and('be.visible')

    })
    it('add new todo shouldnot be possible if user enter 2 characters',()=>{
        cy.get('[data-testid="add"]').click()
        cy.get('[data-testid="new-todo"]').type('hg')
        cy.get('[data-testid="submit-newTask"]').click()
        cy.get('.MuiFormHelperText-root').should('contain','New todo is required, and it should be more than 3 characters').and('be.visible')

    })
    it('add new todo should be possible if user enter 3 characters',()=>{
        cy.intercept('POST','**/api/v1/tasks',{
            statusCode:201,
            fixture:'addTodo'
        }).as('newTodo')
        cy.get('[data-testid="add"]').click()
        cy.get('[data-testid="new-todo"]').type('abd')
        cy.get('[data-testid="submit-newTask"]').click()

        cy.wait('@newTodo').then(xhr=>{
            expect(xhr.request.body.item).to.eql('abd')
        })


        cy.get('.MuiFormHelperText-root').should('not.exist')
        cy.url().should('contain','/todo')
    })
})