import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import testImg from "../images/example.png"

const Header = ({ siteTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  console.log("test", site)
  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
      <img alt="Gatsby logo" height={20} style={{ margin: 0 }} src={testImg} />
    </header>
  )
}

export default Header
