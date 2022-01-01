import React from "react"
import ProfilePicture from "../components/profile-picture"
import { useStaticQuery, graphql, Link } from "gatsby"

const Sidebar = ({ siteTitle }) => {
  const result = useStaticQuery(
    graphql`
      query {
        categoriesGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
      }
    `
  )

  // console.log(result)

  // result.categoriesGroup.group
  return (
    <header>
      <div className="d-flex flex-column">
        <div className="content-box-main flex-column d-flex">
          <ProfilePicture />

          <br />
          <h2 className="mb-1" id="center">
            Get in touch!
          </h2>
          <ul className="list-inline-center mb-0 pb-0">
            <li>
              <a
                href="https://www.linkedin.com/in/stefaniarosca/"
                aria-label="Here is a link towards my LinkedIn profile"
                alt="Linkedin Profile"
                target="_blank"
              >
                <i
                  className="fab fa-linkedin"
                  aria-label="Here is a link towards my LinkedIn profile"
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/stefi23"
                aria-label="Here is a link towards my Github profile"
                alt="Github profile"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
          <ul className="list-inline-center mb-0">
            <li>
              <a
                href="https://www.instagram.com/stefi_rosca/"
                alt="Instagram profile"
                aria-label="Here is a link towards my Instagram profile"
                target="_blank"
              >
                <i className="fab fa-instagram fa-size:5x"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/StefiRosca"
                alt="YouTube channel"
                aria-label="Here is a link towards my YouTube profile"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/Stefania_Rosca"
                alt="Twitter profile"
                aria-label="Here is a link towards my Twitter profile"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>

          <div className="p-2 m-2 text-center">
            <p style={{ marginBottom: "0px" }}>
              "It is not because things are difficult that we do not dare, it is
              because we do not dare that they are difficult." <br />- Séneca
            </p>
          </div>
        </div>
        {/* <div className="content-box-main flex-column d-flex">About Blog</div> */}
        <div className="content-box-sidebar flex-column d-flex">
          <h2 className="text-center">categories:</h2>
          <div>
            {result.categoriesGroup.group.map(category => (
              <Link
                to={`category/${(category.fieldValue).toLowerCase()}`}
                className="sidebarCategory-link"
              >
                <p className="border p-2 sidebarCategory-link">
                  {category.fieldValue}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* <div className="content-box-main flex-column d-flex">Archive</div> */}
      </div>
    </header>
  )
}

export default Sidebar
