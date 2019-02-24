import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/Seo'
class Home extends Component {
  render() {
    const { data: { allStrapiArticle: { edges: articles } } } = this.props;
    return (
      <Layout>
        <SEO title="Home" />
        <ul>
          {articles.map(document => (
            <li key={document.node.id}>
              <h2>
                <Link to={`/${document.node.article_url}`}>{document.node.article_name}</Link>
              </h2>
              <p>{document.node.article_content}</p>
              <p>Author: {document.node.article_author.username}</p>
            </li>
          ))}
        </ul>
    </Layout>
    )
  }
}

export const posts = graphql`  
  query posts {
    allStrapiArticle {
      edges {
        node {
          id
          article_name
          article_content
          article_url
          article_author {
            username
          }
        }
      }
    }
  }
`

export default Home;