/// <reference types="cypress" />

describe('Themes related changes', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
  })

  it('Add button popup css changes ', () => {
    cy.wait(2000)
    cy.get('.icon-add').click()
    cy.get('.popovermenu').should('have.css', 'filter', 'none')
    cy.get('.newFileMenu').should('have.css', 'border-radius', '8px')
    cy.get('.newFileMenu .menuitem .displayname').should('have.css', 'padding-left', '8px')
    cy.get('.newFileMenu').find('li').last().should('have.css','display','none')
  })

  it('Help-FAQ open in new tab', () => {
    cy.wait(3000)
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="https://cloud.telekom-dienste.de/hilfe"]').contains('Hilfe & FAQ').click()
    cy.wait(2000)
    cy.get("li[data-id='help'] a").should('have.attr', 'href', 'https://cloud.telekom-dienste.de/hilfe')
      .should('have.attr', 'target', '_blank')
  })
})
