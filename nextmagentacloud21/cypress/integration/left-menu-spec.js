describe('Settings related changes', () => {
  beforeEach(() => {
    cy.visit('http://release2104.nextmagentacloud.com/index.php/apps/files/?dir=/&fileid=3143')
    const username='test'
    const password='admin123'
    cy.get('.grouptop input').type(`${username}{enter}`)
    cy.get('.groupbottom input').type(`${password}{enter}`)
  })

  it('Left menu- Activities menu name in english', () => {
    cy.get("li[data-id='nmc_files_activity'] a").should('have.text','Activities')
  })

  it('Left menu- Favourites menu name in english', () => {
    cy.get("#app-navigation li[data-id='favorites'] a").should('have.text','Favourites')
  })

  it('Left menu- Files menu name in english', () => {
    cy.get("#app-navigation li[data-id='files'] a").should('have.text','All files')
  })

  it('Left menu- My shares menu name in english', () => {
    cy.get("#app-navigation li[data-id='sharingout'] a").should('have.text','My shares')
  })

  it('Left menu- Shared with me menu name in english', () => {
    cy.get("#app-navigation li[data-id='sharingin'] a").should('have.text','Shared with me')
  })

  it('Left menu- Shared with me menu name in english', () => {
    cy.get("#app-navigation li[data-id='trashbin'] a").should('have.text','Deleted files')
  })

  it('Left menu- Expand storage button text in english', () => {
    cy.get('.custom-button .btn-default').should('have.text',' Expand storage')
  })


})
