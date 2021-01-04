import React, { Component } from "react";
import {
  MDBContainer,
  MDBBox,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdbreact";
import HeaderVisitor from "../component/HeaderVisitor";


export default class Investment extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <HeaderVisitor />
        <MDBBox className="contact-detail-div">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <MDBBox tag="h2">Invest in a billion dollar market</MDBBox>

                <MDBBox tag="p">
                  Our business idea arose on the background of the professional
                  career of the management team. We worked as project managers
                  in a wide variety of companies and were made aware of various
                  problems by managers.
                </MDBBox>
                <MDBBox tag="p">
                  For this reason, we have been dealing intensively with this
                  topic for several years in order to solve the problems in a
                  goal-oriented and particularly future-oriented manner. We know
                  the environment and the requirements very well and have
                  extensive experience, sound training and excellent contacts in
                  the industry.
                </MDBBox>
                <MDBBox tag="p">
                  With our innovative, intelligent and novel system for data
                  communication, we will solve all the problems and at the same
                  time bring about "something useful for people and companies".
                  This includes individuality, flexibility and, above all,
                  security.
                </MDBBox>
                <MDBBox tag="p">
                  Everyone has very individual requirements. That is why the
                  things that surround us should be 100% individual and 100%
                  adapted to needs.
                </MDBBox>
              </MDBCol>
              <MDBCol md="6">
                <img src={require("../component/image/investment-img.png")} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBBox>
        <MDBBox className="investment-banner">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6" className="offset-md-3">
                <MDBBox tag="h3" className="text-center">
                  Are you interested in an attractive return would you like to
                  become
                  <MDBBox tag="h4" className="coloring-invest">
                    {" "}
                    Part of tookone?
                  </MDBBox>
                </MDBBox>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBBox>
        <MDBBox className="particitpation-process">
          <MDBBox className="main-title-process">
            <MDBBox tag="h2">Participation process</MDBBox>
          </MDBBox>
          <MDBContainer>
            <MDBBox>
              <ol class="list-inline text-center step-indicator">
                <li class="complete">
                  <div class="step"></div>
                  <div class="caption hidden-xs hidden-sm">Step 1</div>
                </li>
                <li class="complete">
                  <div class="step"></div>
                  <div class="caption hidden-xs hidden-sm">Step 2</div>
                </li>
                <li class="complete">
                  <div class="step"></div>
                  <div class="caption hidden-xs hidden-sm">Step 3</div>
                </li>
                <li class="complete">
                  <div class="step"></div>
                  <div class="caption hidden-xs hidden-sm">Step 4</div>
                </li>
              </ol>
            </MDBBox>
            <MDBBox className="investment-opportunity">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12" className="mb-20">
                    <MDBBox tag="h2" className="text-center">
                      Are you looking for a
                      <MDBBox tag="span"> higher investment opportunity</MDBBox>
                    </MDBBox>
                    <MDBBox tag="p" className="mt-20">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem.
                    </MDBBox>
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBBox className="participation-div">
                      <MDBBox tag="h4">
                        Participation from 12 million euros
                      </MDBBox>
                      <MDBBox tag="p">
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
                        takimata sanctus est Lorem.
                      </MDBBox>
                    </MDBBox>
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBBox className="participation-div mb-40">
                      <MDBBox tag="h4">
                        Participation from 12 million euros
                      </MDBBox>
                      <MDBBox tag="p">
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
                        takimata sanctus est Lorem.
                      </MDBBox>
                    </MDBBox>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBBox>
          </MDBContainer>
        </MDBBox>
        <MDBBox className="contact-form">
          <MDBContainer>
            <MDBBox>
              <MDBRow>
                <MDBCol md="12">
                  <MDBBox tag="h2" className="text-center">
                    Non Binding investment requrest
                  </MDBBox>
                  <MDBBox tag="p" className="mb-5">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos e ubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </MDBBox>
                </MDBCol>
                <MDBCol md="6">
                  <form>
                    <input
                      type="text"
                      id="defaultFormContactNameEx"
                      placeholder="Your Name"
                      className="form-control"
                    />
                    <br />
                    <input
                      type="email"
                      id="defaultFormContactEmailEx"
                      placeholder="Your Eamil"
                      className="form-control"
                    />
                    <br />
                    <input
                      type="text"
                      id="defaultFormContactSubjectEx"
                      placeholder="Your Phone number"
                      className="form-control"
                    />
                    <br />
                    <label htmlFor="defaultFormContactMessageEx">
                      Write a note for us, and will make the best demo for your
                      business.
                    </label>
                    <textarea
                      type="text"
                      id="defaultFormContactMessageEx"
                      placeholder="Message"
                      className="form-control"
                      rows="3"
                    />
                    <div className="text-center mt-4">
                      <MDBBtn className="warning-btn btn-block" type="submit">
                        Submit
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
                <MDBCol md="6">
                  <MDBBox tag="h2">Curious?</MDBBox>
                  <MDBBox tag="p">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos e ubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </MDBBox>
                </MDBCol>
              </MDBRow>
            </MDBBox>
          </MDBContainer>
        </MDBBox>
      </div>
    );
  }
}
