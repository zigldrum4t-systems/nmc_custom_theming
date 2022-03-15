
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
    cy.get('.fileactions').first().click()
    cy.get('aside').should('have.contain','Sharing','your shares','You can create links or send shares by mail. If you invite MagentaCLOUD users, you have more opportunities for collaboration.')
    cy.get('.add-new-link-btn').click()
  })

  it('Open welcome popup', () => {
    cy.wait(2000)
    cy.get('.fileactions').first().click()
    cy.get('aside').should('have.contain','Sharing')
    cy.get('input').should('be.visible').should('be.enabled').type("Maria")

  })

 })
