/// <reference types="cypress"/>

describe('Requisição GraphQL', () => {
  it('Faz requisição GraphQL', () => {
    cy.getCityWeather('Sao Paulo').then(({ body }) => {
      cy.validateSchema('weatherSchema', body)
    })    
  })
})
