/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import Layout from "./src/components/Layout"
import { LocationProvider } from "./src/components/location-provider"

export const wrapRootElement = props => {
  const { element } = props
  return (
    <Layout>
      <LocationProvider>{element}</LocationProvider>
    </Layout>
  )
}
