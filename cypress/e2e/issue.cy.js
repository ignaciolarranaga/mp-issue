describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('div#walletBrick_container button', {
      timeout: 10000,
    }).click();

    cy.origin(
      'https://www.mercadopago.com.uy',
      () => {
        Cypress.require('cypress-iframe');

        // spellchecker: disable
        // Checking reach the page
        cy.get('h1.c-title', { timeout: 10000 }).should(
          'have.text',
          '¿Cómo querés pagar?'
        );

        // Selecting New Card
        cy.get('label[for=new_card_row]').click();

        // Checking reach the page
        cy.get('h1.c-title', { timeout: 10000 }).should(
          'have.text',
          'Completá los datos de tu tarjeta'
        );

        // Filling the data
        cy.iframe('iframe[name=cardNumber]')
          .find('input#cardNumber')
          .should('exist')
          .type('5031 7557 3453 0604');

        cy.iframe('iframe[name=expirationDate]')
          .find('input#expirationDate')
          .should('exist')
          .type('11/25');

        cy.get(
          'input[name="[ui_components][group_content][group_scroller][group_form][controls][bottom_card_group][fullname]"]'
        ).type('APRO');

        cy.iframe('iframe[name=securityCode]')
          .find('input#securityCode')
          .should('exist')
          .type('123');

        // Submitting
        cy.get(
          'button[name="[ui_components][group_content][group_scroller][group_form][submit]"]'
        ).click();

        // Checking Transition
        cy.get('h1.c-title', { timeout: 10000 }).should(
          'have.text',
          'Ahora ingresá el documento del titular'
        );

        // Filling the data
        cy.get('button.andes-dropdown__trigger').click();
        cy.get('li[data-key="[Otro]"]').should('be.visible').click();

        // Filling the data
        cy.get('input#number').type('123456789');

        // Submitting
        cy.get(
          'button[name="[ui_components][group_content][group_form][submit]"]'
        ).click();

        // Checking Transition
        cy.get('h1.c-title', { timeout: 10000 }).should(
          'have.text',
          'Revisa tu compra'
        );

        // Submitting
        cy.get(
          'button[name="[ui_components][group_sidebar][summary_group][group_captcha][group_pay][disabled_button][pay]"]'
        ).click();
      }
    );
    // spellchecker: enable
  })
})