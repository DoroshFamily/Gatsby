import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SinglePost = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, image } = data.markdownRemark.frontmatter
  const img = getImage(image.childrenImageSharp[0])

  return (
    <Layout>
      <Seo title={title}></Seo>
      <div>
        <h1>{title}</h1>
        <div>
          <GatsbyImage image={img} alt={title} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default SinglePost

export const query = graphql`
  query PostQuery($url: String) {
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      html
      frontmatter {
        category
        title
        url
        image {
          childrenImageSharp {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
`
