class accountHomePage
{
    accountHomeHeader()
    {
        return cy.get('.mb-2.text-2xl.font-bold.text-align--center.sc-bdVaJa.cXgeQK')
    }

    accountHomeSubHeader()
    {
        return cy.get('.max-w-2xl.text-base.font-normal.text-align--center.sc-bdVaJa.cXgeQK')
    }

    accountHomeButton()
    {
        return cy.get('button[data-testid="hero-image-AHHHH"]')
    }

}

export default accountHomePage;