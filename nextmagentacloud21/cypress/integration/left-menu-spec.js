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
    cy.get("li[data-id='nmc_files_activity'] a").should('have.contain','Activities')
    cy.get("#app-navigation li[data-id='favorites'] a").should('have.contain','Favourites')
    cy.get("#app-navigation li[data-id='files'] a").should('have.contain','All files')
    cy.get("#app-navigation li[data-id='sharingout'] a").should('have.contain','My shares')
    cy.get("#app-navigation li[data-id='sharingin'] a").should('have.contain','Shared with me')
    cy.get("#app-navigation li[data-id='trashbin'] a").should('have.contain','Deleted files')
    cy.get('.custom-button .btn-default').should('have.contain',' Expand storage')
    cy.get('.settings-button').should('have.contain','Display settings')
    cy.get("label[for='showhiddenfilesToggle']").should('have.contain','Show hidden files')
    cy.get("label[for='cropimagepreviewsToggle']").should('have.contain','Crop image previews')
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

    cy.get("li[data-id='nmc_files_activity'] a").should('have.contain','Aktivitäten')
    cy.get("#app-navigation li[data-id='favorites'] a").should('have.contain','Favoriten')
    cy.get("#app-navigation li[data-id='files'] a").should('have.contain','Alle Dateien')
    cy.get("#app-navigation li[data-id='sharingout'] a").should('have.contain','Meine geteilten Inhalte')
    cy.get("#app-navigation li[data-id='sharingin'] a").should('have.contain','Mit mir geteilt')
    cy.get("#app-navigation li[data-id='trashbin'] a").should('have.contain','Gelöschte Dateien')
    cy.get('.custom-button .btn-default').should('have.contain','Speicherplatz erweitern')
    cy.get('.settings-button').should('have.contain','Anzeigeeinstellungen')

    cy.get("label[for='showhiddenfilesToggle']").should('have.contain','Versteckte Dateien anzeigen')
    cy.get("label[for='cropimagepreviewsToggle']").should('have.contain','Vorschaubilder  beschneiden')
  })



})


