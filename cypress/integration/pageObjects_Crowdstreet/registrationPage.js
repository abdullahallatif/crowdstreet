class registrationPage
{

    pageHeader()
    {
        return  cy.get('.card-title')
    }

    createAccountMessage()
    {
        return cy.get('.text-lg')
    }

    firstNameBox()
    {
        return cy.get("input[name='firstName']")
    }

    lastNameBox()
    {
        return cy.get("input[name='lastName']")
    }

    emailBox()
    {
        return cy.get("input[name='email']")
    }

    passwordBox()
    {
        return cy.get("input[name='password']")
    }

    confirmPasswordBox()
    {
        return cy.get("input[name='confirmPassword']")
    }

    googleSignUpBox()
    {
        return cy.get('.tracking-wide.ml-4')
    }

    investorQuestion()
    {
        return cy.get('div[class="text-charcoal-800 pl-0.5"]')
    }

    radioButtonYes()
    {
        return cy.get('#accreditedYes')
    }

    radioButtonNo()
    {
        return cy.get('#accreditedNo')
    }

    agreementCheckBox()
    {
        return cy.get('#hasAgreedTos')
    }

   agreementMessage()
   {
       return cy.get('div[class=text-charcoal-800]')
   }


   recaptchaCheckBox()
   {
       return cy.get('iframe')
       .then($iframe => {
       const $body = $iframe.contents().find('body');
       cy.wrap($body)
       .find('.recaptcha-checkbox-border');
   });
   }

   submitButton()
   {
       return cy.get('button[data-testid="submit-button"]')
   }

   footerMessage()
   {
       return cy.get('.account-form-width.text-center.text-xs')
   }

}

export default registrationPage;