import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const styles = {
  pageLink: {
    textDecoration: `none`,
    marginLeft: `20px`,
  }
}

const PageLink = ({ link = `/`, text = ``}) => (
  <h3 style={{ float: `right`, margin: 0 }}>
    <Link
      to={link}
      style={styles.pageLink}
    >
      {text}
    </Link>
  </h3>
);

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        overflow: `auto`,
        borderBottom: `2px solid white`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ float: `left`, margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <PageLink text="Explore" link="/explore" />
      <PageLink text="Contribute" link="/contribute" />
      <PageLink text="Test" link="/test" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
