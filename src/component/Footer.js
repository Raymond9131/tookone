// @ts-nocheck
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBox } from "mdbreact";
import { MDBInputGroup } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <img
              src={require("./image/logo-tookone1.png")}
              className="login-logo"
            />
          </MDBCol>
          <MDBCol md="5">
            <h5 className="title text-center">tookone at a glance</h5>
            <div className="menu-footer">
              <ul>
                <li className="list-unstyled">
                  <Link to="/">Companies</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/">Products</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/investment">Investment</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/Career">Career</Link>
                </li>
              </ul>
              <ul>
                <li className="list-unstyled">
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <MDBBox className="subscribe-div text-center">
              <h4>tookone Newsletter</h4>
              <span>Subscribe to our new letter</span>
              <MDBInputGroup
                hint=""
                containerClassName="mb-3"
                prepend={
                  <span className="input-group-text">
                    <i class="fas fa-envelope fa-sm"></i>
                  </span>
                }
                append={
                  <button outline className="m-0 px-3 py-2 subscribe-btn">
                    Enter
                  </button>
                }
              />
              <MDBBox className="privacy-policy-div">
                <p>Agree Privacy Policy</p>
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch2"
                  />
                  <label
                    class="custom-control-label"
                    for="customSwitch2"
                  ></label>
                </div>
              </MDBBox>
            </MDBBox>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer>
          <ul className="bottom-footer">
            <li>
              <Link to="/Contact-us">Contact Us</Link>
            </li>
            <li>
              <a href=""> Data Protection</a>
            </li>
            <li>
              <a href="">Imprint</a>
            </li>
            <li>
              <a href="">English</a>
            </li>
            <li>
              <a href="">German</a>
            </li>
          </ul>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
