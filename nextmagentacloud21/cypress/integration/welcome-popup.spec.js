
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



  it('Open welcome popup', () => {
    cy.wait(2000)
    cy.get('#nmc_welcome_popup').should('have.class','.nmc_welcome_popup-header')
    cy.get('#nmc_welcome_popup').should('have.class','.logo')
    cy.get('#nmc_welcome_popup .modal-body').should('have.css','padding','0px 24px 0px 24px')
    cy.get('.modal-body .content').should('have.css','padding','24px 0px 24px 0px')
    cy.get('#nmc_welcome_popup .modal-footer').should('have.css','text-align','right').should('have.css','justify-content','space-between').should('have.css','margin-top','32px')
  })

 })
