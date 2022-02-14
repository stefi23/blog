import React from "react"
import { Link } from "gatsby"

const Navigation = ({ currentPage, totalPages }) => {
  const prefix = "/page"
  const isOnFirstPage = currentPage === 1 || currentPage === undefined
  const isOnLastPage = currentPage === totalPages

  return (
    <div className="row mt-2 nav-innerContent" style={{ borderRadius: "4px" }}>
      <div className="col-md-12 navigation-card">
        <div className="row">
          <div className="col-6 p-2 d-flex align-items-center justify-content-start pl-3">
            {!isOnFirstPage && (
              <Link
                to={currentPage === 2 ? `/` : `${prefix}/${currentPage - 1}`}
                className="p-1 navigationButton"
              >
                {`← Previous page: ${currentPage - 1}`}
              </Link>
            )}
          </div>
          <div className="col-6 p-2 d-flex align-items-center justify-content-end pr-3">
            {!isOnLastPage && (
              <Link
                to={`${prefix}/${currentPage + 1}`}
                className="p-1 navigationButton"
              >
                {`Next page: ${currentPage + 1} →`}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
