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

export default function Contribution() {
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
                <h2 className="sub-title">Pixels</h2>
                <div className="subscrib-box">
                  <MDBRow>
                    <MDBCol md="6">
                      <h3 className="mb-3">Pixel Area</h3>
                      <div className="pixel-area mb-3">
                        <img src={require("./image/google.png")} alt="" />
                      </div>
                      {/* <div className="pixel-area mb-3">
            <Line
              data={this.state.dataLine}
              options={{ responsive: true }}
            />
          </div> */}
                    </MDBCol>
                    <MDBCol md="6">
                      <h3 className="mb-3">Linked Content</h3>

                      <div className="pixel-img">
                        <img src={require("./image/linked-box.png")} alt="" />
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
            </div>
          </MDBContainer>
        </div>
      </div>
    </>
  );
}
