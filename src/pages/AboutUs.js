import React, { Component } from "react";
import { MDBContainer, MDBBox, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import HeaderVisitor from "../component/HeaderVisitor";
export default class AboutUs extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <HeaderVisitor />
        <MDBBox className="banner-div">
          <MDBContainer>
            <MDBBox tag="h4">Companies</MDBBox>
            <MDBBox tag="p">
              People who are crazy enough to think they can change the world are
              the ones who will. Steve Jobs
            </MDBBox>
          </MDBContainer>
        </MDBBox>
        <MDBBox className="digital-revolution">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <img
                  src={require("../component/image/digital-revolution.png")}
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBBox tag="h3">We believe in the digital revolution</MDBBox>
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
            </MDBRow>
          </MDBContainer>
        </MDBBox>

        <MDBBox className="bussiness-develop text-center">
          <MDBBox tag="h4">
            We are always on the lookout!<MDBBox tag="span"> developer</MDBBox>
          </MDBBox>
          <MDBBox tag="p">
            Would to like to work in an innovative company?
          </MDBBox>
          <MDBRow>
            <MDBCol md="6" className="offset-md-3 business-inputs text-center">
              {/* <MDBBox className="business-btn"> */}

              <MDBBtn className="main-btn">Career</MDBBtn>
              {/* </MDBBox> */}
            </MDBCol>
          </MDBRow>
        </MDBBox>
       
      </div>
    );
  }
}
