class buildingMaterial_Page
{
    buildingmMaterialQuestionPageAssertion()
    {
        return cy.url().should('include', 'building-material')
    }
    
    buildingMaterialBricks()
    {
        return cy.get('input[value=bricks]')
    }
    
    nextButton()
    {
        return cy.get('.MuiButton-label')
    }

    header()
    {
        return cy.get("h1")
    }

}

export default buildingMaterial_Page;