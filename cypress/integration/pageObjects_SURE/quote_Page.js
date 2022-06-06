class quote_Page
{
    quotePageHeader()
    {
        return cy.get('h1')
    }

    planStandard()
    {
        return cy.get('.MuiTypography-root.MuiTypography-h6.MuiTypography-alignCenter')
    }
    
    planComplete()
    {
        return cy.get('.MuiTypography-root.MuiTypography-h5.MuiTypography-alignCenter')
    }

    floodProtectionLabel()
    {
        return cy.get('.MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1')
    }

    checkboxFloodProtection()
    {
        return cy.get('.MuiSvgIcon-root')
    }
}
export default quote_Page;