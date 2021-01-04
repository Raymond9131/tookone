// @ts-nocheck
import React, { Component } from "react";
import HeaderVisitor from "../component/HeaderVisitor";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, Link } from "mdbreact";

export default class ForgotPassword extends Component {
  render() {
    return (
      <>
        <HeaderVisitor />
        <div className="forgotpassword">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <div className="forgot-box">
                  <div className="forgot-lock">
                    <span>
                      <MDBIcon icon="lock" />
                    </span>
                    <h4>Forgot Password</h4>
                  </div>
                  <div className="form-group input-for">
                    <label htmlFor="formGroupExampleInput">Email</label>
                    <input
                      type="text"
                      className="form-control "
                      id="formGroupExampleInput"
                      placeholder="enter your email"
                    />
                  </div>

                  <div className="forgot-text">
                    <p>
                      Please enter your email address. We will send you an email
                      so that you can renew your password.
                    </p>
                  </div>

                  <div className="button-box">
                    <button className="btn-send">Send</button>
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="6">
                <div className="forgot-box">
                  <div className="forgot-lock">
                    <span>
                      <MDBIcon icon="info" />
                    </span>
                  </div>
                  <div className="usefullbox">
                    <h3>Useful information from help center</h3>
                    <p>
                      You can find more information under <Link># Secured</Link>
                    </p>
                  </div>
                  <div className="forgot-text text-center articleb">
                    <h3>Article:Lorem ipsum</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}
