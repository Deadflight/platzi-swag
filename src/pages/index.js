import { graphql } from "gatsby"
import * as React from "react"
import { Jumbo, Products, SEO } from "../components"


// markup
export const query = graphql`
  query GET_DESCRIPTION{
    allSite{
      edges{
        node{
          siteMetadata{
            description
          }
        }
      }
    }
      allStripePrice {
          edges {
            node {
              id,
              object,
              active,
              billing_scheme,
              product {
                id
                name
                metadata{
                  description
                  img
                  wear
                }
                images
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
`

// const Button = styled.button`
//   width: 8rem;
//   background-color: #98ca3f;
//   border: none;
//   border-radius: 10px;
//   color: ${props => props.color};
//   transition: all 0.3s ease-in-out;
//   cursor: pointer;
//   &:hover {
//     color: #98ca3f;
//     background-color: ${props => props.color};
//     transform: scale(1.1);
//   }
// `

const IndexPage = ({ data }) => {
  return(
    <>
      <SEO title="Home" />
      <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
      <Products products={data.allStripePrice.edges} />
      {/* <Button color="white">Buy</Button> */}
    </>
  )
}

export default IndexPage
