import React from "react"
import { Link } from "gatsby"

const NavBtn = ({ label, to = "#", isDisabled = false, direction }) => {
  if (isDisabled) {
    return <p></p>
    }

  return (
    <Link to={to} className={`p-1 navigationButton navigationButton-${direction}`}>
      {label}
    </Link>
  )
}

export default ({ prefix = "/page", currentPage, totalPages }) => {

  return (
    <div
      className="row mt-2 nav-innerContent"
      style={{ borderRadius: "4px" }}
    >
      <div className="col-md-12 navigation-card">
        <div className="row">
          <div className="col-6 p-2 d-flex align-items-center justify-content-start pl-3">
            <NavBtn
              to={currentPage == 2 ? `/` : `${prefix}/${currentPage - 1}`}
              label={`← Previous page: ${currentPage - 1}`}
              isDisabled={currentPage == 1 || currentPage == undefined}
              direction="left"
            />
          </div>
          <div className="col-6 p-2 d-flex align-items-center justify-content-end pr-3">
            <NavBtn
              isDisabled={currentPage == totalPages}
              to={`${prefix}/${currentPage + 1}`}
              label={`Next page: ${currentPage + 1} →`}
              direction="right"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
