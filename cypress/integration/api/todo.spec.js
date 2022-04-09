describe('verify todos api',()=>{
    let token
    let taskID
    before(()=>{
  
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
            token =res.body.access_token
        })
    })
    it('user should be abale to add tasks ',()=>{
        cy.request({
            method:'POST',
            url:'http://localhost:8080/api/v1/tasks',
            body:{
                item: "learn cypress",
                isCompleted: false
            },
            headers: {
                Authorization:'Bearer ' + token
            }
        }).then(res=>{
            expect(res.status).to.eql(201)
            expect(res.body.addedTask.item).to.eql('learn cypress')
            taskID = res.body.addedTask._id
        })
    })
 
    it('user should be abale to edit tasks ',()=>{

        cy.request({
            method:'GET',
            url:'http://localhost:8080/api/v1/tasks' ,
            headers: {
                Authorization:'Bearer ' + token
            },

        }).then(res=>{
            expect(res.status).to.eql(200)

            
        })
    })
    it('user should be abale to update tasks ',()=>{
        cy.request({
            method:'PUT',
            url:'http://localhost:8080/api/v1/tasks/' + taskID,
            headers: {
                Authorization:'Bearer ' + token,
                
            },
            body:{
                item: "learn cypress",
                isCompleted: true
            }
        }).then(res=>{
            expect(res.status).to.eql(200)
            expect(res.body.updatedTask.isCompleted).to.eql(true)
            
        })
    })
    it('user should be abale to delete tasks ',()=>{
        cy.request({
            method:'DELETE',
            url:'http://localhost:8080/api/v1/tasks/' + taskID,
            headers: {
                Authorization:'Bearer ' + token,
                
            }
        }).then(res=>{
            expect(res.status).to.eql(200)
            expect(res.body.deletedTask.isCompleted).to.eql(true)
            
        })
    })
})