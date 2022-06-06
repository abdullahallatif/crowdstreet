/// <reference types="Cypress" />


describe('User should be able to create an online with required information', function(){

    before(function(){


        cy.visit('https://test.crowdstreet.com')

    })

        it('Verify if user is landed on CrowdStreet Home Page', function(){

            //Verify is user landed on home page
            cy.url().should('include', 'invexp/properties/all')
        })


        it('Verify if user is navigated to registration page when clicked on "CREATE AN ACCOUNT"', function(){

            //click on CREATE AN ACCOUNT
            cy.get("a[href='/invexp/accounts/create-account']").click({force:true})


           //Registration Page ASSERTIONS
            cy.get('.card-title').should('have.text', 'Let’s build your ideal portfolio.')

            cy.get('.text-lg').should('have.text', 'Create your free account and get full access to the largest online private equity real estate investing platform*.')

            cy.get("input[name='firstName']").should('be.visible').should('exist')
            cy.get("input[name='lastName']").should('be.visible').should('exist')
            cy.get("input[name='email']").should('be.visible').should('exist')
            cy.get("input[name='password']").should('exist')
            cy.get("input[name='confirmPassword']").should('exist')
            

            cy.get('.tracking-wide.ml-4').should('have.text', 'Sign up with Google')

            cy.get('div[class="text-charcoal-800 pl-0.5"]').should('have.text', 'Are you an accredited investor?')
            cy.get('#accreditedYes').should('exist').should('not.be.checked')
            cy.get('#accreditedNo').should('exist').should('not.be.checked')
            

            cy.get('#hasAgreedTos').should('exist').should('not.be.checked')
            cy.get('div[class=text-charcoal-800]').should('include.text', 'I have read and accept the')
        
            cy.get('button[data-testid="submit-button"]').should('exist')
        
            cy.get('.account-form-width.text-center.text-xs').should('have.text', '*As reported by Dr. Adam Gower in Best Real Estate Syndication Platforms | Gower Crowd - UNLEASHED, published 2022, based on dollars raised by individual investors.')

        })            
        
        
        it.only('Verify if user can register by providing valid information', function(){

            const specialCharacter = "@"

            cy.get("a[href='/invexp/accounts/create-account']").click({force:true})
            
            cy.get("input[name='firstName']").clear().type("John")
            cy.get("input[name='firstName']").should('have.value', "John")

            cy.get("input[name='lastName']").clear().type("Nakamura")
            cy.get("input[name='lastName']").should('have.value', "Nakamura")

            cy.get("input[name='email']").clear().type("johnnakamura81@crowdstreet.com")
            cy.get("input[name='email']").should('have.value', "johnnakamura81@crowdstreet.com")

            cy.get("input[name='password']").clear().type("Crowdstreet22@")
            cy.get("input[name='password']");
                expect("input[name='password']").to.have.length.at.least(8);
             

            cy.get("input[name='confirmPassword']").clear().type("Crowdstreet22@")
            cy.get("input[name='password']");
                expect("input[name='password']").to.have.length.at.least(8)

    
            cy.get('#accreditedNo').check().should('be.checked')

            cy.get('#hasAgreedTos').check().should('be.checked')

          
 
            cy.wait(5000)
            cy.get('iframe')
                .then($iframe => {
                const $body = $iframe.contents().find('body');
                cy.wrap($body)
                .find('.recaptcha-checkbox-border')
                .click();
            });
           

            cy.get('button[data-testid="submit-button"]').click()


            cy.wait(6000)

            //Account home page assertion
            cy.get('.mb-2.text-2xl.font-bold.text-align--center.sc-bdVaJa.cXgeQK').should('have.text', 'Webinar!')
            cy.get('.max-w-2xl.text-base.font-normal.text-align--center.sc-bdVaJa.cXgeQK').should('have.text', 'Get to the webinar!')
            cy.get('button[data-testid="hero-image-AHHHH"]').should('exist').should('be.visible')
        })

    

})