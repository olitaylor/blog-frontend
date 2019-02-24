import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.article_name}</h1>
		{ data.strapiArticle.article_image &&
    	<Img fixed={data.strapiArticle.article_image.childImageSharp.fixed}/>
		}
    <p>{data.strapiArticle.article_content}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String) {
    strapiArticle(id: {eq: $id}) {
			article_name
			article_content
      article_image {
				childImageSharp {
					fixed(width: 200, height: 125) {
						...GatsbyImageSharpFixed
					}
				}
			}
    }
  }
`