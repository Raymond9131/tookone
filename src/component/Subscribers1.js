import React, { Component } from "react";
import NavbarUser from "./NavbarUser";
import Sidebar from "./Sidebar";
import { Line } from "react-chartjs-2";
import "../Modalpop.css";
import {
  MDBIcon,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalBody,
} from "mdbreact";
export default class Subscribers extends Component {
  state = {
    activeItem: "2",
    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    },
  };
  toggle1 = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  toggle2 = () => {
    this.setState({
      modal2: !this.state.modal2,
    });
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
          <div className="cover-bg">
            <div className="sc-tabs">
              <div className="center-tabs">
                <MDBNav className="">
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to="#"
                      active={this.state.activeItem === "1"}
                      onClick={this.toggle("1")}
                      role="tab"
                    >
                      <span>15</span>
                      Contributions
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
                      <span>7</span>
                      Subscribers
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
                      <span>0</span>
                      Subscribed
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </div>
              <MDBContainer>
                <div className="profile-box">
                  <MDBRow>
                    <MDBCol md="5">
                      <div className="profile-div">
                        <div className="profile-pic">
                          <div id="progress" data="90" class="avatar-container">
                            <img
                              src={require("./image/10-min.jpg")}
                              alt=""
                              class="avatar"
                            />
                          </div>
                          <span className="icon-edit" onClick={this.toggle2}>
                            <MDBIcon icon="edit" />
                          </span>
                        </div>
                        <div className="profile-title">
                          <h2>Howard Pinsky</h2>
                          <p>Team Name</p>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol md="7">
                      <div className="editright">
                        <span className="icon-edit-box">
                          <MDBIcon icon="edit" />
                        </span>
                      </div>
                      <div className="profile-bio">
                        <h2>Bio </h2>
                        <p>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Nihil odit magnam minima, soluta doloribus
                            reiciendis molestiae placeat unde eos molestias.
                            Quisquam aperiam, pariatur. Tempora, placeat ratione
                          </span>
                          <img src={require("./image/svg.png")} alt="" />
                        </p>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBContainer>
              <div className="cover-photo" onClick={this.toggle1}>
                Change Cover <MDBIcon icon="edit" />
              </div>
            </div>
          </div>
          <div className="content-main top-postion">
            <MDBContainer>
              <div className="tabs-bio">
                <MDBTabContent activeItem={this.state.activeItem}>
                  <MDBTabPane tabId="1" role="tabpanel">
                    <div className="tabs-subsc">
                      <h2 className="sub-title">Pixels</h2>
                      <div className="subscrib-box">
                        <MDBRow>
                          <MDBCol md="6">
                            <h3 className="mb-3">Pixel Area</h3>
                            <div className="pixel-area mb-3">
                              <img src={require("./image/google.png")} alt="" />
                            </div>
                            <div className="pixel-area mb-3">
                              <Line
                                data={this.state.dataLine}
                                options={{ responsive: true }}
                              />
                            </div>
                          </MDBCol>
                          <MDBCol md="6">
                            <h3 className="mb-3">Linked Content</h3>

                            <div className="pixel-img">
                              <img
                                src={require("./image/linked-box.png")}
                                alt=""
                              />
                              <div className="huiye">
                                <h4>Huiye 23</h4>
                                <ul>
                                  <li>
                                    <MDBIcon icon="home" />
                                    Berlin
                                  </li>
                                  <li>
                                    <MDBIcon icon="map-marker-alt" />
                                    50 KM Deffrent
                                    <span className="helpbox">
                                      <MDBIcon icon="info-circle" />
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </div>
                  </MDBTabPane>
                  <MDBTabPane tabId="2" role="tabpanel">
                    <div className="tabs-subsc">
                      <h2 className="sub-title">Subscribers</h2>
                      <div className="subscrib-box">
                        <MDBRow>
                          <MDBCol md="5">
                            <div className="profile-div">
                              <div className="profile-pic">
                                <div
                                  id="progress"
                                  data="90"
                                  class="avatar-container"
                                >
                                  <img
                                    src={require("./image/10-min.jpg")}
                                    alt=""
                                    class="avatar"
                                  />
                                </div>
                              </div>
                              <div className="profile-title">
                                <h2>Howard Pinsky</h2>
                                <p>Team Name</p>
                              </div>
                            </div>
                          </MDBCol>
                        </MDBRow>

                        <MDBRow className="mt-5">
                          <MDBCol md="5">
                            <div className="profile-div">
                              <div className="profile-pic">
                                <div
                                  id="progress"
                                  data="90"
                                  class="avatar-container"
                                >
                                  <img
                                    src={require("./image/mask.jpg")}
                                    alt=""
                                    class="avatar"
                                  />
                                </div>
                              </div>
                              <div className="profile-title">
                                <h2>Howard Pinsky</h2>
                                <p>Team Name</p>
                              </div>
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-5">
                          <MDBCol md="5">
                            <div className="profile-div">
                              <div className="profile-pic">
                                <div
                                  id="progress"
                                  data="90"
                                  class="avatar-container"
                                >
                                  <img
                                    src={require("./image/10-min.jpg")}
                                    alt=""
                                    class="avatar"
                                  />
                                </div>
                              </div>
                              <div className="profile-title">
                                <h2>Howard Pinsky</h2>
                                <p>Team Name</p>
                              </div>
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </div>
                  </MDBTabPane>
                  <MDBTabPane tabId="3" role="tabpanel">
                    <div className="tabs-subsc">
                      <h2 className="sub-title">Subscribed</h2>
                      <div className="subscrib-box">
                        <MDBRow>
                          <MDBCol md="5">
                            <div className="profile-div">
                              <div className="profile-pic">
                                <div
                                  id="progress"
                                  data="90"
                                  class="avatar-container"
                                >
                                  <img
                                    src={require("./image/10-min.jpg")}
                                    alt=""
                                    class="avatar"
                                  />
                                </div>
                              </div>
                              <div className="profile-title">
                                <h2>Howard Pinsky</h2>
                                <p>Team Name</p>
                              </div>
                            </div>
                          </MDBCol>
                        </MDBRow>

                        <MDBRow className="mt-5">
                          <MDBCol md="5">
                            <div className="profile-div">
                              <div className="profile-pic">
                                <div
                                  id="progress"
                                  data="90"
                                  class="avatar-container"
                                >
                                  <img
                                    src={require("./image/mask.jpg")}
                                    alt=""
                                    class="avatar"
                                  />
                                </div>
                              </div>
                              <div className="profile-title">
                                <h2>Howard Pinsky</h2>
                                <p>Team Name</p>
                              </div>
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-5">
                          <MDBCol md="5">
                            <div className="profile-div">
                              <div className="profile-pic">
                                <div
                                  id="progress"
                                  data="90"
                                  class="avatar-container"
                                >
                                  <img
                                    src={require("./image/10-min.jpg")}
                                    alt=""
                                    class="avatar"
                                  />
                                </div>
                              </div>
                              <div className="profile-title">
                                <h2>Howard Pinsky</h2>
                                <p>Team Name</p>
                              </div>
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </div>
                  </MDBTabPane>
                </MDBTabContent>
              </div>
            </MDBContainer>
          </div>
        </div>
        <MDBModal
          className="profile-modal"
          isOpen={this.state.modal}
          toggle={this.toggle1}
        >
          <MDBModalBody>
            <div className="proposal-file">
              <div className="form-group">
                <label>Change cover picture</label>
                <input type="file" className="input-green" />
              </div>

              <div className="form-group">
                <label>Upload</label>
                <input type="file" className="input-green" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut.
              </p>
              <div className="form-group">
                <div className="add-modal-box">
                  <i className="fa fa-plus"></i>
                </div>
              </div>

              <div className="form-group img-postive">
                <img src={require("./image/upload-img.jpg")} alt="" />
                <div className="ul-div">
                  <ul>
                    <li>
                      <i className="fa fa-plus-circle"></i> Vorschuau
                    </li>
                    <li>
                      <i className="fas fa-edit"></i> Bearbeiten
                    </li>
                    <li>
                      <i className="fas fa-futbol"></i> Deac
                    </li>
                    <li>
                      <i class="fas fa-trash-alt"></i> Delete
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </MDBModalBody>
        </MDBModal>

        <MDBModal
          className="profile-modal"
          isOpen={this.state.modal2}
          toggle={this.toggle2}
        >
          <MDBModalBody>
            <div className="proposal-file">
              <div className="form-group">
                <label>Change Profile picture</label>
                <input type="file" className="input-green" />
              </div>

              <div className="form-group">
                <label>Upload</label>
                <input type="file" className="input-green" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut.
              </p>
              <div className="form-group">
                <div className="add-modal-box">
                  <i className="fa fa-plus"></i>
                </div>
              </div>

              <div className="form-group img-postive">
                <img src={require("./image/upload-img.jpg")} alt="" />
                <span className="ellipsis">
                  <i class="fas fa-ellipsis-v"></i>
                </span>
                <div className="ul-div">
                  <ul>
                    <li>
                      <i className="fa fa-plus-circle"></i> Vorschuau
                    </li>
                    <li>
                      <i className="fas fa-edit"></i> Bearbeiten
                    </li>
                    <li>
                      <i className="fas fa-futbol"></i> Deac
                    </li>
                    <li>
                      <i class="fas fa-trash-alt"></i> Delete
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </MDBModalBody>
          {/* <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle1}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter> */}
        </MDBModal>
      </>
    );
  }
}
