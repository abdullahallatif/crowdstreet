class homePage

{

    landingPageAssertion()
    {
        return cy.url()
    }

    createAnAccountButton()
    {
        return cy.get("a[href='/invexp/accounts/create-account']")
    }

}

export default homePage;
