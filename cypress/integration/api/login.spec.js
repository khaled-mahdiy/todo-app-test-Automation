describe('verify login api',()=>{
    it('login should not be abale if user keep email empty',()=>{
        cy.request({
            method:'POST',
            url:'http://localhost:8080/api/v1/users/login',
            body:{
                password:'Test123!'
            },
            failOnStatusCode:false
        }).then((res)=>{
            expect(res.status).to.eql(400)
            expect(res.body.message).to.eql('Please Fill a correct Password')
            
        })
    })
    it('login should not be abale if user enter invalid email ',()=>{
        cy.request({
            method:'POST',
            url:'http://localhost:8080/api/v1/users/login',
            body:{
                email:'khaled',
                password:'Test123!'
            },
            failOnStatusCode:false
        }).then((res)=>{
            expect(res.status).to.eql(400)
            expect(res.body.message).to.eql('Please Fill a correct Password')
            
        })
    })
        it('login should be abale if user enter valid email ',()=>{
            cy.request({
                method:'POST',
                url:'http://localhost:8080/api/v1/users/login',
                body:{
                    email:'khaledmahdiy@gmail.com',
                    password:'Test123!'
                },
                failOnStatusCode:false
            }).then((res)=>{
                expect(res.status).to.eql(200)
                expect(res.body.firstName).to.eql('abc')
                
            })

})
///////////password
it('login should not be abale if user keep password empty',()=>{
    cy.request({
        method:'POST',
        url:'http://localhost:8080/api/v1/users/login',
        body:{
            email:'khaledmahdiy@gmail.com',
        },
        failOnStatusCode:false
    }).then((res)=>{
        expect(res.status).to.eql(400)
        expect(res.body.message).to.eql('Please Fill a correct Password')
        
    })
})
it('login should not be abale if user enter invalid password ',()=>{
    cy.request({
        method:'POST',
        url:'http://localhost:8080/api/v1/users/login',
        body:{
            email:'khaledmahdiy@gmail.com',
            password:'Test1'
        },
        failOnStatusCode:false
    }).then((res)=>{
        expect(res.status).to.eql(400)
        expect(res.body.message).to.eql('Please Fill a correct Password')
        
    })
})
    it('login should  be abale if user enter valid password ',()=>{
        cy.request({
            method:'POST',
            url:'http://localhost:8080/api/v1/users/login',
            body:{
                email:'khaledmahdiy@gmail.com',
                password:'Test123!'
            },
            failOnStatusCode:false
        }).then((res)=>{
            expect(res.status).to.eql(200)
            expect(res.body.firstName).to.eql('abc')
            
        })

})
})