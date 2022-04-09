///<reference types="cypress"/>
import faker  from 'faker';

describe('verify registeration api',()=>{
    it('register should fail if missing enter fristname',()=>{
        cy.request({
            method:'POST',
            url:'http://localhost:8080/api/v1/users/register',
            body:{
                 "lastName": "mahdy",
                "email": "khalemay1@gmail.com",
                 "password": "Test123!",
            },
            failOnStatusCode:false
        }).then(res=>{
            expect(res.status).to.eql(400)
            expect(res.body.message).to.eql('"firstName" is required')
        })
    })
    it('register should fail if user enter fristname less than 3 characters',()=>{
        cy.request({
            method:'POST',
            url:'http://localhost:8080/api/v1/users/register',
            body:{
                 "fristName":"h",
                 "lastName": "mahdy",
                 "email": "khalemay1@gmail.com",
                 "password": "Test123!",
            },
            failOnStatusCode:false
        }).then(res=>{
            expect(res.status).to.eql(400)
            expect(res.body.message).to.eql('"firstName" is required')
        })
    })

    //last name
    it('register should fail if missing enter lastname',()=>{
        cy.request({
            method:'POST',
            url:'http://localhost:8080/api/v1/users/register',
            body:{
                 "fristName": "mahdy",
                "email": "khalemay1@gmail.com",
                 "password": "Test123!",
            },
            failOnStatusCode:false
        }).then(res=>{
            expect(res.status).to.eql(400)
            expect(res.body.message).to.eql('"firstName" is required')
        })
    })
    it('register should fail if user enter lastname less than 3 characters',()=>{
        cy.request({
            method:'POST',
            url:'http://localhost:8080/api/v1/users/register',
            body:{
                 "fristName":"khaled",
                 "lastName": "m",
                 "email": "khalemay1@gmail.com",
                 "password": "Test123!",
            },
            failOnStatusCode:false
        }).then(res=>{
            expect(res.status).to.eql(400)
            expect(res.body.message).to.eql('"firstName" is required')
        })
    })
        //email
        it('register should fail if missing enter email',()=>{
            cy.request({
                method:'POST',
                url:'http://localhost:8080/api/v1/users/register',
                body:{
                    "fristName": "khaled",
                     "lastName": "mahdy",
                     "password": "Test123!",
                },
                failOnStatusCode:false
            }).then(res=>{
                expect(res.status).to.eql(400)
                expect(res.body.message).to.eql('"firstName" is required')
            })
        })
        it('register should fail if enter wrong format email',()=>{
            cy.request({
                method:'POST',
                url:'http://localhost:8080/api/v1/users/register',
                body:{
                     "fristName":"khaled",
                     "lastName": "m",
                     "email": "khalemay1.com",
                     "password": "Test123!",
                },
                failOnStatusCode:false
            }).then(res=>{
                expect(res.status).to.eql(400)
                expect(res.body.message).to.eql('"firstName" is required')
            })
        })
                //password
                it('register should fail if missing enter password',()=>{
                    cy.request({
                        method:'POST',
                        url:'http://localhost:8080/api/v1/users/register',
                        body:{
                            "fristName": "khaled",
                             "lastName": "mahdy",
                             "email": "khalemay1@gmail.com",
                        },
                        failOnStatusCode:false
                    }).then(res=>{
                        expect(res.status).to.eql(400)
                        expect(res.body.message).to.eql('"firstName" is required')
                    })
                })
                it('register should fail if enter wrong password pattern',()=>{
                    cy.request({
                        method:'POST',
                        url:'http://localhost:8080/api/v1/users/register',
                        body:{
                             "fristName":"khaled",
                             "lastName": "m",
                             "email": "khalemay1.com",
                             "password": "Test1ghjdf",
                        },
                        failOnStatusCode:false
                    }).then(res=>{
                        expect(res.status).to.eql(400)
                        expect(res.body.message).to.eql('"firstName" is required')
                    })
                })

                ////////////////////////////////
                it('register should pass if enter valid credintials',()=>{
                    cy.request({
                        method:'POST',
                        url:'http://localhost:8080/api/v1/users/register',
                        body:{
                            "firstName":"khaled",
                            "lastName": "mahdy",
                            "email": faker.internet.email(),
                            "password": "Test123!"
                       },
                    }).then(res=>{
                        expect(res.status).to.eql(201)
                        expect(res.body.firstName).to.eql('khaled')
                    })

                })
})