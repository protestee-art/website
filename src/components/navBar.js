import React from "react"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <a href="/" className="link-no-style">
          <Navbar.Brand as="span">Home</Navbar.Brand>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <a href="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Page 2
              </Nav.Link>
            </a>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
