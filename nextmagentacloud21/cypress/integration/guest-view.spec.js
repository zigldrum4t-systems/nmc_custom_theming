describe('Settings related changes', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
  })


  it('For language English check all translation of guest page', () => {
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Einstellungen').click()
    cy.wait(2000)
    cy.get('#languageinput').select('English')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/s/qtM34GLiesgJoRy`);
    cy.wait(1000)
    cy.get('#downloadFile').should('have.contain',"Download")
  })


  it('For language German check all translation of gust page', () => {
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Settings').click()
    cy.wait(2000)
    cy.get('#languageinput').select('Deutsch')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/s/qtM34GLiesgJoRy`);
    cy.wait(1000)
    cy.get('#downloadFile').should('have.contain',"Herunterladen")

  })

  /*
  it('Check Css for delete activity button', () => {
    cy.get('.directDownload').find('#downloadFile').should('have.css', 'margin-top', '').should('have.css', 'margin-bottom', '40px').should('have.css', 'border-radius', '8px').should('have.css', 'color', 'rgb(255, 255, 255)');
  })
  */



})

