import PropTypes from "prop-types"
import React, { useContext } from "react"
import { LocationContext } from "./location-provider"

const Header = () => {
  const location = useContext(LocationContext)
  const pathname = location && location.location && location.location.pathname
  console.log({
    location,
    path: location && location.location && location.location.pathname,
  })
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        color: 'white'
      }}
    >
      <h1>The pathname is -->&nbsp;{pathname || 'undefined'}</h1>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
