// @ts-nocheck
import React, { Component } from "react";
import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import { Link, MDBIcon } from "mdbreact";
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
            <Navbar.Brand href="#home">
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
                <Nav.Link href="/create-post" className="icon-style">
                  <i className="fa fa-plus"></i>
                </Nav.Link>

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
                        <ul>
                          <li>
                            <a href="/">
                              <div className="notifactionbox">
                                <div className="noti-img">
                                  <img src={require("./image/10-min.jpg")} />
                                </div>
                                <div className="not-text">
                                  <h5 className="bold m-0 mr-5">Melissa Doe</h5>
                                  {/* <small className="mtm-20 fs-10 float-right">
                                  13:12
                                </small> */}
                                  <h6 className="fs-10 m-0 mr-5 pr-15">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </h6>
                                  {/* <p className="badge badge-light-green float-right mtm-30">
                                  1
                                </p> */}
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
                                  <h5 className="bold m-0 mr-5">Melissa Doe</h5>
                                  {/* <small className="mtm-20 fs-10 float-right">
                                  13:12
                                </small> */}
                                  <h6 className="fs-10 m-0 mr-5 pr-15">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </h6>
                                  {/* <p className="badge badge-light-green float-right mtm-30">
                                  1
                                </p> */}
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
                                  <h5 className="bold m-0 mr-5">Melissa Doe</h5>
                                  {/* <small className="mtm-20 fs-10 float-right">
                                  13:12
                                </small> */}
                                  <h6 className="fs-10 m-0 mr-5 pr-15">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </h6>
                                  {/* <p className="badge badge-light-green float-right mtm-30">
                                  1
                                </p> */}
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
                                  <h5 className="bold m-0 mr-5">Melissa Doe</h5>
                                  {/* <small className="mtm-20 fs-10 float-right">
                                  13:12
                                </small> */}
                                  <h6 className="fs-10 m-0 mr-5 pr-15">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </h6>
                                  {/* <p className="badge badge-light-green float-right mtm-30">
                                  1
                                </p> */}
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
                                  <h5 className="bold m-0 mr-5">Melissa Doe</h5>
                                  {/* <small className="mtm-20 fs-10 float-right">
                                  13:12
                                </small> */}
                                  <h6 className="fs-10 m-0 mr-5 pr-15">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </h6>
                                  {/* <p className="badge badge-light-green float-right mtm-30">
                                  1
                                </p> */}
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
