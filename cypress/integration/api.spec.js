/// <reference types="cypress"/>


describe('Contrato de API com Cypress', () => {
  it('Faz requisição para API', () => {
    cy.request('GET', 'https://covid19-brazil-api.now.sh/api/report/v1').then(({status, body}) => {
      expect(status).to.equal(200)
      cy.validateSchema('covidSchema', body)
    })
  })
})
