///<reference types="cypress"/>
describe('verify signup page',()=>{
    beforeEach(()=>{
        cy.visit('/signup')
    })
//frist name test cases
    it('signup shouldnot be possible if user keep frist name empty',()=>{
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','First Name is required')
    })
    it('signup shouldnot be possible if user enter less than 3 characters',()=>{
        cy.get('[data-testid="first-name"]').type('ab')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','First Name is required')
    })
    it('signup should be possible if user enter 3 characters',()=>{
        cy.get('[data-testid="first-name"]').type('abc')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Last Name is required')
    })
    //last name test cases
    it('signup shouldnot be possible if user keep last name empty',()=>{
        cy.get('[data-testid="first-name"]').type('abc')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Last Name is required')
    })
    it('signup shouldnot be possible if user enter less than 3 characters at last name',()=>{
        cy.get('[data-testid="first-name"]').type('abc')
        cy.get('[data-testid="last-name"]').type('ab')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Last Name is required')
    })
    it('signup should be possible if user enter 3 characters at last name',()=>{
        cy.get('[data-testid="first-name"]').type('abc')
        cy.get('[data-testid="last-name"]').type('abc')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Please Insert a correct Email format')
    })

    //email test cases
    it('signup shouldnot be possible if user keep email empty',()=>{
        cy.get('[data-testid="first-name"]').type('abc')
        cy.get('[data-testid="last-name"]').type('abc')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Please Insert a correct Email format')
    })
    it('signup should be possible if user enter valid email format',()=>{
        cy.get('[data-testid="first-name"]').type('abc')
        cy.get('[data-testid="last-name"]').type('abc')
        cy.get('[data-testid="email"]').type('khaledmahdiy@gmail')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Please Insert a correct Email format')
    })
    it('signup shouldnot be possible if user enter invalid email format',()=>{
        cy.get('[data-testid="first-name"]').type('abc')
        cy.get('[data-testid="last-name"]').type('abc')
        cy.get('[data-testid="email"]').type('khaledmahdiygmail.com')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Please Insert a correct Email format')
    })
    // it('signup should be possible if user enter valid email format',()=>{
    //     cy.get('[data-testid="first-name"]').type('abc')
    //     cy.get('[data-testid="last-name"]').type('abc')
    //     cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
    //     cy.get('[data-testid="submit"]').click()
    //     cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Email is already exist')
    // })

    it('signup should be possible if user enter valid email format',()=>{
        cy.get('[data-testid="first-name"]').type('abc')
        cy.get('[data-testid="last-name"]').type('abc')
        cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
    })

    //password test cases 
    it('signup shouldnot be possible if user keep password empty',()=>{
        cy.get('[data-testid="first-name"]').type('abc')
        cy.get('[data-testid="last-name"]').type('abc')
        cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
    })
    it('signup shouldnot be possible if user enter invalid password',()=>{
        let passwordArr = ['12345678','123test!','123TEST!','123Test','TESTGH!@g']
        cy.get('[data-testid="first-name"]').type('abc')
        cy.get('[data-testid="last-name"]').type('abc')
        cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
        passwordArr.forEach(pass =>{
            cy.get('[data-testid="password"]').type(pass)
            cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
        })
        
    })
    //confirm password test cases
    it('signup should be possible if user keep confirm password epmty',()=>{
        cy.get('[data-testid="first-name"]').type('abc')
        cy.get('[data-testid="last-name"]').type('abc')
        cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
        cy.get('[data-testid="password"]').type('Test123!')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Second password does not match the first Password')
    })
    it('signup shouldnot be possible if user enter invalid confirm password',()=>{
        cy.get('[data-testid="first-name"]').type('abc')
        cy.get('[data-testid="last-name"]').type('abc')
        cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
        cy.get('[data-testid="password"]').type('Test123!')
        cy.get('[data-testid="confirm-password"]').type('tRst1231@$')
        cy.get('[data-testid="submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Second password does not match the first Password')
    })
    // it('signup should be possible if user enter valid confirm password',()=>{
    //     cy.get('[data-testid="first-name"]').type('abc')
    //     cy.get('[data-testid="last-name"]').type('abc')
    //     cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
    //     cy.get('[data-testid="password"]').type('Test123!')
    //     cy.get('[data-testid="confirm-password"]').type('Test123!')
    //     cy.get('[data-testid="submit"]').click()
    //     cy.get('[data-testid="error"]').should('be.visible').and('contain','Email is already exists in the Database')

    // })
//intersiptors
     it('sign up should be possible with valid credentials',()=>{
         cy.intercept('POST','**/api/v1/users/register',{
            fixture: 'Register',
        statusCode: 201
    }).as('register')
    cy.get('[data-testid="first-name"]').type('abc')
    cy.get('[data-testid="last-name"]').type('abc')
    cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
    cy.get('[data-testid="password"]').type('Test123!')
    cy.get('[data-testid="confirm-password"]').type('Test123!')
    cy.get('[data-testid="submit"]').click()
    cy.wait('@register').then((xhr)=>{
        expect(xhr.request.body.email).to.eql('khaledmahdiy@gmail.com')
        expect(xhr.request.body.firstName).to.eql('abc')
        expect(xhr.request.body.lastName).to.eql('abc')
        expect(xhr.request.body.password).to.eql('Test123!')
    })
    cy.url().should('contain','/todo')
    cy.get('.MuiFormHelperText-root').should('not.exist')
    })
    it('sign up should be possible with email already exist',()=>{
        cy.intercept('POST','**/api/v1/users/register',{
        fixture:'errorregister',
            statusCode: 400
   })
   cy.get('[data-testid="first-name"]').type('abc')
   cy.get('[data-testid="last-name"]').type('abc')
   cy.get('[data-testid="email"]').type('khaledmahdiy@gmail.com')
   cy.get('[data-testid="password"]').type('Test123!')
   cy.get('[data-testid="confirm-password"]').type('Test123!')
   cy.get('[data-testid="submit"]').click()
   cy.get('[data-testid="error"]').should('contain','Email is already exists in the Database')
   })

   })



