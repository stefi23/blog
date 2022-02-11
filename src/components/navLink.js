import React from "react"
import { Link } from "gatsby"

const NavLink = ({ text, to = "#" }) => {
  return (
    <Link to={to} className="navigationLink">
      {text}
    </Link>
  )
}

export default NavLink
