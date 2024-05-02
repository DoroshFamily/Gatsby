import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return (
    <Layout>
      <div className={styles.textCenter}>
        <h1>
          Welcome to <b>Gatsby!</b>
        </h1>
      </div>

      <div className={styles.blockLink}>
        {nodes.map(post => {
          const { category, title, url, image } = post.frontmatter
          const img = getImage(image)
          return (
            <div key={post.id} className={styles.customLink}>
              <GatsbyImage image={img} alt={title} />
              <Link to={`/${category}/${url}`}>{title}</Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query MainPage {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          category
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 200, formats: AUTO, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
