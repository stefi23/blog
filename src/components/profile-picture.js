import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfilePicture = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/290A3641.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className="image_circle "
      alt="Banner image with my name: Stefi Rosca"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default ProfilePicture
