import React from "react"

const LinkButton = ({ children, href }) => (
    <a
      href={href}
      style={{
        display: `block`,
        color: `white`,
        width: `175px`,
        textDecoration: `none`,
        padding: `20px`,
        background: `#444`,
        textAlign: `center`,
        fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
        fontWeight: `bold`,
      }}
    >
      {children}
    </a>
);

export default LinkButton;