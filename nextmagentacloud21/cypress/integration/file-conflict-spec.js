describe('Settings related changes', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
  })

  it('Custom File Conflict Check Css', () => {
    /*cy.get('.oc-conflict-pre-dlg').find('.threebuttons').children().first().should('have.class','oc-conflict-pre-dlg-button')
    cy.get('.oc-conflict-pre-dlg').find('.threebuttons').children().eq(1).should('have.class','oc-conflict-pre-dlg-button')
    cy.get('.oc-conflict-pre-dlg').find('.threebuttons').children().last().should('have.class','cancel oc-conflict-pre-dlg-button oc-conflict-pre-dlg-replace-button')*/
  })

})
