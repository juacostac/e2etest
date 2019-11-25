/// <reference types="Cypress" />
context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.mercadolibre.com.ar/')
  })

  it('test it', () => {
    cy.get('.nav-search-input')
  })
})