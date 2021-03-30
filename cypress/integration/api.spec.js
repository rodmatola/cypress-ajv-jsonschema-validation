/// <reference types="cypress"/>

import Ajv from "ajv"
const ajv = new Ajv({allErrors: true, verbose: true}) // options can be passed, e.g. {allErrors: true}

describe('Contrato de API com Cypress', () => {
  it('Faz requisição para API', () => {
    cy.request('GET', 'https://covid19-brazil-api.now.sh/api/report/v1').then((response) => {
      cy.fixture('covidSchema').then((covidSchema) => {
        const validate = ajv.compile(covidSchema)
        const valid = validate(response.body)
        if (!valid) cy.log(validate.errors).then(() => {
          throw new Error('Falha do contrato. Ver log acima')
        })
      })
    })









  })
})
