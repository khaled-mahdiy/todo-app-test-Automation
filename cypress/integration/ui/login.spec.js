describe('verify login page',()=>{
    beforeEach(()=>{
        cy.visit('/login')
    })
    //email test cases
    it('login shouldnot be possible if user keep email empty',()=>{
        cy.get('[data-testid="submit"]').click()
        cy.get('#login-helper-text').should('contain','Please Insert a correct Email format').and('be.visible')
    })
    it('login shouldnot be possible if user enter invalid email',()=>{
        cy.get('[data-testid="email"]').type('khaled@.com')
        cy.get('[data-testid="password"]').type('Test123!')
        cy.get('[data-testid="submit"]').click()
        cy.get('#login-helper-text').should('contain','Please Insert a correct Email format').and('be.visible')
    })
    // it('login should be possible if user enter valid email',()=>{
    //     cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
    //     cy.get('[data-testid="password"]').type('Test123!')
    //     cy.get('[data-testid="submit"]').click()
    //     cy.get('[data-testid="error-alert"]').should('not.exist')
    //     cy.url().should('contain','/todo')
    // })
    // password test cases
    it('login shouldnot be possible if user keep password empty',()=>{
        cy.get('[data-testid="email"]').type('khaled@gmail.com')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('contain','Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character').and('be.visible')
    })
    it('login shouldnot be possible if user enter invalid password',()=>{
        cy.get('[data-testid="email"]').type('khaled@gmail.com')
        cy.get('[data-testid="password"]').type('Test123')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('contain','Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character').and('be.visible')
    })
    // it('login should be possible if user enter valid password',()=>{
    //     cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
    //     cy.get('[data-testid="password"]').type('Test123!')
    //     cy.get('[data-testid="submit"]').click()
    //     cy.get('[data-testid="error-alert"]').should('not.exist')
    //     cy.url().should('contain','/todo')
    // })

    //interceptors
    it('login with out data base ',()=>{
        cy.intercept('POST','**/api/v1/users/login',{
            statusCode:200,
            fixture:'Register'
        }).as('login')
        cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
        cy.get('[data-testid="password"]').type('Test123!')
        cy.get('[data-testid="submit"]').click()
        cy.wait('@login').then((xhr)=>{
            expect(xhr.request.body.email).to.eql('khaledmahdiy@gmail.com')
            expect(xhr.request.body.password).to.eql('Test123!')
        })
    })
    it('login with out data base ',()=>{
        cy.intercept('POST','**/api/v1/users/login',{
            statusCode:400,
            fixture:'errorlogin'
        })
        cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
        cy.get('[data-testid="password"]').type('Test123!')
        cy.get('[data-testid="submit"]').click()
        cy.get('[data-testid="error-alert"]').should('be.visible')
    })
})