/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Photos app ', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('local').app_url}/apps/photos/albums`);
        cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
        cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
      })
  
 
      it('all photos section', () => {
        cy.get('.app-navigation__allmedia').find('span').should('contain.text', 'All media').click()
       
      })
  
    it('Go to my album section fail case', () => {
        cy.get('.folders .list-title').should('have.text', 'Folder')
      })

      it('Go to my album section success case', () => {
        cy.get('.folders .list-title').should('have.text', 'Folders')
      })
  })
  