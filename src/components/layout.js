/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { Content, Footer, MainWrapper } from "../styles/components"
import './layout.css'

const Layout = ({ children }) => (
      <>
        <Header />
        <Content>
          <MainWrapper>{children}</MainWrapper>
          <Footer>
            Made with <span role='img' aria-label="heart-emoji">❤️</span> by
            <a target="_blank" rel='noreferrer' href="https://portfolio-nextjs-sigma.vercel.app/">Carlos Correa</a>
          </Footer>
        </Content>
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
