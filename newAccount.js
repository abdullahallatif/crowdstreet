/// <reference types="Cypress" />

import homePage from '../pageObjects_Crowdstreet/homePage'
import registrationPage from '../pageObjects_Crowdstreet/registrationPage'
import accountHomePage from '../pageObjects_Crowdstreet/accountHomePage'


describe('User should be able to create an online with required information', function(){

    const crowdHomePage =new homePage
    const crowdRegistrationPage = new registrationPage()
    const crowdAccountHomePage = new accountHomePage()


    before(function(){

            cy.fixture('newAccountTestData').then(function(data){
                this.testdata = data;

            })

        cy.visit('https://test.crowdstreet.com')

    })

        it('Verify if user is landed on CrowdStreet Home Page', function(){

            //Verify is user landed on home page
            crowdHomePage.landingPageAssertion().should('include', 'invexp/properties/all')
        })


        it('Verify if user is navigated to registration page when clicked on "CREATE AN ACCOUNT"', function(){

            //click on CREATE AN ACCOUNT
            crowdHomePage.createAnAccountButton().click({force:true})


           //Registration Page ASSERTIONS
            crowdRegistrationPage.pageHeader().should('have.text', 'Let’s build your ideal portfolio.')

            crowdRegistrationPage.createAccountMessage().should('have.text', 'Create your free account and get full access to the largest online private equity real estate investing platform*.')

            crowdRegistrationPage.firstNameBox().should('be.visible').should('exist')
            crowdRegistrationPage.lastNameBox().should('be.visible').should('exist')
            crowdRegistrationPage.emailBox().should('be.visible').should('exist')
            crowdRegistrationPage.passwordBox().should('exist')
            crowdRegistrationPage.confirmPasswordBox().should('exist')
            

            crowdRegistrationPage.googleSignUpBox().should('have.text', 'Sign up with Google')

            crowdRegistrationPage.investorQuestion().should('have.text', 'Are you an accredited investor?')
            crowdRegistrationPage.radioButtonYes().should('exist').should('not.be.checked')
            crowdRegistrationPage.radioButtonNo().should('exist').should('not.be.checked')
            

            crowdRegistrationPage.agreementCheckBox().should('exist').should('not.be.checked')
            crowdRegistrationPage.agreementMessage().should('include.text', 'I have read and accept the')
        
            crowdRegistrationPage.submitButton().should('exist')
        
            crowdRegistrationPage.footerMessage().should('have.text', '*As reported by Dr. Adam Gower in Best Real Estate Syndication Platforms | Gower Crowd - UNLEASHED, published 2022, based on dollars raised by individual investors.')

        })            
        
        
        it('Verify if user can register by providing valid information', function(){

            crowdHomePage.createAnAccountButton().click({force:true})
            
            crowdRegistrationPage.firstNameBox().clear().type(this.testdata.firstName)
            crowdRegistrationPage.firstNameBox().should('have.value', this.testdata.firstName)

            crowdRegistrationPage.lastNameBox().clear().type(this.testdata.lastName)
            crowdRegistrationPage.lastNameBox().should('have.value', this.testdata.lastName)

            crowdRegistrationPage.emailBox().clear().type(this.testdata.email)
            crowdRegistrationPage.emailBox().should('have.value', this.testdata.email)

            crowdRegistrationPage.passwordBox().clear().type(this.testdata.password)
            crowdRegistrationPage.passwordBox();
                expect("input[name='password']").to.have.length.at.least(8);

            crowdRegistrationPage.confirmPasswordBox().clear().type(this.testdata.confirmPassword)
            crowdRegistrationPage.confirmPasswordBox();
                expect("input[name='password']").to.have.length.at.least(8)

    
            crowdRegistrationPage.radioButtonNo().check().should('be.checked')

            crowdAccountHomePage.agreementCheckBox().check().should('be.checked')
          
            cy.wait(5000)

            crowdRegistrationPage.recaptchaCheckBox().click()
           
            crowdAccountHomePage.submitButton().click()


            cy.wait(6000)

            //Account home page assertion
            crowdAccountHomePage.accountHomeHeader().should('have.text', 'Webinar!')
            crowdAccountHomePage.caccountHomeSubHeader().should('have.text', 'Get to the webinar!')
            crowdAccountHomePage.accountHomeButton().should('exist').should('be.visible')

        })

    

})