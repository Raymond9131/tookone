import React, { Component } from "react";
import HeaderVisitor from "../component/HeaderVisitor";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, Link } from "mdbreact";

export default class Secured extends Component {
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
                      <MDBIcon icon="user-clock" />
                    </span>
                    <h4>Your account has been secured!</h4>
                  </div>
                  <div className="forgot-text">
                    <p>
                      We detected unusual activity on your account. Please send
                      you a confirmation email that you can use yout accour
                      account as usual
                    </p>
                  </div>
                  <div className="user-profile-secure">
                    <img src={require("./image/default.jpg")} alt="" />
                  </div>
                  <div className="form-group input-for">
                    <label htmlFor="formGroupExampleInput">User Name</label>
                    <input
                      type="text"
                      className="form-control "
                      id="formGroupExampleInput"
                      placeholder="Enter user name"
                    />
                  </div>

                  <div className="form-group input-for">
                    <label htmlFor="formGroupExampleInput">Email</label>
                    <input
                      type="text"
                      className="form-control "
                      id="formGroupExampleInput"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="button-box">
                    <button className="btn-send securedbtn">
                      Send confirmation email
                    </button>
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
                      You can find more information under
                      <Link to="/secured"># Secured</Link>
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
