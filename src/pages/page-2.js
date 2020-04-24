import React from "react"
import { Link } from "gatsby"

const SecondPage = () => (
  <>
    <div style={{display:'flex',flexDirection:'column'}}>
    <Link to="/">Go to page 1</Link>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
    </div>
  </>
)
export default SecondPage
