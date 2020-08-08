import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

interface Props {
  title: string
}

const Head = ({ title }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <meta name="description" content={data.site.siteMetadata.description} />
      <html lang="en" />
    </Helmet>
  )
}

export default Head
