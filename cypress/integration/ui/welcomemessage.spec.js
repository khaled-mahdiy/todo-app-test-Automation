describe("verify welcome message", () => {
  beforeEach(() => {
    localStorage.setItem(
      "user",
      '{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGY0ZjdjODY2MDU2MDJlOGYyMzc4YSIsImZpcnN0TmFtZSI6ImFiYyIsImxhc3ROYW1lIjoiYWJjIiwiaWF0IjoxNjQ5MzY5ODUxfQ.GA2YKmenBwHk9m6NVl2bb3D92iVilzxIQXru-AJYLtw","userID":"624f4f7c86605602e8f2378a","firstName":"abc"}'
    );
    cy.intercept("GET", "**api/v1/tasks", {
      statusCode: 200,
      // fixture:'todo'
    });
  });

  it('verify Good Morning message ',()=>{
    let now = new Date('4,april,2022 09:00:00')
    cy.clock(now)
    cy.visit('/todo')
    cy.get('[data-testid="welcome"]').should('contain.text','Good morning abc')
  })
  it('verify tome to sleep message ',()=>{
    let now = new Date('4,april,2022 01:00:00')
    cy.clock(now)
    cy.visit('/todo')
    cy.get('[data-testid="welcome"]').should('contain.text','Time to sleep abc')
  })
  it('verify Good afternoon message ',()=>{
    let now = new Date('4,april,2022 14:00:00')
    cy.clock(now)
    cy.visit('/todo')
    cy.get('[data-testid="welcome"]').should('contain.text','Good afternoon abc')
  })
});
