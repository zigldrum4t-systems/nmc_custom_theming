describe('Settings related changes', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/apps/files/?dir=/&view=nmc_files_activity`);
    cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
  })

  it('Check Css for delete activity button', () => {
    cy.get('.del-files-activity-div').find('a').should('have.class','del-files-activity')
  })

  it('For language English check all translation like heading, title and delete button', () => {
    cy.wait(3000)
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Einstellungen').click()
    cy.wait(2000)
    cy.get('#languageinput').select('English')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/apps/files/?dir=/&view=nmc_files_activity`);
    cy.wait(1000)

    cy.get('.file-activity-heading').should('have.text',' Activities')
    cy.get('.file-activity-note').should('have.text',' Notifications are only visible to you and are stored just as securely encrypted in your MagentaCLOUD as your data. You can still delete your activities. Please note that activities regarding shared content cannot be deleted, as they belong to the sharer.		')
    cy.get('.del-files-activity .btn-default').should('have.text','Delete all activities')
  })

})
