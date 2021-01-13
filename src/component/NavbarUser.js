// @ts-nocheck
import React, { Component } from "react";
import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import { Link, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";
export default class NavbarUser extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      popupVisible: false,
    };
  }

  handleClick() {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState((prevState) => ({
      popupVisible: !prevState.popupVisible,
    }));
  }

  handleOutsideClick(e) {
  
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    return (
      <div className="header-fixed">
        <Navbar className="drakbg">
          <Container>
            <Navbar.Brand href="/">
              <img src={require("./image/logo-tookone1.png")} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="search mx-auto">
                <button>
                  <i class="fa fa-search"></i>
                </button>
                <input type="text" placeholder="Discover interesting things" />
              </div>
              <Nav className="navbox">
                <NavLink
                  to="/create-post"
                  className="icon-style"
                  style={{ color: "#fff" }}
                >
                  <i className="fa fa-plus"></i>
                </NavLink>

                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <Nav.Link href="" className="icon-style">
                      <i className="far fa-compass"></i>
                    </Nav.Link>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link to="/">compass</Link>
                    <Link to="/">compass</Link>
                    <Link to="/">compass</Link>
                    <Link to="/">compass</Link>
                  </Dropdown.Menu>
                </Dropdown>

                <Nav.Link className="icon-style">
                  <div
                    className="popover-container"
                    ref={(node) => {
                      this.node = node;
                    }}
                  >
                    <i class="far fa-bell" onClick={this.handleClick}></i>

                    {this.state.popupVisible && (
                      <div className="notifaction-toggle">
                        <h2>
                          Notification{" "}
                          <span>
                            <i class="fas fa-users"></i> <strong>10</strong>
                          </span>{" "}
                        </h2>

                        <ul>
                          <li>
                            <a href="/">
                              <div className="notifactionbox">
                                <div className="noti-img">
                                  <img src={require("./image/10-min.jpg")} />
                                </div>
                                <div className="not-text">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="notit4ext">
                                        <h5 className="bold m-0 mr-5 mb-2">
                                          Melissa Doe
                                        </h5>
                                        <p>Wants to follow you</p>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="notit4ext">
                                        <p>10 Second ago</p>
                                        {/* <button className="btn btn-rounded btn-danger">
                                          Cencel
                                        </button>
                                        <button className="btn btn-publish">
                                          Accept
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <div className="notifactionbox">
                                <div className="noti-img">
                                  <img src={require("./image/10-min.jpg")} />
                                </div>
                                <div className="not-text">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="notit4ext">
                                        <h5 className="bold m-0 mr-5 mb-2">
                                          Melissa Doe
                                        </h5>
                                        <p>Wants to follow you</p>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="notit4ext">
                                        <p>10 Second ago</p>
                                        {/* <button className="btn btn-rounded btn-danger">
                                          Cencel
                                        </button>
                                        <button className="btn btn-publish">
                                          Accept
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <div className="notifactionbox">
                                <div className="noti-img">
                                  <img src={require("./image/10-min.jpg")} />
                                </div>
                                <div className="not-text">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="notit4ext">
                                        <h5 className="bold m-0 mr-5 mb-2">
                                          Melissa Doe
                                        </h5>
                                        <p>Wants to follow you</p>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="notit4ext">
                                        <p>10 Second ago</p>
                                        {/* <button className="btn btn-rounded btn-danger">
                                          Cencel
                                        </button>
                                        <button className="btn btn-publish">
                                          Accept
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <div className="notifactionbox">
                                <div className="noti-img">
                                  <img src={require("./image/10-min.jpg")} />
                                </div>
                                <div className="not-text">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="notit4ext">
                                        <h5 className="bold m-0 mr-5 mb-2">
                                          Melissa Doe
                                        </h5>
                                        <p>Wants to follow you</p>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="notit4ext">
                                        <p>10 Second ago</p>
                                        {/* <button className="btn btn-rounded btn-danger">
                                          Cencel
                                        </button>
                                        <button className="btn btn-publish">
                                          Accept
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </Nav.Link>

                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <Nav.Link className="icon-style">
                      <i class="fas fa-paper-plane"></i>
                    </Nav.Link>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link to="/">Action 1</Link>
                    <Link to="/">Action 2</Link>
                    <Link to="/">Action 3</Link>
                    <Link to="/">Action 4</Link>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <Nav.Link className="icon-style">
                      <i class="fas fa-caret-down"></i>
                    </Nav.Link>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link to="/">
                      <MDBIcon icon="comment" /> Feedback geben
                    </Link>
                    <Link to="/">
                      <MDBIcon icon="cog" /> Einstellungen
                    </Link>
                    <Link to="/">
                      <MDBIcon icon="info-circle" /> Hilfe
                    </Link>
                    <Link to="/">
                      <MDBIcon icon="moon" /> Bachtmodus
                    </Link>
                    <Link to="/">
                      <MDBIcon icon="sign-out-alt" /> Abmleden
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
