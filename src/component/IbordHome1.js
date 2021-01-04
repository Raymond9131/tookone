// @ts-nocheck
/* eslint-disable */
import React, { Component } from "react";
import NavbarUser from "../component/NavbarUser";
import Sidebar from "../component/Sidebar";
import "../Modalpop.css";
import {
  MDBIcon,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalBody,
} from "mdbreact";
import { Link } from "react-router-dom";
export default class IbordHome extends Component {
  constructor() {
    super();
    this.state = {
      showMe: false,
    };
  }
  operation() {
    this.setState({
      showMe: !this.state.showMe,
    });
  }

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
                    <MDBNavLink to="/Subscribers">
                      <span>15</span>
                      Contributions
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/Subscribers">
                      <span>7</span>
                      Subscribers
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/Subscribers" className="active">
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
                          <div
                            id="progress"
                            data="90"
                            className="avatar-container"
                          >
                            <img
                              src={require("./image/10-min.jpg")}
                              alt="image1"
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
                <div className="ibord-post">
                  <MDBRow>
                    <MDBCol md="5">
                      <ul className="radio-box">
                        <li className="radio">
                          <input id="radio-1" name="radio" type="radio" />
                          <label htmlFor="radio-1" class="radio-label">
                            Hidden Post
                          </label>
                        </li>
                        <li className="radio">
                          <input id="radio-2" name="radio" type="radio" />
                          <label htmlFor="radio-2" class="radio-label">
                            Unfinished Post
                          </label>
                        </li>
                      </ul>
                    </MDBCol>
                    <MDBCol md="7">
                      <ul className="ibord-lists">
                        <li>
                          <Link to="/">
                            <MDBIcon icon="edit" />
                            All
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <MDBIcon icon="camera" />
                            Images
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <MDBIcon icon="video" />
                            Videos
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <MDBIcon icon="music" />
                            Audio
                          </Link>
                        </li>

                        <li>
                          <Link to="/">
                            <MDBIcon icon="text-height" />
                            Text
                          </Link>
                        </li>
                        <li>
                          <Link onClick={() => this.operation()}>
                            <MDBIcon icon="ellipsis-v" />
                            Sort
                          </Link>
                          {this.state.showMe ? (
                            <div
                              className="short-list"
                              onClick={() => this.setState({ showMe: false })}
                            >
                              <ul>
                                <li>
                                  <Link to="#">Top Post </Link>
                                </li>
                                <li>
                                  <Link to="#">New Post </Link>
                                </li>
                                <li>
                                  <Link to="#">Most of the comments </Link>
                                </li>
                              </ul>
                            </div>
                          ) : null}
                        </li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
                </div>
                <div className="unfinished">
                  <h2>Unfinished Post</h2>
                  <div className="grid">
                    <ul className="grid-list">
                      <li>
                        <Link to="/ibord-home">
                          <MDBIcon icon="th" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/grid-list">
                          <MDBIcon icon="list" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <MDBIcon icon="eye-slash" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="ibord-post-box">
                    <MDBRow className="no-gutters">
                      <MDBCol md="4">
                        <div className="post-shadow">
                          <Link to="/" className="iconbox">
                            <MDBIcon icon="images" />
                          </Link>
                          <img src={require("./image/i-post.png")} alt="" />
                          <div className="huiye">
                            <h4>
                              <MDBIcon icon="camera" />
                              Photo
                              <br />
                              <small>1 hours Ago</small>
                            </h4>
                            <ul>
                              <li>
                                <MDBIcon icon="home" />
                                Berlin
                              </li>
                              <li>
                                <MDBIcon icon="map-marker-alt" />
                                50 KM Deffrent
                              </li>
                            </ul>
                          </div>
                        </div>
                      </MDBCol>
                      <MDBCol md="4">
                        <div className="post-shadow">
                          <Link to="/" className="iconbox">
                            <MDBIcon icon="video" />
                          </Link>
                          <img src={require("./image/i-post-2.png")} alt="" />
                          <div className="huiye">
                            <h4>
                              <MDBIcon icon="video" />
                              Videos
                              <br />
                              <small>1 hours Ago</small>
                            </h4>
                            <ul>
                              <li>
                                <MDBIcon icon="home" />
                                Berlin
                              </li>
                              <li>
                                <MDBIcon icon="map-marker-alt" />
                                50 KM Deffrent
                              </li>
                            </ul>
                          </div>
                        </div>
                      </MDBCol>

                      <MDBCol md="4">
                        <div className="post-shadow">
                          <Link to="/" className="iconbox">
                            <MDBIcon icon="music" />
                          </Link>
                          <img src={require("./image/i-post-5.png")} alt="" />
                          <div className="huiye">
                            <h4>
                              <MDBIcon icon="music" /> Music
                              <br />
                              <small>1 hours Ago</small>
                            </h4>
                            <ul>
                              <li>
                                <MDBIcon icon="home" />
                                Berlin
                              </li>
                              <li>
                                <MDBIcon icon="map-marker-alt" />
                                50 KM Deffrent
                              </li>
                            </ul>
                          </div>
                        </div>
                      </MDBCol>
                      <MDBCol md="4">
                        <div className="post-shadow">
                          <Link to="/" className="iconbox">
                            <MDBIcon icon="images" />
                          </Link>
                          <img src={require("./image/i-post-3.png")} alt="" />
                          <div className="huiye">
                            <h4>
                              <MDBIcon icon="camera" /> Photo
                              <br />
                              <small>1 hours Ago</small>
                            </h4>
                            <ul>
                              <li>
                                <MDBIcon icon="home" />
                                Berlin
                              </li>
                              <li>
                                <MDBIcon icon="map-marker-alt" />
                                50 KM Deffrent
                              </li>
                            </ul>
                          </div>
                        </div>
                      </MDBCol>

                      <MDBCol md="4">
                        <div className="post-shadow">
                          <Link to="/" className="iconbox">
                            <MDBIcon icon="video" />
                          </Link>
                          <img src={require("./image/i-post-4.png")} alt="" />
                          <div className="huiye">
                            <h4>
                              <MDBIcon icon="video" />
                              Videos
                              <br />
                              <small>1 hours Ago</small>
                            </h4>
                            <ul>
                              <li>
                                <MDBIcon icon="home" />
                                Berlin
                              </li>
                              <li>
                                <MDBIcon icon="map-marker-alt" />
                                50 KM Deffrent
                              </li>
                            </ul>
                          </div>
                        </div>
                      </MDBCol>

                      <MDBCol md="4">
                        <div className="post-shadow">
                          <Link to="/" className="iconbox">
                            <MDBIcon far icon="file-excel" />
                          </Link>
                          <img src={require("./image/i-post-6.png")} alt="" />
                          <div className="huiye">
                            <div className="annual_btn">
                              <span>
                                <MDBIcon far icon="file-excel" />
                                Annual Report
                              </span>
                              <span>
                                <MDBIcon far icon="arrow-alt-circle-down" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </div>
                </div>
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
