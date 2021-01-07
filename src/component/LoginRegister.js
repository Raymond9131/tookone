// @ts-nocheck
import React, { Component } from "react";
import {
  MDBContainer,
  MDBBox,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  Link,
} from "mdbreact";
import MobileStoreButton from "react-mobile-store-button";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { MDBInputGroup } from "mdbreact";
import GoogleMap from "./GoogleMap";
import ColourWheel from "../component/ColourWheel";

class LoginRegister extends Component {
  state = {
    modal: false,
    modal1: false,
    modal2: false,
  };
  toggle_modal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  toggle_modal1 = () => {
    this.setState({
      modal1: true,
      modal: false,
    });
  };
  toggle_modal2 = () => {
    this.setState({
      modal2: true,
      modal1: false,
      modal: false,
    });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    activeItem: "1",
  };

  toggle = (tab) => () => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };
  render() {
    const iOSUrl =
      "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";

    return (
      <div>
        <div className="bg-login">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="7">
                <div className="logo-icon-div">
                  <h4>Become a part of</h4>
                  <img
                    src={require("./image/logo-tookone1.png")}
                    className="login-logo"
                  />
                  <div className="mobile-text">
                    <img src={require("./image/mobile-text.png")} />
                    <h4>think easy, Experience More, truly social</h4>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="5">
                <MDBContainer>
                  <MDBNav tabs>
                    <MDBNavItem>
                      <MDBNavLink
                        className="signin-btn"
                        link
                        to="#tg1"
                        active={this.state.activeItem === "1"}
                        onClick={this.toggle("1")}
                        role="tab"
                      >
                        <MDBIcon />
                        Sign In
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        className="signin-btn"
                        link
                        to="#tb2"
                        active={this.state.activeItem === "2"}
                        onClick={this.toggle("2")}
                        role="tab"
                      >
                        <MDBIcon />
                        Register
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBTabContent
                    className="card login-form-tab"
                    activeItem={this.state.activeItem}
                  >
                    <MDBTabPane tabId="1" role="tabpanel">
                      <form>
                        <div className="form-div" style={{ marginTop: "55px" }}>
                          <h4>Login</h4>
                          <div className="form-group mt-40">
                            <label for="exampleForm2">Email or User Name</label>
                            <input
                              type="email"
                              id=""
                              class="form-control"
                              placeholder="Enter here"
                            ></input>
                          </div>
                          <div className="form-group">
                            <label for="exampleForm2">Password</label>
                            <input
                              type="password"
                              id=""
                              class="form-control"
                              placeholder="***********"
                            ></input>
                          </div>
                          <div className="form-group mt-40">
                            {/* <button className="main-btn btn-block" data-toggle="modal" data-target="#myModalSignup">
                              Sign In
                            </button> */}
                            <MDBBtn
                              className="main-btn btn-block"
                              onClick={this.toggle_modal}
                            >
                              Sign In
                            </MDBBtn>
                            {/* <button onClick={openModal}>Open Modal</button> */}
                          </div>
                          <div className="form-group text-center">
                            <MDBNavLink
                              link
                              to="/forgot-password"
                              className="text-white"
                            >
                              Forgot Password?
                            </MDBNavLink>
                          </div>
                        </div>
                      </form>
                    </MDBTabPane>
                    <MDBTabPane tabId="2" role="tabpanel">
                      <form>
                        <div className="form-div">
                          <h4>Register for Free</h4>
                          <div className="form-group">
                            <label for="exampleForm2">Name</label>
                            <input
                              type="text"
                              id=""
                              class="form-control"
                              placeholder="Enter here"
                            ></input>
                          </div>
                          <div className="form-group">
                            <label for="exampleForm2">Username</label>
                            <input
                              type="text"
                              id=""
                              class="form-control"
                              placeholder="Enter here"
                            ></input>
                          </div>
                          <div className="form-group">
                            <label for="exampleForm2">Email</label>
                            <input
                              type="text"
                              id=""
                              class="form-control"
                              placeholder="Enter here"
                            ></input>
                          </div>
                          <div className="form-group">
                            <label for="exampleForm2">Password</label>
                            <input
                              type="password"
                              id=""
                              class="form-control"
                              placeholder="***********"
                            ></input>
                          </div>
                          <div className="form-group">
                            <label for="exampleForm2">Gender</label>
                            <select class="form-control" placeholder="yyyyy">
                              <option selected>Select</option>
                              <option value="1">Male</option>
                              <option value="2">Female</option>
                              <option value="3">Other</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label for="exampleForm2">Name</label>
                            <input
                              type="text"
                              id=""
                              class="form-control"
                              placeholder="Enter here"
                            ></input>
                          </div>
                          <div className="form-group">
                            <input
                              type="checkbox"
                              className="mr-5"
                              id=""
                              placeholder="Enter here"
                            ></input>
                            <label>
                              I hereby confirm the Tac/data protection
                            </label>
                          </div>
                          <div className="form-group">
                            <button className="main-btn btn-block">
                              Register
                            </button>
                          </div>
                        </div>
                      </form>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="invest-now-div  p-t-b-40">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="9" className="">
                <h4>Are you still looking for an investment opportunity?</h4>
                <span>Invest in billion dollar market!</span>
              </MDBCol>
              <MDBCol md="3" className="text-right">
                <button className="main-btn ">Invest Now</button>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="pexel-div  p-t-b-40">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="">
                <h4>Pexels</h4>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <NavLink to="#">
                <div className="pexel-img-div">
                  <img src={require("./image/kandy.jpg")} />
                </div>
              </NavLink>
              <NavLink to="#">
                <div className="pexel-img-div">
                  <img src={require("./image/lonavala.jpg")} />
                </div>
              </NavLink>

              <NavLink to="#">
                <div className="pexel-img-div">
                  <img src={require("./image/mumbai.jpg")} />
                </div>
              </NavLink>
              <NavLink to="#">
                <div className="pexel-img-div">
                  <img src={require("./image/ptaya.jpg")} />
                </div>
              </NavLink>
              <NavLink to="#">
                <div className="pexel-img-div">
                  <img src={require("./image/sikkim.jpg")} />
                </div>
              </NavLink>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="download-app-div">
          <MDBRow>
            <MDBCol md="6">
              <div className="use-app-div">
                <MDBIcon icon="mobile-alt" />
                <h4>Use our Apps</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet
                </p>
              </div>
            </MDBCol>

            <MDBCol md="6">
              <div className="apps-btn-div">
                <div>
                  <MobileStoreButton
                    store="ios"
                    url={iOSUrl}
                    linkProps={{ title: "iOS Store Button" }}
                  />
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
        <div className="download-interest-div">
          <MDBRow>
            <MDBCol md="6">
              <div className="interest-img"></div>
            </MDBCol>
            <MDBCol md="6">
              <div className="use-interest-div">
                <MDBIcon icon="cube" />
                <h4>Interests</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
        <div className="download-app-div">
          <MDBRow>
            <MDBCol md="6">
              <div className="use-app-div">
                <MDBIcon icon="th" />
                <h4>Post in your favorite format </h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet
                </p>
              </div>
            </MDBCol>

            <MDBCol md="6">
              <div className="pexels-porapak"></div>
            </MDBCol>
          </MDBRow>
        </div>
        <div className="download-interest-div">
          <MDBRow>
            <MDBCol md="6">
              <div className="pexels-pixabay"></div>
            </MDBCol>
            <MDBCol md="6">
              <div className="use-interest-div">
                <MDBIcon icon="cube" />
                <h4>Local and global</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
        <div className="download-app-div">
          <MDBRow>
            <MDBCol md="6">
              <div className="use-app-div">
                <MDBIcon icon="lock" />
                <h4>Privacy</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet
                </p>
              </div>
            </MDBCol>

            <MDBCol md="6">
              <div className="interest-img"></div>
            </MDBCol>
          </MDBRow>
        </div>
        <div className="download-interest-div">
          <MDBRow>
            <MDBCol md="6">
              <div className="pexels-porapak"></div>
            </MDBCol>
            <MDBCol md="6">
              <div className="use-interest-div">
                <MDBIcon icon="spinner" />
                <h4>Find people</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
        <div className="download-app-div">
          <MDBRow>
            <MDBCol md="6">
              <div className="use-app-div">
                <MDBIcon icon="heart" />
                <h4>Matching Feature</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet
                </p>
              </div>
            </MDBCol>

            <MDBCol md="6">
              <div className="pexels-pixabay"></div>
            </MDBCol>
          </MDBRow>
        </div>
        <div className="download-interest-div">
          <MDBRow>
            <MDBCol md="6">
              <div className="pexels-cowomen-2041629"></div>
            </MDBCol>
            <MDBCol md="6">
              <div className="use-interest-div">
                <MDBIcon icon="cube" />
                <h4>Save Box</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
        <div className="counter-div-main">
          <Container>
            <div className="overlay-counter-bg">
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <div className="counting-section">
                    <CountUp end={15} duration={5} />
                    <p>Contributions</p>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="counting-section">
                    <CountUp end={7} duration={5} />
                    <p>Subsrciber</p>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="counting-section">
                    <CountUp end={0} duration={5} />
                    <p>Subscribed</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div className="bussiness-develop text-center">
          <h4>tookone for business is in development!</h4>
          <p>
            Would you like to be the first to be infoemed as soon as there is
            now?
          </p>
          <p> Then you can refister here</p>
          <MDBRow>
            <MDBCol md="6" className="offset-md-3 business-inputs">
              <MDBInputGroup
                hint="Recipient's username"
                containerClassName="mb-3"
                prepend={
                  <span className="input-group-text">
                    <i class="fas fa-envelope fa-sm"></i>
                  </span>
                }
                append={
                  <button outline className="m-0 px-3 py-2 enter-btn">
                    Enter
                  </button>
                }
              />
              <MDBBox className="business-btn">
                <button className="main-btn">
                  <b>Not a member yet?</b>Register Now
                </button>
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch1"
                  />
                  <label
                    class="custom-control-label"
                    for="customSwitch1"
                  ></label>
                </div>
                <button className="main-btn">
                  <b>Already a Member?</b>Sign in Now
                </button>
              </MDBBox>
            </MDBCol>
          </MDBRow>
        </div>

        {/*          Modal for Color Wheel Start */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle_modal}>
          <MDBModalHeader toggle={this.toggle_modal}>
            Chooose Your Favourite Color
          </MDBModalHeader>
          <MDBModalBody>
            <ColourWheel/>
            <MDBBox className="text-center">
              <MDBBtn className="main-btn" onClick={this.toggle_modal1}>
                Select
              </MDBBtn>
            </MDBBox>
          </MDBModalBody>
        </MDBModal>

        {/*          Modal for Color Wheel View Ends */}

        {/*          Modal for team View Start */}
        <MDBModal
          isOpen={this.state.modal1}
          toggle={this.toggle_modal1}
          size="xl"
        >
          <MDBModalHeader className="text-center">Select Team</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <div class="masonry-grid">
                <div className="cell ratio3x4">
                  <img src={require("./image/mobile-text.png")} />
                  <MDBBox className="cell-title">
                    <h4>Team 6</h4>
                  </MDBBox>
                </div>
                <div className="cell ratio4x3">
                  <img src={require("./image/mobile-text.png")} />
                  <MDBBox className="cell-title">
                    <h4>Team 6</h4>
                  </MDBBox>
                </div>
                <div className="cell ratio1x1">
                  <img src={require("./image/mobile-text.png")} />
                  <MDBBox className="cell-title">
                    <h4>Team 6</h4>
                  </MDBBox>
                </div>
                <div className="cell ratio1x1">
                  <img src={require("./image/mobile-text.png")} />
                  <MDBBox className="cell-title">
                    <h4>Team 6</h4>
                  </MDBBox>
                </div>
                <div className="cell ratio3x4">
                  <img src={require("./image/mobile-text.png")} />
                  <MDBBox className="cell-title">
                    <h4>Team 6</h4>
                  </MDBBox>
                </div>
                <div className="cell ratio4x3">
                  <img src={require("./image/mobile-text.png")} />
                  <MDBBox className="cell-title">
                    <h4>Team 6</h4>
                  </MDBBox>
                </div>
              </div>
              <MDBBox className="text-right">
                <MDBBtn className="main-btn" onClick={this.toggle_modal2}>
                  Continue
                </MDBBtn>
              </MDBBox>
            </MDBContainer>
          </MDBModalBody>
        </MDBModal>

        {/*          Modal for team View Ends */}
        {/*          Modal for Location Start */}
        <MDBModal
          isOpen={this.state.modal2}
          toggle={this.toggle_modal2}
          size="xl"
        >
          <MDBModalHeader>Chooose Your Home Location</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow>
                <GoogleMap className="location-popup" />
              </MDBRow>
              <form className="location-form">
                <MDBRow>
                  <MDBCol md="6">
                    <div className="form-group">
                      <label for="exampleForm2">Country</label>
                      <select class="form-control" placeholder="yyyyy">
                        <option selected>Select</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                      </select>
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="form-group">
                      <label for="exampleForm2">City</label>
                      <select class="form-control" placeholder="yyyyy">
                        <option selected>Select</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                      </select>
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBBox className="text-center">
                  <MDBBtn className="main-btn">
                    <NavLink className=""  to="/my-profile">
                      Select
                    </NavLink>
                  </MDBBtn>
                </MDBBox>
              </form>
            </MDBContainer>
          </MDBModalBody>
        </MDBModal>

        {/*          Modal for Location Ends */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default LoginRegister;
