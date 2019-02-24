import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

const Footer = ({ siteTitle }) => (
  <footer>
    © {new Date().getFullYear()} <Link to="/">{ siteTitle }</Link>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Test blog`,
}

export default Footer;
