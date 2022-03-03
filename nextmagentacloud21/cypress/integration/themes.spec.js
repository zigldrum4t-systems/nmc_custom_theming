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

  it('GARD ticket 323 text change in english', () => {
    cy.wait(2000)
    cy.get('.unified-search__trigger').click()
    cy.get('.search-input-label').should('have.text','Search files or folders …')
    })

  it('GARD ticket 323 text change in german', () => {
    cy.wait(3000)
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Settings').click()
    cy.wait(2000)
    cy.get('#languageinput').select('Deutsch')
    cy.wait(2000)
    cy.get('.unified-search__trigger').click()
    cy.get('.search-input-label').should('have.text','Nach Dateien oder Ordnern suchen …')
  })

  it('check the sub menu for file section check box', () => {
    cy.wait(3000)
    cy.visit(`${Cypress.env('local').app_url}}/apps/files/`);
    cy.wait(2000)
    cy.contains('td','test1.md').prev('td').find('input').check({force: true} );
    cy.get('.filesSelectionMenu').contains('span','Verschieben oder kopieren').should('have.class','label')

  })

  it('check the sub menu for file section check box and check that last option is cancel', () => {
    cy.wait(3000)
    cy.contains('td','test1.md').prev('td').find('input').check({force: true} );
    cy.get('.filesSelectionMenu').find('li').last().should('contain.text','Abbrechen')
  })

  it('English language  : check the sub menu for file section check box', () => {
    cy.wait(3000)
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Einstellungen').click()
    cy.wait(2000)
    cy.get('#languageinput').select('English')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}}/apps/files/`);
    cy.wait(2000)
    cy.contains('td','test1.md').prev('td').find('input').check({force: true} );
    cy.get('.filesSelectionMenu').contains('span','Move or copy').should('have.class','label')

  })

  it('English language : check the sub menu for file section check box and check that last option is cancel', () => {
    cy.wait(3000)
    cy.contains('td','test1.md').prev('td').find('input').check({force: true} );
    cy.get('.filesSelectionMenu').find('li').last().should('contain.text','Cancel')
  })

})
