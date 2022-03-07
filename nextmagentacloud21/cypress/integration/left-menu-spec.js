describe('Settings related changes', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
  })

  it('Left menu names change in english', () => {
    cy.wait(3000)
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Einstellungen').click()
    cy.wait(2000)
    cy.get('#languageinput').select('English')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.wait(1000)
    cy.get("li[data-id='nmc_files_activity'] a").should('have.text','Activities')
    cy.get("#app-navigation li[data-id='favorites'] a").should('have.text','Favourites')
    cy.get("#app-navigation li[data-id='files'] a").should('have.text','All files')
    cy.get("#app-navigation li[data-id='sharingout'] a").should('have.text','My shares')
    cy.get("#app-navigation li[data-id='sharingin'] a").should('have.text','Shared with me')
    cy.get("#app-navigation li[data-id='trashbin'] a").should('have.text','Deleted files')
    cy.get('.custom-button .btn-default').should('have.text',' Expand storage')
  })

  it('Left menu names - in German', () => {
    cy.wait(3000)
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Settings').click()
    cy.wait(2000)
    cy.get('#languageinput').select('Deutsch')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.wait(1000)

    cy.get("li[data-id='nmc_files_activity'] a").should('have.text','Aktivitäten')
    cy.get("#app-navigation li[data-id='favorites'] a").should('have.text','Favoriten')
    cy.get("#app-navigation li[data-id='files'] a").should('have.text','Alle Dateien')
    cy.get("#app-navigation li[data-id='sharingout'] a").should('have.text','Meine geteilten Inhalte')
    cy.get("#app-navigation li[data-id='sharingin'] a").should('have.text','Mit mir geteilt')
    cy.get("#app-navigation li[data-id='trashbin'] a").should('have.text','Gelöschte Dateien')
    cy.get('.custom-button .btn-default').should('have.text',' Speicherplatz erweitern')
  })

})
