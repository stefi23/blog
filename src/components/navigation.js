import React from "react"
import { Link } from "gatsby"

const NavBtn = ({ label, to = "#", isDisabled = false }) => {
  if (isDisabled) {
    return (
      <button disabled className="">
        {label}
      </button>
    )
  }

  return (
    <Link to={to} className="">
      {label}
    </Link>
  )
}

export default ({ prefix = "/page/", currentPage, totalPages }) => {
  return (
    <div className="">
      <div className="">
        <NavBtn
          to={currentPage === 2 ? `/` : `${prefix}${currentPage - 1}`}
          label="Prev"
          isDisabled={currentPage === 1}
        />
      </div>
      <div className="">
        <NavBtn
          isDisabled={currentPage === totalPages}
          to={`${prefix}/${currentPage + 1}`}
          label="Next"
        />
      </div>
    </div>
  )
}
