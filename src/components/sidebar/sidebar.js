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
        <p className="socialSharing-wrapper">
          <a
            className="socialMediaLinks"
            href="https://polywork.com/stefi"
            aria-label="Here is a link towards my Polywork profile"
            alt="Polywork profile"
            target="_blank"
          >
            <svg
              className="socialMediaLinks-icon"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Polywork</title>
              <path d="M19.125 0H4.875A4.865 4.865 0 0 0 0 4.875v14.25C0 21.825 2.175 24 4.875 24h6.6c2.7 0 4.875-2.175 4.875-4.875V16.65h2.775c2.7 0 4.875-2.175 4.875-4.875v-6.9C24 2.175 21.825 0 19.125 0zM16.5 1.275h2.625a3.6 3.6 0 0 1 3.6 3.6v2.7H16.5v-6.3zM15.075 9v6.45H8.85V9h6.225zM8.85 1.2h6.225v6.375H8.85V1.2zM1.275 4.8a3.6 3.6 0 0 1 3.6-3.6H7.5v6.375H1.275V4.8zM7.5 9v6.45H1.2V9h6.3zm0 13.725H4.8a3.6 3.6 0 0 1-3.6-3.6V16.8h6.3v5.925zm7.575-3.525a3.6 3.6 0 0 1-3.6 3.6H8.85v-5.925h6.225V19.2zm7.65-7.35a3.6 3.6 0 0 1-3.6 3.6H16.5V9h6.225v2.85z" />
            </svg>
          </a>
          <a
            className="socialMediaLinks"
            href="https://twitter.com/Stefania_Rosca"
            alt="Twitter profile"
            aria-label="Here is a link towards my Twitter profile"
            target="_blank"
          >
            <svg
              className="socialMediaLinks-icon"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            className="socialMediaLinks"
            href="https://www.youtube.com/c/StefiRosca"
            alt="Twitter profile"
            aria-label="Here is a link towards my Twitter profile"
            target="_blank"
          >
            <svg
              className="socialMediaLinks-icon"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>YouTube</title>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          <a
            className="socialMediaLinks"
            href={`https://www.linkedin.com/in/stefaniarosca/`}
            aria-label="Here is a link towards my Linkedin profile"
            alt="Linkedin profile"
            target="_blank"
          >
            <svg
              className="socialMediaLinks-icon"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </p>
        <div className="p-2 m-2 text-center">
          <p className="mb-0 pt-0">
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
