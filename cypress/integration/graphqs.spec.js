/// <reference types="cypress"/>

describe('Requisição GraphQL', () => {
  it('Faz requisição GraphQL', () => {
    var queryString = `{
      getCityByName(
        name: "Sao Paulo"
      ){
        country
        weather{
          summary{
            title
            description
          }
          temperature{
            actual
            feelsLike
            min
            max
          }
          wind{
            speed
          }
          clouds{
            all
            visibility
            humidity
          }
        }
      }
    }`
    cy.request({
      method: 'POST',
      url: 'https://graphql-weather-api.herokuapp.com/', 
      body: {
        query: queryString
      },
    }).then(response => {
      cy.log(response.body)
    })
  })
})
