import React, { Component } from "react";
import NavbarUser from "../component/NavbarUser";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  Link,
  MDBNavLink,
  MDBNav,
  MDBNavItem,
  MDBTabContent,
  MDBTabPane,
  MDBCollapse,
} from "mdbreact";
import { Multiselect } from "multiselect-react-dropdown";
import Sidebar from "../component/Sidebar";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "someUniqueId",
      // I would use this.props.id for a real world implementation
      imageURI: null,
      activeItem: "1",
      activeItem1: "1",
      collapseID: "basicCollapse3",
    };
  }

  buildImgTag() {
    let imgTag = null;
    if (this.state.imageURI !== null)
      imgTag = (
        <div className="row">
          <div className="col-md-2">
            <img className="thumbnail boxs" src={this.state.imageURI}></img>
          </div>
        </div>
      );
    return imgTag;
  }

  readURI(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function(ev) {
        this.setState({ imageURI: ev.target.result });
      }.bind(this);
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  handleChange(e) {
    this.readURI(e); // maybe call this with webworker or async library?
    if (this.props.onChange !== undefined) this.props.onChange(e); // propagate to parent component
  }

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
      plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    }));
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  togglecreate = (tab) => (e) => {
    if (this.state.activeItem1 !== tab) {
      this.setState({
        activeItem1: tab,
      });
    }
  };

  render() {
    const { plainArray } = this.state;
    const imgTag = this.buildImgTag();
    return (
      <>
        <NavbarUser />

        <div className="ibord ">
          <Sidebar />
          <div className="create-post-main mt-4">
            <MDBContainer fluid>
              <MDBRow>
                <MDBCol md="9">
                  <div className="create-post-main-box">
                    <div className="title-headding">
                      <i class="fas fa-cog"></i>
                      Setting
                    </div>
                    <div className="tab-fillter settingbox">
                      <MDBNav>
                        <MDBNavItem>
                          <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItem1 === "1"}
                            onClick={this.togglecreate("1")}
                            role="tab"
                          >
                            <i class="fas fa-user"></i>
                            Profile
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItem1 === "2"}
                            onClick={this.togglecreate("2")}
                            role="tab"
                          >
                            <i class="fas fa-lock"></i> Privacy
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItem1 === "3"}
                            onClick={this.togglecreate("3")}
                            role="tab"
                          >
                            <i class="fas fa-globe-americas"></i>
                            Account
                          </MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                          <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItem1 === "4"}
                            onClick={this.togglecreate("4")}
                            role="tab"
                          >
                            <i class="fas fa-envelope"></i>
                            News
                          </MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                          <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItem1 === "5"}
                            onClick={this.togglecreate("5")}
                            role="tab"
                          >
                            <i class="fas fa-road"></i>
                            Address
                          </MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                          <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItem1 === "6"}
                            onClick={this.togglecreate("6")}
                            role="tab"
                          >
                            <i class="fas fa-info"></i>
                            Support
                          </MDBNavLink>
                        </MDBNavItem>
                      </MDBNav>
                    </div>

                    <div className="setting-main">
                      <MDBTabContent activeItem={this.state.activeItem1}>
                        <MDBTabPane tabId="1" role="tabpanel">
                          <div className="text-data">
                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Profile information </h2>
                              </div>
                              <span>
                                Change and edit your profile information
                              </span>
                            </div>

                            <div className="profile-setting">
                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control "
                                  id="formGroupExampleInput"
                                  placeholder="testname"
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                  Username
                                </label>
                                <input
                                  type="text"
                                  className="form-control "
                                  id="formGroupExampleInput"
                                  placeholder="testusername"
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                  Website
                                </label>
                                <input
                                  type="text"
                                  className="form-control "
                                  id="formGroupExampleInput"
                                  placeholder="testusername"
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                  biography
                                </label>
                                <textarea
                                  style={{ height: "100px", resize: "none" }}
                                  className="form-control "
                                  id="formGroupExampleInput"
                                  placeholder="biography"
                                />
                              </div>
                            </div>
                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Finder information </h2>
                              </div>
                              <span>
                                Change and edit your profile information
                              </span>
                            </div>
                            <div className="profile-setting">
                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                  Workplace
                                </label>
                                <input
                                  type="text"
                                  className="form-control "
                                  id="formGroupExampleInput"
                                  placeholder="biography"
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                  Place of Recidence
                                </label>
                                <input
                                  type="text"
                                  className="form-control "
                                  id="formGroupExampleInput"
                                  placeholder="biography"
                                />
                              </div>
                            </div>

                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Age Group </h2>
                              </div>
                              <b>22-52 yrs</b>
                            </div>

                            <div className="profile-setting">
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>

                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Distance Limit</h2>
                              </div>
                              <b>58 KM</b>
                            </div>

                            <div className="profile-setting">
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>

                            <div className="form-group text-right">
                              <button className="btn btn-publish">Save</button>
                            </div>
                          </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel">
                          <div className="text-data">
                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Privacy </h2>
                              </div>
                            </div>

                            <div className="profile-setting">
                              <p>
                                Determine how your profile is visible to
                                others.At the same time you determine the basic
                                setting for your contributions.
                              </p>
                              <div className="form-group">
                                <select className="form-control ">
                                  <option>Public</option>
                                  <option>Public</option>
                                  <option>Public</option>
                                  <option>Public</option>
                                </select>
                              </div>
                            </div>

                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Photos of You </h2>
                              </div>
                            </div>

                            <div className="profile-setting">
                              <p>
                                Determine how your profile is visible to
                                others.At the same time you determine the basic
                                setting for your contributions.
                              </p>
                              <div className="form-group">
                                <select className="form-control ">
                                  <option selected="">Add automatically</option>
                                  <option value="1">Add automatically</option>
                                  <option value="2">Add automatically</option>
                                  <option value="3">Add automatically</option>
                                </select>
                              </div>
                            </div>

                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2> Blocked People </h2>
                              </div>
                              <b>0 People </b>
                            </div>

                            <div className="profile-setting">
                              <p>You have not blocked a user yet</p>
                            </div>

                            <div className="form-group text-right">
                              <button className="btn btn-publish">Save</button>
                            </div>
                          </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="3" role="tabpanel">
                          <div className="text-data">
                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Private information </h2>
                              </div>
                              <span>
                                Change and edit your profile information
                              </span>
                            </div>

                            <div className="profile-setting">
                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                  Email
                                </label>
                                <input
                                  type="text"
                                  className="form-control "
                                  id="formGroupExampleInput"
                                  placeholder="testmail@tookone.de"
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                  Mobile Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control "
                                  id="formGroupExampleInput"
                                  placeholder="+XX XXXXXXXXXX"
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                  Gender
                                </label>
                                <select
                                  class="browser-default custom-select"
                                  className="form-control"
                                >
                                  <option selected="">Male</option>
                                  <option value="1">Male</option>
                                  <option value="2">female</option>
                                </select>
                              </div>
                              <div className="form-group text-right">
                                <button className="btn btn-publish">
                                  Save
                                </button>
                              </div>
                            </div>

                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Change password</h2>
                              </div>
                              <span>
                                Change and edit your profile information
                              </span>
                            </div>

                            <div className="profile-setting">
                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control "
                                  placeholder="**********"
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                  New Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control "
                                  placeholder="**********"
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="formGroupExampleInput">
                                  Confirm New Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control "
                                  placeholder="**********"
                                />
                              </div>
                            </div>

                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2> Deactivate account </h2>
                              </div>
                            </div>

                            <div className="profile-setting">
                              <p>
                                If you deactivate your account , you will no
                                longer be visible on tookone. You have time to
                                reconsider your decision within the next 6
                                months.After 6 months , all of your information
                                will be irrevocably deleted . If you want to
                                reactivate your account,simply log in again
                                within the next 6 months.
                              </p>
                              <div className="form-group text-right">
                                <button className="btn btn-danger btn-rounded">
                                  Deactivate
                                </button>
                              </div>
                            </div>

                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2> Delete account </h2>
                              </div>
                            </div>

                            <div className="profile-setting">
                              <p>
                                If you delete your account , you will no longer
                                be visible on tookone.All information about you
                                and your activities will be irrevocably deleted.
                              </p>
                              <div className="form-group text-right">
                                <button className="btn btn-danger btn-rounded">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </MDBTabPane>

                        <MDBTabPane tabId="4" role="tabpanel">
                          <div className="text-data">
                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Read Receipts </h2>
                              </div>
                            </div>

                            <div className="profile-setting">
                              <p>
                                Determine who Can see your "last Online" status.
                                Note: If you don't show your status,you won't be
                                able to see read receipts from others.
                              </p>

                              <div className="form-group">
                                <select
                                  class="browser-default custom-select"
                                  className="form-control"
                                >
                                  <option selected="">Public</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div>

                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Last Online </h2>
                              </div>
                            </div>

                            <div className="profile-setting">
                              <p>
                                Determine how your profile is visible to
                                others.At the same time you determine the basic
                                setting for your contributions.
                              </p>

                              <div className="form-group">
                                <select
                                  class="browser-default custom-select"
                                  className="form-control"
                                >
                                  <option selected="">Public</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div>

                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Newsletter </h2>
                              </div>
                            </div>

                            <div className="profile-setting">
                              <p>
                                Determine how your profile is visible to
                                others.At the same time you determine the basic
                                setting for your contributions.
                              </p>

                              <div className="form-group">
                                <select
                                  class="browser-default custom-select"
                                  className="form-control"
                                >
                                  <option selected="">Active</option>
                                  <option value="1">Inactive</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-group text-right">
                              <button className="btn btn-publish">Save</button>
                            </div>
                          </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="5" role="tabpanel">
                          <div className="text-data">
                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Address info </h2>
                              </div>
                            </div>

                            <div className="profile-setting">
                              <div className="add-address">
                                <p> Yoy have not added any interests yet! </p>

                                <Link to="/">
                                  <i class="fas fa-plus"></i>
                                </Link>
                              </div>
                            </div>

                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Invoice info </h2>
                              </div>
                            </div>

                            <div className="profile-setting">
                              <div className="invoicebox mb-4">
                                <h2>Rechnung Nummer 65655343</h2>
                                <p>
                                  12.12.2020
                                  <br />
                                  3456,00 <i class="fas fa-euro-sign"></i>
                                </p>
                                <div className="text-right">
                                  <button className="btn btn-publish">
                                    <i class="fas fa-download"></i> Download
                                  </button>
                                  <button className="btn btn-primary btn-rounded font-16">
                                    <i class="far fa-edit"></i> Show
                                  </button>
                                </div>
                              </div>

                              <div className="invoicebox">
                                <h2>Rechnung Nummer 65655343</h2>
                                <p>
                                  12.12.2020
                                  <br />
                                  3456,00 <i class="fas fa-euro-sign"></i>
                                </p>
                                <div className="text-right">
                                  <button className="btn btn-publish">
                                    <i class="fas fa-download"></i> Download
                                  </button>
                                  <button className="btn btn-primary btn-rounded font-16">
                                    <i class="far fa-edit"></i> Show
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </MDBTabPane>

                        <MDBTabPane tabId="6" role="tabpanel">
                          <div className="text-data">
                            <div className="create-text-title setting-space">
                              <div className="left-text">
                                <h2>Support </h2>
                              </div>
                            </div>

                            <div className="profile-setting">
                              <MDBRow className="mt-3">
                                <MDBCol md="6">
                                  <div>
                                    <h4>
                                      <font color="#9bcc37">Tickets</font>
                                    </h4>
                                    <hr
                                      style={{
                                        borderWidth: 4,
                                        borderRadius: 5,
                                        borderColor: "#9bcc37",
                                      }}
                                    ></hr>
                                    <div style={{ marginTop: 20 }}>
                                      <p>
                                        Here you can see an overview of the
                                        support here request that you have
                                        communicated to us.
                                      </p>
                                    </div>
                                  </div>
                                </MDBCol>

                                <MDBCol md="6">
                                  <div>
                                    <h4>
                                      <font color="#9bcc37">
                                        Functional Request
                                      </font>
                                    </h4>
                                    <hr
                                      style={{
                                        borderWidth: 4,
                                        borderRadius: 5,
                                        borderColor: "#9bcc37",
                                      }}
                                    ></hr>
                                    <div style={{ marginTop: 20 }}>
                                      <p>
                                        Here you can see an overview of the
                                        support here request that you have
                                        communicated to us.
                                      </p>
                                    </div>
                                  </div>
                                </MDBCol>
                              </MDBRow>
                              <MDBRow className="mt-4 ">
                                <MDBCol md="12">
                                  <div>
                                    <h4>
                                      <font color="#9bcc37">Reported Post</font>
                                    </h4>
                                    <hr
                                      style={{
                                        borderWidth: 4,
                                        borderRadius: 5,
                                        borderColor: "#9bcc37",
                                      }}
                                    ></hr>
                                  </div>
                                </MDBCol>
                              </MDBRow>
                              <div>
                                <p>
                                  {" "}
                                  Here you can find the posts you have reported{" "}
                                </p>
                              </div>

                              <hr
                                style={{ borderWidth: 5, borderRadius: 5 }}
                              ></hr>
                              <div className="view-post-m mt-4">
                                <div className="mainBoxDown">
                                  <MDBRow>
                                    <MDBCol md="2">
                                      <img
                                        src={require("./image/i-post-6.png")}
                                        alt=""
                                      />
                                    </MDBCol>

                                    <MDBCol
                                      md="10"
                                      className="d-flex align-items-center"
                                    >
                                      <ul className="setting-support">
                                        <li> image </li>
                                        <li> Reason why reported </li>
                                        <li> 04/12/2019 </li>
                                        <li>
                                          {" "}
                                          Response / message from tookone{" "}
                                        </li>
                                      </ul>
                                    </MDBCol>
                                  </MDBRow>
                                </div>
                              </div>

                              <div className="view-post-m mt-3">
                                <div className="mainBoxDown">
                                  <MDBRow>
                                    <MDBCol md="2">
                                      <img
                                        src={require("./image/i-post-6.png")}
                                        alt=""
                                      />
                                    </MDBCol>

                                    <MDBCol
                                      md="10"
                                      className="d-flex align-items-center"
                                    >
                                      <ul className="setting-support">
                                        <li> Video </li>
                                        <li> Reason why reported </li>
                                        <li> 04/12/2019 </li>
                                        <li>
                                          Response / message from tookone{" "}
                                        </li>
                                      </ul>
                                    </MDBCol>
                                  </MDBRow>
                                </div>
                              </div>
                            </div>
                          </div>
                        </MDBTabPane>
                      </MDBTabContent>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="3">
                  <div className="proposal create-top-align">
                    <h1>Proposal</h1>

                    <MDBNav className="tabs-div">
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          active={this.state.activeItem === "1"}
                          onClick={this.toggle("1")}
                          role="tab"
                        >
                          <i class="fas fa-bars"></i>
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          active={this.state.activeItem === "2"}
                          onClick={this.toggle("2")}
                          role="tab"
                        >
                          <i class="fab fa-codepen"></i>
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          active={this.state.activeItem === "3"}
                          onClick={this.toggle("3")}
                          role="tab"
                        >
                          <i class="fas fa-users"></i>
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNav>
                    <div className="tabsbox">
                      <MDBTabContent activeItem={this.state.activeItem}>
                        <MDBTabPane tabId="1" role="tabpanel">
                          <div className="proposal-container">
                            <div className="proposal-img mb-3 border-create-radius">
                              <span className="cubebox">
                                <i class="fab fa-codepen"></i>
                              </span>
                              <img src={require("./image/mask.jpg")} alt="" />
                              <div className="create-user-icon">
                                <i class="fas fa-user"></i>
                              </div>
                            </div>

                            <div className="proposal-img">
                              <span
                                className="cubebox"
                                onClick={this.toggleCollapse("basicCollapse")}
                              >
                                <i class="fab fa-codepen"></i>
                              </span>
                              <img src={require("./image/mask.jpg")} alt="" />
                              <div className="create-user-icon">
                                <i class="fas fa-user"></i>
                              </div>
                            </div>
                            <MDBCollapse
                              id="basicCollapse"
                              isOpen={this.state.collapseID}
                            >
                              <div className="droptoggle">
                                <img src={require("./image/mask.jpg")} alt="" />
                              </div>
                              <div className="instest">
                                <i class="fab fa-codepen"></i>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Test insterest"
                                />
                              </div>
                              <div className="search-fillter">
                                <i class="fas fa-filter"></i>
                                <Multiselect
                                  options={plainArray}
                                  isObject={false}
                                />
                              </div>
                              <div className="add-proposal-post">
                                <i
                                  class="far fa-plus-square"
                                  onClick={this.toggle1}
                                ></i>
                              </div>
                            </MDBCollapse>
                          </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel">
                          <div className="proposal-container">
                            <div
                              className="proposal-img"
                              onClick={this.toggleCollapse("basicCollapse2")}
                            >
                              <span className="cubebox">
                                <i class="fab fa-codepen"></i>
                              </span>
                              <img
                                src={require("./image/refresh.jpg")}
                                alt=""
                              />
                            </div>
                            <MDBCollapse
                              id="basicCollapse2"
                              isOpen={this.state.collapseID}
                            >
                              <div className="droptoggle">
                                <p>Test interests</p>
                                <img
                                  src={require("./image/refresh.jpg")}
                                  alt=""
                                />
                              </div>
                              <div className="instest">
                                <i class="fab fa-codepen"></i>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Test insterest"
                                />
                              </div>
                              <div className="search-fillter">
                                <i class="fas fa-filter"></i>
                                <Multiselect
                                  options={plainArray}
                                  isObject={false}
                                />
                              </div>
                              <div className="add-proposal-post">
                                <i
                                  class="far fa-plus-square"
                                  onClick={this.toggle1}
                                ></i>
                              </div>
                            </MDBCollapse>
                          </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="3" role="tabpanel">
                          <div className="proposal-container">
                            <div
                              className="proposal-img"
                              onClick={this.toggleCollapse("basicCollapse3")}
                            >
                              <span className="cubebox">
                                <i class="fab fa-codepen"></i>
                              </span>
                              <img src={require("./image/mask.jpg")} alt="" />
                            </div>
                            <MDBCollapse
                              id="basicCollapse3"
                              isOpen={this.state.collapseID}
                            >
                              <div className="droptoggle">
                                <p>Test interests</p>
                                <img src={require("./image/mask.jpg")} alt="" />
                              </div>
                              <div className="instest">
                                <i class="fab fa-codepen"></i>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Test insterest"
                                />
                              </div>
                              <div className="search-fillter">
                                <i class="fas fa-filter"></i>
                                <Multiselect
                                  options={plainArray}
                                  isObject={false}
                                />
                              </div>
                              <div className="add-proposal-post">
                                <i
                                  class="far fa-plus-square"
                                  onClick={this.toggle1}
                                ></i>
                              </div>
                            </MDBCollapse>
                          </div>
                        </MDBTabPane>
                      </MDBTabContent>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </>
    );
  }
}
