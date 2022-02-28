describe('Settings related changes', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9090/index.php/settings/user')
      const username='admin2'
      const password='admin123'
      cy.get('.grouptop input').type(`${username}{enter}`)
      cy.get('.groupbottom input').type(`${password}{enter}`)
    })

})
