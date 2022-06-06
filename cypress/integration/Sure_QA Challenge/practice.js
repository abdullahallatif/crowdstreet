/// <reference types="Cypress" />

describe('Practice Project 05/10/2022', function(){

    before(function(){
        cy.visit('https://www.aquabottesting.com/')

        cy.get('#complex').invoke('show')
        cy.contains('Drop Down').click({force:true})

        cy.get('.col-lg-12').should('include.text', 'Drop Downs')

    })

    it('Verify if link is selected from drop down menu', function() {

        cy.get('.hdropdown').invoke('show')
        cy.contains('Link 3').click({force:true})

        cy.get('#link-selected').should('include.text', 'Link 3')
    })   
    
    it('Select a colour from Toggle Drop Down', function(){

        cy.get('.slider.round').click({force:true})
        cy.get('.form-control-select').select('Brown')
        cy.contains('Brown').click({force:true})
    })    

    it.only('Select a radio button and a Game name from the Drop Down', function(){

        cy.contains('Video Games').click({force:true})
        cy.get('#react-select').click({force:true})
        cy.contains('Graveyard Keeper').click({force:true})


    })
        



})