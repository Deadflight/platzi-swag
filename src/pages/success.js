import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const Success = () => {
  return (
    <>
      <SEO title="Successful purchase" />
      <Purchase>
        <h2>Successful purchase</h2>
        <p>We hope you enjoy your product</p>
        <p>¡We wait for you back!</p>
        <span role="img" aria-label="emoji">
          ❤️
        </span>
        <Link to="/">
          <Button>Back to products</Button>
        </Link>
      </Purchase>
    </>
  )
}

export default Success