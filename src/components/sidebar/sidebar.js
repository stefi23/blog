import React from "react"
import ProfilePicture from "./profilePicture"
import { useStaticQuery, graphql, Link } from "gatsby"

const Sidebar = () => {
  const result = useStaticQuery(
    graphql`
      query {
        categoriesGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  return (
    <div className="d-flex flex-column">
      <secton className="content-box-main flex-column d-flex">
        <ProfilePicture />
        <br />
        <h3 className="mb-1 sidebar-innerContent-title" id="center">
          Get in touch!
        </h3>
        <ul className="sidebar-innerContent-list mb-0 pb-0">
          <li className="sidebar-innerContent-item">
            <a
              href="https://www.linkedin.com/in/stefaniarosca/"
              aria-label="Here is a link towards my LinkedIn profile"
              alt="Linkedin Profile"
              target="_blank"
            >
              <i
                className="fab fa-linkedin sidebar-innerContent-icon"
                aria-label="Here is a link towards my LinkedIn profile"
              ></i>
            </a>
          </li>
          <li className="sidebar-innerContent-item">
            <a
              href="https://github.com/stefi23"
              aria-label="Here is a link towards my Github profile"
              alt="Github profile"
              target="_blank"
            >
              <i className="fab fa-github sidebar-innerContent-icon"></i>
            </a>
          </li>
        </ul>
        <ul className="sidebar-innerContent-list mb-0">
          <li className="sidebar-innerContent-item">
            <a
              href="https://www.instagram.com/stefi_rosca/"
              alt="Instagram profile"
              aria-label="Here is a link towards my Instagram profile"
              target="_blank"
            >
              <i className="fab fa-instagram sidebar-innerContent-icon"></i>
            </a>
          </li>
          <li className="sidebar-innerContent-item">
            <a
              href="https://www.youtube.com/c/StefiRosca"
              alt="YouTube channel"
              aria-label="Here is a link towards my YouTube profile"
              target="_blank"
            >
              <i className="fab fa-youtube sidebar-innerContent-icon"></i>
            </a>
          </li>

          <li className="sidebar-innerContent-item">
            <a
              href="https://twitter.com/Stefania_Rosca"
              alt="Twitter profile"
              aria-label="Here is a link towards my Twitter profile"
              target="_blank"
            >
              <i className="fab fa-twitter sidebar-innerContent-icon"></i>
            </a>
          </li>
        </ul>

        <div className="p-2 m-2 text-center">
          <p style={{ marginBottom: "0px" }}>
            "It is not because things are difficult that we do not dare, it is
            because we do not dare that they are difficult." <br />- Séneca
          </p>
        </div>
      </secton>
      <section className="content-box-sidebar flex-column d-flex">
        <h3 className="text-center sidebar-innerContent-title">categories:</h3>
        <div>
          {result.categoriesGroup.group.map(category => (
            <Link
              key={category.fieldValue}
              to={`/category/${category.fieldValue.toLowerCase()}`}
              className="sidebarCategory-link"
            >
              <p className="border p-2 sidebarCategory-link">
                {category.fieldValue}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-box-sidebar flex-column d-flex">
        <h3 className="text-center sidebar-innerContent-title">tags:</h3>
        <div className="sideBar-tags">
          {result.tagsGroup.group.map(tag => (
            <Link
              key={tag.fieldValue}
              className="sideBar-tags-highlight"
              to={`/tags/${tag.fieldValue.toLowerCase()}`}
            >
              <span>{tag.fieldValue}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Sidebar
