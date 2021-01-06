import { MDBCol, MDBContainer, MDBRow, MDBInputGroup } from "mdbreact";
import React from "react";
import HeaderVisitor from "./HeaderVisitor";
export default function LogOut() {
  return (
    <>
      <HeaderVisitor />

      <div className="logout">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6" className="mx-auto">
              <div className="logout-box">
                <div className="logout-icon">
                  <img src={require("../component/image/log-icon.png")} />
                </div>

                <div className="logout-text">
                  <h3>
                    You have successfully <b>logged out</b>
                  </h3>
                  <h4>
                    Thank you for using
                    <span className="too-bold">tookone!</span>
                    <br /> Check back soon.
                  </h4>
                  <img
                    src={require("../component/image/logout-1.png")}
                    className="mt-3 mb-3"
                    alt=""
                  />
                  <p>
                    Your team team name is currently on the 3rd place and
                    already has 50,678 members!
                  </p>
                </div>
              </div>
            </MDBCol>

            <MDBCol md="12">
              <div className="took-business">
                <h2>tookone for business is in development!</h2>
                <p>
                  Would you like to be the first to be informed as soon as there
                  is news? <br />
                  Then you can register here.
                </p>
                <div className="form-width">
                  <MDBInputGroup
                    hint="Recipient's username"
                    containerClassName="mb-3"
                    prepend={
                      <span className="input-group-text">
                        <i class="fas fa-envelope fa-sm"></i>
                      </span>
                    }
                    append={
                      <button outline className="m-0 px-3 py-2 enter-btn">
                        Enter
                      </button>
                    }
                  />
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-4">
            <MDBCol md="12">
              <h2 className="pexel-title">Pexels</h2>
            </MDBCol>
            <MDBCol md="3">
              <div className="logout-pixel">
                <img
                  src={require("./image/log-pixel-1.png")}
                  className="mb-2"
                  alt=""
                />
                <p>
                  With the large selection of financing options on the market,
                  we first had to get an overview.
                </p>
              </div>
            </MDBCol>

            <MDBCol md="3">
              <div className="logout-pixel">
                <img
                  src={require("./image/log-pixel-2.png")}
                  className="mb-2"
                  alt=""
                />
                <p>
                  With the large selection of financing options on the market,
                  we first had to get an overview.
                </p>
              </div>
            </MDBCol>
            <MDBCol md="3">
              <div className="logout-pixel">
                <img
                  src={require("./image/log-pixel-1.png")}
                  className="mb-2"
                  alt=""
                />
                <p>
                  With the large selection of financing options on the market,
                  we first had to get an overview.
                </p>
              </div>
            </MDBCol>
            <MDBCol md="3">
              <div className="logout-pixel">
                <img
                  src={require("./image/log-pixel-2.png")}
                  className="mb-2"
                  alt=""
                />
                <p>
                  With the large selection of financing options on the market,
                  we first had to get an overview.
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
