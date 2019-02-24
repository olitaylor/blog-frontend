import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout' 

const StandardTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPage.page_title}</h1>
    <p>{data.strapiPage.page_content}</p>
  </Layout>
)

export default StandardTemplate

export const query = graphql`
  query StandardTemplate($id: String) {
    strapiPage(id: {eq: $id}) {
      id
      url
      page_title
      page_content
    }
  }
`