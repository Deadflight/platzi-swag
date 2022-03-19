import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const Cancel = () => {
  return (
    <>
      <SEO title="Failed purchase" />
      <Purchase>
        <h2>Failed purchase</h2>
        <p>Something go wrong with the purchase</p>
        
        <Link to="/">
          <Button>Back to products</Button>
        </Link>
      </Purchase>
    </>
  )
}

export default Cancel