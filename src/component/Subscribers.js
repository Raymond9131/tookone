import React, { Component } from "react";
import NavbarUser from "../component/NavbarUser";
import Sidebar from "../component/Sidebar";

import All from "../component/All";
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

export default function Subscribers() {
  return (
    <>
      <NavbarUser />

      <div className="ibord">
        <Sidebar />
        <All />
        <div className="content-main top-postion">
          <MDBContainer>
            <div className="tabs-bio">
              <div className="tabs-subsc">
                <h2 className="sub-title">Subscribers</h2>
                <div className="subscrib-box">
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
                          <div id="progress" data="90" class="avatar-container">
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
                          <div id="progress" data="90" class="avatar-container">
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
            </div>
          </MDBContainer>
        </div>
      </div>
    </>
  );
}
