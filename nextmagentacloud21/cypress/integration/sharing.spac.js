describe('Sharing app related changes', () => {
    beforeEach(() => {
      cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
      cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
      cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
    })
})
