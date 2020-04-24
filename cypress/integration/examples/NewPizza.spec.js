it('works!', ()=>{
    expect(5).to.eq(5)
})




describe('Pizza Form', ()=>{
    it('can navigate to site',()=>{
        cy.visit('http://localhost:3002/pizza')
    
})

it('can submit a pizza order(path)', ()=>{
    
        cy.get('input[name="FirstName"]')
        .type('Nate')
        .should('have.value', "Nate")

        

        })
        it('can check box',()=>{
        cy.get('input[name="Pepperoni"]')
        .check()
})

it('can check box',()=>{
    cy.get('input[name="Bacon"]')
    .check()
})
    
})