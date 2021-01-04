import React, { Component } from "react";
import {
  MDBContainer,
  MDBBox,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdbreact";
import HeaderVisitor from "../component/HeaderVisitor";


export default class ContactUs extends Component {
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
                <MDBBox tag="h2">Contact Us</MDBBox>
                <MDBBox tag="h6">We took forword to your enquiries</MDBBox>
                <MDBBox tag="p">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem.
                </MDBBox>
                <MDBListGroup className="contact-list">
                  <MDBListGroupItem>
                    <MDBIcon icon="map-marker" /> 14 Am Firstberg 28098 Triberg
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    <MDBIcon icon="phone-alt" />
                    +49 (0)7722/869916
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    <MDBIcon icon="envelope" /> info@tookone.de
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCol>
              <MDBCol md="6">
                <img src={require("../component/image/contact-img.png")} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBBox>
        <MDBBox className="contact-form">
          <MDBContainer>
            <MDBBox>
              <MDBRow>
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
                    <label
                      htmlFor="defaultFormContactMessageEx"
                      className="grey-text"
                    >
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
