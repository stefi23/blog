import React from "react"
import { Link } from "gatsby"

const NavBtn = ({ label, to = "#", isDisabled = false }) => {
  if (isDisabled) {
    //To change what is returned
    return (
      // <button disabled className="">
      //   {label}
      // </button>
      <p></p>
    )
  }
  return (
    <Link to={to} className="p-1">
      {label}
    </Link>
  )
}

export default ({ prefix = "/page/", currentPage, totalPages }) => {
  return (
    //To change what it looks like
    <div
      className="row mt-2 nav-innerContent"
      style={{ borderRadius: "4px" }}
    >
      <div className="col-md-12 navigation-card">
        <div className="row">
          <div className="col-6 p-2 d-flex justify-content-start pl-4 hover-bright">
            <NavBtn
              to={currentPage == 2 ? `/` : `${prefix}/${currentPage - 1}`}
              label={currentPage - 1}
              isDisabled={currentPage == 1 || currentPage == undefined}
            />
          </div>
          <div className="col-6 p-2 d-flex justify-content-end pr-4 hover-bright">
            <NavBtn
              isDisabled={currentPage == totalPages}
              to={`${prefix}/${currentPage + 1}`}
              label={currentPage + 1}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
