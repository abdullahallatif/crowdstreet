class landing_Page
{

LandingPageHeader()
{
    return cy.get('h1')
}

zipCode()
{
    return cy.get('.MuiInputBase-input.MuiInput-input')
}

getaQuoteButton()
{
    return cy.get('.MuiButton-label')
}

errorMessageRequired()
{
    return cy.get('.MuiFormHelperText-root.Mui-error')
}

errorMessageInvalidZipCode()
{
    return cy.get('.MuiFormHelperText-root.Mui-error.MuiFormHelperText-filled')
}

wait15Minutes()
{
    return cy.wait(1500000)
}


}

export default landing_Page;