import React from "react"
import Banner from "../components/banner"

const Sidebar = ({ siteTitle }) => (
  <header>
    {/* <div className="row" style={{ marginTop: "20px" }}>
      <div className="col-md-12">
        <div className="header">
         
        </div>
      </div>
    </div> */}

    <div className="content-box-main flex-column d-flex">Get in Touch</div>

    <div className="content-box-main flex-column d-flex">About Blog</div>
    <div className="content-box-main flex-column d-flex">Tags</div>
    <div className="content-box-main flex-column d-flex">Archive</div>
  </header>
)

export default Sidebar
