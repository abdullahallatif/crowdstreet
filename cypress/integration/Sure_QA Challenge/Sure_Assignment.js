/// <reference types="Cypress" />

import landing_Page from '../pageObjects_SURE/landing_Page'
import buildingMaterial_Page from '../pageObjects_SURE/buildingMaterial_Page'
import waterProximity_Page from '../pageObjects_SURE/waterProximity_Page'
import quote_Page from '../pageObjects_SURE/quote_Page'


describe('User should easily add Wind and Flood to their policy by answeing a few question', function(){

    const LandingPage = new landing_Page()
    const BuildingMaterialQuestion = new buildingMaterial_Page()
    const WaterProximityQuestion= new waterProximity_Page()
    const Quote = new quote_Page()

    before(function(){
        cy.visit('https://sure-qa-challenge.vercel.app/')
    
    })


    it('Verify if user is able to enter 5 digit zip code and proceed to next page', function(){
        const ZipCode="19115"

        //Verify if user landed on Hurricane Insurance home page
        LandingPage.LandingPageHeader().should('have.text', 'Hurricane Insurance')
        

        //enter valid 5 digit zip code
        LandingPage.zipCode().type(ZipCode)
        LandingPage.getaQuoteButton().click()

        //Verify is user is navigated to building material question page
        BuildingMaterialQuestion.header().should("have.text","What type of material is your home constructed with?")
        BuildingMaterialQuestion.nextButton().should("be.visible").should("be.enabled")

    })
    

    it('(Negative) Verify if user get "Required" error message when zip code field left empty and click "Get A Quote" ', function(){

        //Verify if user landed on Hurricane Insurance home page
        LandingPage.LandingPageHeader().should('have.text', 'Hurricane Insurance')
        
        //no input in zip code field
        LandingPage.zipCode().invoke('val', '')
        LandingPage.getaQuoteButton().click()

        //user should get 'Required' error message
        LandingPage.errorMessageRequired().should('include.text', 'Required')

    })

    it("(Negative) Verify if user get a error message 'Invalid Zip Code' when they enter 1234", function(){
        
        const invalidZipCode='1234'
        
        //Verify if user landed on Hurricane Insurance home page
        LandingPage.LandingPageHeader().should('have.text', 'Hurricane Insurance')

        //enter 1234 as zip code
        LandingPage.zipCode().type(invalidZipCode)
        LandingPage.getaQuoteButton().click()

        //user should get "Invalid zip code" error message
        LandingPage.errorMessageInvalidZipCode().should('include.text', 'Invalid zip code')
    })


    it('Verify if user can select home building material, click "Next" & navigate to water proximity page', function(){
        
        const zipCode= '19115'
        
        //Verify if user landed on Hurricane Insurance home page
        LandingPage.LandingPageHeader().should('have.text', 'Hurricane Insurance')
        
        //enter valid 5 digit zip code
        LandingPage.zipCode().type(zipCode)
        LandingPage.getaQuoteButton().click()

        //verify is user is navigated to building material question page
        BuildingMaterialQuestion.header().should("have.text","What type of material is your home constructed with?")
        BuildingMaterialQuestion.nextButton().should("be.visible").should("be.enabled")

        //select a building material option
        BuildingMaterialQuestion.buildingMaterialBricks().click()

        //click "Next" button
        BuildingMaterialQuestion.nextButton().click()

        //water proximity url assertion
        WaterProximityQuestion.waterProximityHeader().should('have.text', 'Is your home located within 1 mile of a body of water?')
       

    })



    it('(Negative) Verify, user should not be able click "Next" if no answer is selected from home building material question', function(){
        
        const ZipCode='19115'
        
        //Verify if user landed on Hurricane Insurance home page
        LandingPage.LandingPageHeader().should('have.text', 'Hurricane Insurance')
        
        //enter valid 5 digit zip code
        LandingPage.zipCode().type(ZipCode)
        LandingPage.getaQuoteButton().click()
        cy.wait(5000)

        //verify is user is navigated to building material question page
        BuildingMaterialQuestion.header().should("have.text","What type of material is your home constructed with?")

        //click "Next" button
        BuildingMaterialQuestion.nextButton().click()

        //Next button should be disabel
        BuildingMaterialQuestion.nextButton().should('not.be.enabled')
       
    })



    it('Verify if user is navigated to Quote page when body of water question is answered Yes', function(){

        const ZipCode = '19115'

        //Verify if user landed on Hurricane Insurance home page
        LandingPage.LandingPageHeader().should('have.text', 'Hurricane Insurance')

        //enter valid 5 digit zip code
        LandingPage.zipCode().type(ZipCode)
        LandingPage.getaQuoteButton().click()

        //verify is user is navigated to building material question page
        BuildingMaterialQuestion.header().should("have.text","What type of material is your home constructed with?")

        //select a building material option
        BuildingMaterialQuestion.buildingMaterialBricks().click()

        //click "Next" button
        BuildingMaterialQuestion.nextButton().click()

        //check if user is in water proximity question page 
        WaterProximityQuestion.waterProximityHeader().should('have.text', 'Is your home located within 1 mile of a body of water?')

        //select (Yes) if home is located within 1 mile of body of water
        WaterProximityQuestion.bodyOfWaterQuestionYES().click()

        //click "Next" button
        WaterProximityQuestion.nextButtonWaterProximity().click()

        //user is navigated to Quote page - Assertion
        Quote.quotePageHeader().should('have.text', 'Your available plans')


    })

    it('(Negative) Verify if user is navigated to quote page when no answer is selected in body of water question', function(){

        const ZipCode = '19115'

        //Verify if user landed on Hurricane Insurance home page
        LandingPage.LandingPageHeader().should('have.text', 'Hurricane Insurance')

        //enter valid 5 digit zip code
        LandingPage.zipCode().type(ZipCode)
        LandingPage.getaQuoteButton().click()

        //verify is user is navigated to building material question page
        BuildingMaterialQuestion.header().should("have.text","What type of material is your home constructed with?")

        //select a building material option
        BuildingMaterialQuestion.buildingMaterialBricks().click()

        //click "Next" button
        BuildingMaterialQuestion.nextButton().click()

        //check if user is in water proximity question page 
        WaterProximityQuestion.waterProximityHeader().should('have.text', 'Is your home located within 1 mile of a body of water?')

        //click "Next" button
        WaterProximityQuestion.nextButtonWaterProximity().should('not.be.enabled')

    })

    

    it('Verify if user see quote when body of water question is answered NO', function(){

        const ZipCode = '19115'

        //Verify if user landed on Hurricane Insurance home page
        LandingPage.LandingPageHeader().should('have.text', 'Hurricane Insurance')

        //enter valid 5 digit zip code
        LandingPage.zipCode().type(ZipCode)
        LandingPage.getaQuoteButton().click()

        //verify is user is navigated to building material question page
        BuildingMaterialQuestion.header().should("have.text","What type of material is your home constructed with?")

       //select a building material option
       BuildingMaterialQuestion.buildingMaterialBricks().click()

       //click "Next" button
       BuildingMaterialQuestion.nextButton().click()

        //check if user is in water proximity question page 
        WaterProximityQuestion.waterProximityHeader().should('have.text', 'Is your home located within 1 mile of a body of water?')
    

        //select NO if home is located within 1 mile of body of water
        WaterProximityQuestion.bodyOfWaterQuestionNO().click()

        //click "Next" button
        WaterProximityQuestion.nextButtonWaterProximity().click()

        //user is navigated to Quote page - Assertion
        Quote.quotePageHeader().should('have.text', 'Your available plans')

        //user see plan option "Standard"
        Quote.planStandard().should('include.text', 'Standard')

        //user see plan option "Complete"
        Quote.planComplete().should('include.text', 'Complete')

        //Complete plan should have checkbox label Flood Protection Included
        Quote.floodProtectionLabel().should('include.text', 'Flood Protection Included')
    })

    it('Verify if user see quote when body of water question is answered YES', function(){

        const ZipCode = '19115'

        //Verify if user landed on Hurricane Insurance home page
        LandingPage.LandingPageHeader().should('have.text', 'Hurricane Insurance')

        //enter valid 5 digit zip code
        LandingPage.zipCode().type(ZipCode)
        LandingPage.getaQuoteButton().click()

        //verify is user is navigated to building material question page
        BuildingMaterialQuestion.header().should("have.text","What type of material is your home constructed with?")

       //select a building material option
       BuildingMaterialQuestion.buildingMaterialBricks().click()


       //click "Next" button
       BuildingMaterialQuestion.nextButton().click()

        //check if user is in water proximity question page 
        WaterProximityQuestion.waterProximityHeader().should('have.text', 'Is your home located within 1 mile of a body of water?')

        //select Yes if home is located within 1 mile of body of water
        WaterProximityQuestion.bodyOfWaterQuestionYES().click()

        //click "Next" button
        WaterProximityQuestion.nextButtonWaterProximity().click()

        //user is navigated to Quote page - Assertion
        Quote.quotePageHeader().should('have.text', 'Your available plans')

        //user see plan option "Standard"
        Quote.planStandard().should('include.text', 'Standard')

        //user see plan option "Complete"
        Quote.planComplete().should('include.text', 'Complete')

        //user should see uncheck checkbox "Include Flood Protection (+$XX)"
        Quote.floodProtectionLabel().should('include.text', 'Include Flood Protection')
        Quote.checkboxFloodProtection().check().should('be.checked')
    })



    it('Other Verifications', function(){
 
        const ZipCode = '19115'

        //Verify if user landed on Hurricane Insurance home page
        LandingPage.LandingPageHeader().should('have.text', 'Hurricane Insurance')
       
        //enter valid 5 digit zip code
        LandingPage.zipCode().type(ZipCode)
        LandingPage.getaQuoteButton().click()
 
        //select a building material option
        BuildingMaterialQuestion.buildingMaterialBricks().click()
 
       //verify is user is navigated to building material question page
       BuildingMaterialQuestion.header().should("have.text","What type of material is your home constructed with?")

        //Verify if selected answer persist within a browser session
        LandingPage.wait15Minutes()

        //click "Next" button
        BuildingMaterialQuestion.nextButton().click()

        
        //verify if selected answer persist upon refreshing the page
        cy.reload()

        //check if user is in water proximity question page 
        WaterProximityQuestion.waterProximityHeader().should('have.text', 'Is your home located within 1 mile of a body of water?')
        
        
        //Verify if asnwer reset when a new zip code is entered from the landing page.
        
        cy.go('back')
        cy.go('back')

        //enter valid 5 digit zip code
        LandingPage.zipCode().type('11416')
        LandingPage.getaQuoteButton.click()
 
        //check if user is in the building material question page
        BuildingMaterialQuestion.buildingmMaterialQuestionPageAssertion()

        //click "Next" button without selecting an aswer to verify is previously selected answer persisted.
        BuildingMaterialQuestion.nextButton.click()


    })

})