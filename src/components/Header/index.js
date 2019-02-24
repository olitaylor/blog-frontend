import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query menu {
        allStrapiMenu {
          edges {
            node {
              id
              name
              page {
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <h1>{siteTitle}</h1>
        <nav>
          {data.allStrapiMenu.edges.map(item => (
            <li key={item.node.id}>
                <Link to={`/${item.node.page.url}`}>{item.node.name}</Link>
            </li>
          ))}
        </nav>
      </header>
    )}
  />
)

export default Header;
