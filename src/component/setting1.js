import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBCol,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBRow,
} from "mdbreact";
import NavbarUser from "../component/NavbarUser";
import Sidebar from "../component/Sidebar";

class TabsDefault extends Component {
  state = {
    activeItem: "1",
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    return (
      <>
        <NavbarUser />

        <div className="ibord">
          <Sidebar />

          <div className="view-post-m mt-3">
            <div>
              <MDBContainer>
                <MDBCol md="9">
                  <div className="mainBox">
                    <div>
                      <MDBIcon icon="cog" />
                      Setting
                    </div>
                    <hr style={{ borderWidth: 5, borderRadius: 2 }}></hr>

                    <MDBNav className="nav-tabs mt-5">
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          active={this.state.activeItem === "1"}
                          onClick={this.toggle("1")}
                          role="tab"
                        >
                          <MDBIcon icon="user" />
                          Profile
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
                          <MDBIcon icon="unlock-alt" />
                          Privacy
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
                          <MDBIcon icon="globe-americas" />
                          Account
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          active={this.state.activeItem === "4"}
                          onClick={this.toggle("4")}
                          role="tab"
                        >
                          <MDBIcon icon="envelope" />
                          News
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          active={this.state.activeItem === "5"}
                          onClick={this.toggle("5")}
                          role="tab"
                        >
                          <MDBIcon icon="road" />
                          Address
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          active={this.state.activeItem === "6"}
                          onClick={this.toggle("6")}
                          role="tab"
                        >
                          <MDBIcon icon="info" />
                          Support
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent activeItem={this.state.activeItem}>
                      <MDBTabPane tabId="1" role="tabpanel">
                        <div style={{ marginTop: 20 }}>
                          <h4>
                            <font color="#9bcc37">Profile information</font>
                          </h4>
                          <hr
                            style={{
                              borderWidth: 5,
                              borderRadius: 2,
                              borderColor: "#9bcc37",
                            }}
                          ></hr>
                        </div>
                        <div className="form-group input-for">
                          <label
                            htmlFor="formGroupExampleInput"
                            style={{ marginLeft: 10 }}
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            id="formGroupExampleInput"
                            placeholder="testname"
                          />
                        </div>

                        <div
                          className="form-group"
                         
                        >
                          <label
                            htmlFor="formGroupExampleInput"
                            style={{ marginLeft: 10 }}
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            id="formGroupExampleInput"
                            placeholder="testusername"
                          />
                        </div>

                        <div
                          className="form-group input-for"
                          style={{ marginTop: 30 }}
                        >
                          <label
                            htmlFor="formGroupExampleInput"
                            style={{ marginLeft: 10 }}
                          >
                            Website
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            id="formGroupExampleInput"
                            placeholder="testusername"
                          />
                        </div>

                        <div
                          className="form-group input-for"
                          style={{ marginTop: 30 }}
                        >
                          <label
                            htmlFor="formGroupExampleInput"
                            style={{ marginLeft: 10 }}
                          >
                            biography
                          </label>
                          <textarea
                            style={{ height: "100px", resize: "none" }}
                            className="form-control "
                            id="formGroupExampleInput"
                            placeholder="biography"
                          />
                        </div>

                        <div style={{ marginTop: 50 }}>
                          <h4>
                            <font color="#9bcc37">Finder information</font>
                          </h4>
                          <hr
                            style={{
                              borderWidth: 5,
                              borderRadius: 2,
                              borderColor: "#9bcc37",
                            }}
                          ></hr>
                        </div>

                        <div className="form-group input-for">
                          <label
                            htmlFor="formGroupExampleInput"
                            style={{ marginLeft: 10 }}
                          >
                            Workplace
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            id="formGroupExampleInput"
                            placeholder="biography"
                          />
                        </div>

                        <div className="form-group input-for">
                          <label
                            htmlFor="formGroupExampleInput"
                            style={{ marginLeft: 10 }}
                          >
                            Place of Recidence
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            id="formGroupExampleInput"
                            placeholder="biography"
                          />
                        </div>

                        <div style={{ marginTop: 50 }}>
                          <h4>
                            <font color="#9bcc37">Age Group</font>
                          </h4>
                          <hr
                            style={{
                              borderWidth: 5,
                              borderRadius: 2,
                              borderColor: "#9bcc37",
                            }}
                          ></hr>
                        </div>

                        <div style={{ marginTop: 50 }}>
                          <h4>
                            <font color="#9bcc37">Distance Limit</font>
                          </h4>
                        </div>

                        <div className="button-box">
                          <button
                            className="btn-send securedbtn"
                            style={{ width: 170 }}
                          >
                            Save
                          </button>
                        </div>
                      </MDBTabPane>
                      <MDBTabPane tabId="2" role="tabpanel">
                        <div style={{ margin: 20 }}>
                          <h4>
                            <font color="#9bcc37">Profile</font>
                          </h4>
                          <hr
                            style={{
                              borderWidth: 5,
                              borderRadius: 2,
                              borderColor: "#9bcc37",
                            }}
                          ></hr>

                          <div style={{ marginTop: 20 }}>
                            <p>
                              
                              Determine how your profile is visible to others.At
                              the same time you determine the basic setting for
                              your contributions.
                            </p>
                          </div>
                          <div className="form-group input-for">
                            {/* <input
                      type="text"
                      className="form-control "
                      id="formGroupExampleInput"
                      placeholder="public"
                    /> */}

                            <select
                              class="browser-default custom-select"
                              className="form-control "
                            >
                              <option selected="">Public</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>

                        <div style={{ margin: 20 }}>
                          <h4>
                            <font color="#9bcc37">Photos of You</font>
                          </h4>
                          <hr
                            style={{
                              borderWidth: 5,
                              borderRadius: 2,
                              borderColor: "#9bcc37",
                            }}
                          ></hr>

                          <div style={{ marginTop: 20 }}>
                            <p>
                              Determine how your profile is visible to others.At
                              the same time you determine the basic setting for
                              your contributions.
                            </p>
                          </div>
                          <div className="form-group input-for">
                            <select
                              class="browser-default custom-select"
                              className="form-control"
                            >
                              <option selected="">Add automatically</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>

                        <div className="button-box">
                          <button
                            className="btn-send securedbtn"
                            style={{ width: 170 }}
                          >
                            Save
                          </button>
                        </div>

                        <div style={{ margin: 20 }}>
                          <h4>
                            <font color="#9bcc37"> Blocked People</font>
                          </h4>
                          <hr
                            style={{
                              borderWidth: 5,
                              borderRadius: 2,
                              borderColor: "#9bcc37",
                            }}
                          ></hr>

                          <p>You have not blocked a user yet</p>
                        </div>
                      </MDBTabPane>
                      <MDBTabPane tabId="3" role="tabpanel">
                        <div style={{ margin: 20 }}>
                          <h4>
                            <font color="#9bcc37">Private information</font>
                            <hr
                              style={{
                                borderWidth: 5,
                                borderRadius: 2,
                                borderColor: "#9bcc37",
                              }}
                            ></hr>
                          </h4>

                          <div
                            className="form-group input-for"
                            style={{ marginTop: 40 }}
                          >
                            <label htmlFor="formGroupExampleInput">Email</label>
                            <input
                              type="text"
                              className="form-control "
                              id="formGroupExampleInput"
                              placeholder="testmail@tookone.de"
                            />
                          </div>

                          <div
                            className="form-group input-for"
                            style={{ marginTop: 40 }}
                          >
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

                          <div
                            className="form-group input-for"
                            style={{ marginTop: 40 }}
                          >
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

                          <div className="button-box">
                            <button
                              className="btn-send securedbtn"
                              style={{ width: 170 }}
                            >
                              Save
                            </button>
                          </div>

                          <div style={{ marginTop: 30 }}>
                            <h4>
                              <font color="#9bcc37">Deactivate account</font>
                              <hr
                                style={{
                                  borderWidth: 5,
                                  borderRadius: 2,
                                  borderColor: "#9bcc37",
                                }}
                              ></hr>
                            </h4>
                            <p>
                              If you deactivate your account , you will no
                              longer be visible on tookone. You have time to
                              reconsider your decision within the next 6
                              months.After 6 months , all of your information
                              will be irrevocably deleted . If you want to
                              reactivate your account,simply log in again within
                              the next 6 months.
                            </p>

                            <div className="button-box">
                              <button className="btn-account-save">
                                Deactivate
                              </button>
                            </div>
                          </div>

                          <div style={{ marginTop: 30 }}>
                            <h4>
                              <font color="#9bcc37">Delete account</font>
                              <hr
                                style={{
                                  borderWidth: 5,
                                  borderRadius: 2,
                                  borderColor: "#9bcc37",
                                }}
                              ></hr>
                            </h4>
                            <p>
                              If you delete your account , you will no longer be
                              visible on tookone.All information about you and
                              your activities will be irrevocably deleted.
                            </p>

                            <div className="button-box">
                              <button className="btn-account-save">
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </MDBTabPane>

                      <MDBTabPane tabId="4" role="tabpanel">
                        <div style={{ marginTop: 50 }}>
                          <h4>
                            <font color="#9bcc37">Read Receipts</font>
                          </h4>
                          <hr
                            style={{
                              borderWidth: 5,
                              borderRadius: 2,
                              borderColor: "#9bcc37",
                            }}
                          ></hr>

                          <div style={{ marginTop: 20 }}>
                            <p>
                              Determine who Can see your "last Online" status.
                              Note: If you don't show your status,you won't be
                              able to see read receipts from others.
                            </p>
                          </div>
                          <div className="form-group input-for">
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

                          <div style={{ marginTop: 50 }}>
                            <h4>
                              <font color="#9bcc37">Last Online</font>
                            </h4>
                            <hr
                              style={{
                                borderWidth: 5,
                                borderRadius: 2,
                                borderColor: "#9bcc37",
                              }}
                            ></hr>

                            <div style={{ marginTop: 20 }}>
                              <p>
                                Determine how your profile is visible to
                                others.At the same time you determine the basic
                                setting for your contributions.
                              </p>
                            </div>
                            <div className="form-group input-for">
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

                          <div style={{ marginTop: 50 }}>
                            <h4>
                              <font color="#9bcc37">Newsletter</font>
                            </h4>
                            <hr
                              style={{
                                borderWidth: 5,
                                borderRadius: 2,
                                borderColor: "#9bcc37",
                              }}
                            ></hr>

                            <div style={{ marginTop: 20 }}>
                              <p>
                                Determine how your profile is visible to
                                others.At the same time you determine the basic
                                setting for your contributions.
                              </p>
                            </div>
                            <div className="form-group input-for">
                              <select
                                class="browser-default custom-select"
                                className="form-control"
                              >
                                <option selected="">Inactive</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>

                          <div className="button-box">
                            <button
                              className="btn-send securedbtn"
                              style={{ width: 170 }}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </MDBTabPane>

                      <MDBTabPane tabId="5" role="tabpanel">
                        <div style={{ marginTop: 50 }}>
                          <h4>
                            <font color="#9bcc37">Address info</font>
                          </h4>
                          <div className="button-box">
                            <h4>
                              {" "}
                              <MDBIcon
                                style={{ color: "#9bcc37" }}
                                icon="plus"
                              />
                            </h4>
                          </div>
                          <hr
                            style={{
                              borderWidth: 5,
                              borderRadius: 2,
                              borderColor: "#9bcc37",
                            }}
                          ></hr>
                        </div>

                        <div style={{ marginTop: 50 }}>
                          <div style={{ textAlign: "center" }}>
                            <p> Yoy have not added any interests yet! </p>
                            <h3>
                              {" "}
                              <MDBIcon
                                style={{ color: "#9bcc37" }}
                                icon="plus"
                              />
                            </h3>
                          </div>
                        </div>

                        <div style={{ marginTop: 70 }}>
                          <h4>
                            <font color="#9bcc37">Invoice info</font>
                          </h4>
                          <hr
                            style={{
                              borderWidth: 5,
                              borderRadius: 2,
                              borderColor: "#9bcc37",
                            }}
                          ></hr>
                        </div>

                        <div className="view-post-m mt-3">
                          <div className="mainBox">
                            Rechnung Nummer 65655343
                            <p>
                              12.12.2020
                              <br />
                              3456,00
                            </p>
                            <div style={{ marginLeft: "40%" }}>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <div
                                  className="button-box"
                                  style={{ marginRight: 20 }}
                                >
                                  <button
                                    className="btn-send securedbtn"
                                    style={{ width: 170 }}
                                  >
                                    <MDBIcon icon="download" />
                                    Download
                                  </button>
                                </div>

                                <div className="button-box">
                                  <button
                                    className="btn-send securedbtn"
                                    style={{
                                      width: 170,
                                      backgroundColor: "#00a8ff",
                                    }}
                                  >
                                    <MDBIcon icon="share-square" />
                                    Show
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="view-post-m mt-3">
                          <div className="mainBox">
                            Rechnung Nummer 65655343
                            <p>
                              12.12.2020
                              <br />
                              3456,00
                            </p>
                            <div style={{ marginLeft: "40%" }}>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <div
                                  className="button-box"
                                  style={{ marginRight: 20 }}
                                >
                                  <button
                                    className="btn-send securedbtn"
                                    style={{ width: 170 }}
                                  >
                                    <MDBIcon icon="download" />
                                    Download
                                  </button>
                                </div>

                                <div className="button-box">
                                  <button
                                    className="btn-send securedbtn"
                                    style={{
                                      width: 170,
                                      backgroundColor: "#00a8ff",
                                    }}
                                  >
                                    <MDBIcon icon="share-square" />
                                    Show
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </MDBTabPane>

                      <MDBTabPane tabId="6" role="tabpanel">
                        <div style={{ marginTop: 50 }}>
                          <h4>
                            <font color="#9bcc37">Support</font>
                          </h4>
                          <hr
                            style={{
                              borderWidth: 5,
                              borderRadius: 2,
                              borderColor: "#9bcc37",
                            }}
                          ></hr>
                        </div>

                        <MDBRow style={{ marginTop: 80 }}>
                          <MDBCol md="6">
                            <div>
                              <h4>
                                <font color="#9bcc37">Tickets</font>
                              </h4>
                              <hr
                                style={{
                                  borderWidth: 5,
                                  borderRadius: 2,
                                  borderColor: "#9bcc37",
                                }}
                              ></hr>
                              <div style={{ marginTop: 20 }}>
                                <p>
                                  Here you can see an overview of the support
                                  here request that you have communicated to us.
                                </p>
                              </div>
                            </div>
                          </MDBCol>

                          <MDBCol md="6">
                            <div>
                              <h4>
                                <font color="#9bcc37">Functional Request</font>
                              </h4>
                              <hr
                                style={{
                                  borderWidth: 5,
                                  borderRadius: 2,
                                  borderColor: "#9bcc37",
                                }}
                              ></hr>
                              <div style={{ marginTop: 20 }}>
                                <p>
                                  Here you can see an overview of the support
                                  here request that you have communicated to us.
                                </p>
                              </div>
                            </div>
                          </MDBCol>
                        </MDBRow>

                        <MDBRow style={{ marginTop: 100 }}>
                          <MDBCol md="6">
                            <div>
                              <h4>
                                <font color="#9bcc37">Reported Post</font>
                              </h4>
                              <hr
                                style={{
                                  borderWidth: 5,
                                  borderRadius: 2,
                                  borderColor: "#9bcc37",
                                }}
                              ></hr>
                            </div>
                          </MDBCol>
                        </MDBRow>

                        <div>
                          <p> Here you can find the posts you have reported </p>
                        </div>

                        <hr style={{ borderWidth: 5, borderRadius: 2 }}></hr>

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
                                  <li> image </li>
                                  <li> Reason why reported </li>
                                  <li> 04/12/2019 </li>
                                  <li> Response / message from tookone </li>
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
                                  <li> Response / message from tookone </li>
                                </ul>
                              </MDBCol>
                            </MDBRow>
                          </div>
                        </div>
                      </MDBTabPane>
                    </MDBTabContent>
                  </div>
                </MDBCol>
              </MDBContainer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TabsDefault;
