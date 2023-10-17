describe('User', () => {
  it('can navigate on main page', () => {
    cy.visit('/')
    cy.getId('top-bar').should('exist')
    cy.getId('navigation').getClass('nav-link').first().click()
    cy.getId('page-visit').should('exist')
  })

  it('can see error page', () => {
    cy.visit('/zxvfgsdfgjdhscasdfd', { failOnStatusCode: false })
    cy.getId('error-message').should('exist')
  })
})
