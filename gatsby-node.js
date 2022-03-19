const productTemplate = require.resolve(`./src/templates/product.js`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GET_PRODUCT{
      allStripePrice {
          edges {
            node {
              id,
              object,
              active,
              billing_scheme,
              product {
                id
                metadata{
                  description
                  img
                  wear
                }
                images
                name
              },
              type,
              livemode,
              unit_amount,
              unit_amount_decimal,
              currency
            }
          }
        }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading products`, result.errors)
    return
  }

  const products = result.data.allStripePrice.edges

  products.forEach(({node}) => {
    createPage({
      path: node.id,
      component: productTemplate,
      context: {
        unit_amount: node.unit_amount,
        id: node.id,
        name: node.product.name,
        metadata: node.product.metadata,
      }
    })
  })
}