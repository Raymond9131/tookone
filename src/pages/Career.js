import React, { Component } from "react";
import {
  MDBContainer,
  MDBBox,
  MDBBtn,
  MDBRow,
  MDBCol,

} from "mdbreact";
import HeaderVisitor from "../component/HeaderVisitor";

export default class Career extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <HeaderVisitor />
        <MDBBox className="career-div-banner">
          <MDBContainer></MDBContainer>
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
