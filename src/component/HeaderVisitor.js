// @ts-nocheck
import React, { Component } from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { MDBNavbarNav, MDBNavItem, MDBFormInline, Link } from "mdbreact";
export default class HeaderVisitor extends Component {
  render() {
    return (
      <>
        <div className="header-fixed">
          <Navbar className="drakbg">
            <Container>
              <Navbar.Brand href="/">
                <img src={require("./image/logo-tookone1.png")} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline>
                      <div className="md-form my-0">
                        <input
                          className="form-control mr-sm-2 input-bg"
                          type="text"
                        />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBFormInline>
                      <div className="md-form my-0">
                        <input
                          className="form-control mr-sm-2 input-bg"
                          type="text"
                        />
                      </div>
                    </MDBFormInline>
                    <p className="header-for">
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </p>
                  </MDBNavItem>
                  <MDBNavItem>
                    <button className="login-btn">Login</button>
                  </MDBNavItem>
                </MDBNavbarNav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}
