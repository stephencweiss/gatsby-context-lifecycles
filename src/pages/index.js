import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
const IndexPage = () => (
  <Layout>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/">Go to page 1</Link>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/page-3/">Go to page 3</Link>
    </div>
  </Layout>
)

export default IndexPage
