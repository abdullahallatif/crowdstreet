class waterProximity_Page
{
    waterProximityHeader()
    {
        return cy.get('h1')
    }
    
    bodyOfWaterQuestionYES()
    {
        return cy.get('input[value=true]')
    }
    
    nextButtonWaterProximity()
    {
       return cy.get('.MuiButton-label')
    }
    
    
    bodyOfWaterQuestionNO()
    {
        return cy.get('input[value=false]').click()
    }
}
export default waterProximity_Page;