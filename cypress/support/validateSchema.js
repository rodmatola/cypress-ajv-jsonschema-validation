import Ajv from "ajv"
const ajv = new Ajv({allErrors: true, verbose: true}) // options can be passed, e.g. {allErrors: true}

export const validateSchema = (jsonSchema, body) => {
    cy.fixture(jsonSchema).then((schema) => {
        const validate = ajv.compile(schema)
        const valid = validate(body)
        if (!valid) {
            cy.log(validate.errors).then(() => {
                throw new Error('Falha do contrato. Ver log acima')
            })
        } else {
            Cypress.log({
                name: 'validateSchema',
                displayName: 'schema',
                message: `${jsonSchema} validado!`
            })
        }
    })
}
