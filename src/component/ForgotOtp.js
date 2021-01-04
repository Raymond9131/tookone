// @ts-nocheck
import React, { Component } from "react";
import HeaderVisitor from "../component/HeaderVisitor";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, Link } from "mdbreact";
import OtpInput from "react-otp-input";

export default class ForgotOtp extends Component {
                 state = { otp: "" };

                 handleChange = (otp) => this.setState({ otp });
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
                                     <MDBIcon icon="key" />
                                   </span>
                                   <h4>Enter verification code</h4>
                                 </div>
                                 <div className="form-group text-center">
                                   <p>
                                     Please enter the code sent you to
                                     XXXXXXXXXXXX
                                   </p>
                                 </div>
                                 <div className="form-group text-center">
                                   <OtpInput
                                     className="ccc"
                                     inputStyle={"inputStyle"}
                                     placeholder="XXXXXX"
                                     value={this.state.otp}
                                     onChange={this.handleChange}
                                     numInputs={6}
                                   />
                                 </div>

                                 <div className="forgot-text">
                                   <p>
                                     Please enter your email address. We will
                                     send you an email so that you can renew
                                     your password.
                                   </p>
                                 </div>
                                 <div className="resend">
                                   <span>
                                     Didn't get your code?
                                     <Link to="/"> Send again</Link>
                                   </span>
                                   <span className="correct">
                                     Correct the receiving address
                                   </span>
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
                                     You can find more information under{" "}
                                     <Link># Secured</Link>
                                   </p>
                                 </div>
                                 <div className="forgot-text text-center articleb">
                                   <h3>Article:Lorem ipsum</h3>
                                   <p>
                                     Lorem Ipsum is simply dummy text of the
                                     printing and typesetting industry. Lorem
                                     Ipsum has been the industry's standard
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
