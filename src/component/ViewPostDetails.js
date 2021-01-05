import React, { Component } from "react";
import NavbarUser from "../component/NavbarUser";
import { MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdbreact";
import Sidebar from "../component/Sidebar";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
export default function ViewPostDetails() {
  return (
    <>
      <NavbarUser />

      <div className="ibord ">
        <Sidebar />
        <div className="view-post-m mt-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="8">
                <div className="tabs-bio">
                  <div className="view-post-main">
                    <div className="post-shadow grid-list-box mb-3">
                      <img src={require("./image/grid-list.jpg")} alt="" />
                    </div>

                    <div className="post-avatar mb-2 border-bottom pb-2">
                      <div className="leftside-av">
                        <div className="avatar-name">
                          <img
                            src={require("./image/i-post.png")}
                            className="user-online"
                            alt=""
                          />
                        </div>
                        <div className="avatar-text">
                          <h4>Toon</h4>
                          <ul>
                            <li>50 min</li>
                            <li>
                              <MDBIcon far icon="eye" />
                            </li>
                            <li>
                              <MDBIcon icon="map-marker-alt" />
                            </li>
                            <li>Berlin</li>
                          </ul>
                        </div>
                      </div>
                      <div className="view-dlist">
                        <ul>
                          <li className="green-color">
                            <MDBIcon icon="angle-up" />
                            <span>0</span>
                          </li>
                          <li>
                            <MDBIcon icon="angle-down" />
                          </li>
                          <li className="plane">
                            <MDBIcon icon="paper-plane" />
                          </li>
                          <li>
                            <MDBIcon icon="comment" className="green-color" />
                            <span>456</span>
                          </li>
                        </ul>
                        <ul className="text-right">
                          <li>
                            <MDBIcon icon="eye" />
                            <span>1000</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="view-des">
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus.
                      </p>
                    </div>
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="4">
                <div className="recent-post mb-3">
                  <MDBRow>
                    <MDBCol md="6" className="pr-0">
                      <div className="left-postv">
                        <img src={require("./image/grid-list.jpg")} alt="" />
                        <div className="divpo">
                          <MDBIcon icon="music" />

                          <AudioPlayer
                            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                            // Try other props!
                          />
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="pr-0">
                      <div className="text-url">
                        <h3>www.world.com</h3>
                        <ul>
                          <li>50 Min</li>
                          <li>
                            <i class="fas fa-globe"></i>
                          </li>
                          <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Berlin</span>
                          </li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>

                <div className="recent-post mb-3">
                  <MDBRow>
                    <MDBCol md="6" className="pr-0">
                      <div className="left-postv">
                        <img src={require("./image/grid-list.jpg")} alt="" />
                        <div className="divpo">
                          <MDBIcon icon="music" />

                          <AudioPlayer
                            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                            // Try other props!
                          />
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="pr-0">
                      <div className="text-url">
                        <h3>www.world.com</h3>
                        <ul>
                          <li>50 Min</li>
                          <li>
                            <i class="fas fa-globe"></i>
                          </li>
                          <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Berlin</span>
                          </li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>

                <div className="recent-post mb-3">
                  <MDBRow>
                    <MDBCol md="6" className="pr-0">
                      <div className="left-postv">
                        <img src={require("./image/grid-list.jpg")} alt="" />
                        <div className="divpo">
                          <MDBIcon icon="music" />

                          <AudioPlayer
                            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                            // Try other props!
                          />
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="pr-0">
                      <div className="text-url">
                        <h3>www.world.com</h3>
                        <ul>
                          <li>50 Min</li>
                          <li>
                            <i class="fas fa-globe"></i>
                          </li>
                          <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Berlin</span>
                          </li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>

                <div className="recent-post mb-3">
                  <MDBRow>
                    <MDBCol md="6" className="pr-0">
                      <div className="left-postv">
                        <img src={require("./image/grid-list.jpg")} alt="" />
                        <div className="divpo">
                          <MDBIcon icon="music" />

                          <AudioPlayer
                            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                            // Try other props!
                          />
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="pr-0">
                      <div className="text-url">
                        <h3>www.world.com</h3>
                        <ul>
                          <li>50 Min</li>
                          <li>
                            <i class="fas fa-globe"></i>
                          </li>
                          <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Berlin</span>
                          </li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </>
  );
}
