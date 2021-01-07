import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Subscribers from "../component/Subscribers";
import Subscribed from "../component/Subscribed";
import Contribution from "../component/Contribution";

// import NavMy from '../component/NavMy'
import "../Modalpop.css";
import {
  MDBIcon,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBModal,
  Link,
  MDBModalBody,
} from "mdbreact";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function All() {

  const [modal, setmodal] = useState(false);
  const [modal2, setmodal2] = useState(false);
  const [container, setContainer] = useState("");

 const toggle1 = () => {
   setmodal(!modal);
 };

 const toggle2 = () => {
   setmodal2(!modal2);
 };
  const handleClick = (opt) => {
    switch (opt) {
     

      

      case 3:
        setContainer(fetchSubscribers());
        break;

      case 4:
        setContainer(fetchSubscribed());
        break;

      case 5:
        setContainer(fetchContribution());
        break;
    }
  };




  const fetchSubscribers = () => {
    return <Subscribers />;
  };

  const fetchSubscribed = () => {
    return <Subscribed />;
  };

  const fetchContribution = () => {
    return <Contribution />;
  };

  return (
    <>
      <div className="cover-bg">
        <div className="sc-tabs">
          <div className="center-tabs">
            <MDBNav className="">
              <MDBNavItem>
                <MDBNavLink to="/my-profile/contribution">
                  <span>15</span>
                  Contributions
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/my-profile/subscribers">
                  <span>7</span>
                  Subscribers
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/my-profile/subscribed">
                  <span>0</span>
                  Subscribed
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
          </div>
          <MDBContainer>
            <div className="profile-box">
              <MDBRow>
                <MDBCol md="5">
                  <div className="profile-div">
                    <div className="profile-pic">
                      <div id="progress" data="90" className="avatar-container">
                        <img
                          src={require("./image/10-min.jpg")}
                          alt="image1"
                          class="avatar"
                        />
                      </div>
                      <span className="icon-edit" onClick={toggle2}>
                        <MDBIcon icon="edit" />
                      </span>
                    </div>
                    <div className="profile-title">
                      <h2>Howard Pinsky</h2>
                      <p>Team Name</p>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="7">
                  <div className="editright">
                    <span className="icon-edit-box">
                      <MDBIcon icon="edit" />
                    </span>
                  </div>
                  <div className="profile-bio">
                    <h2>Bio </h2>
                    <p>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                      </span>
                      <img src={require("./image/svg.png")} alt="" />
                    </p>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBContainer>
          <div className="cover-photo" onClick={toggle1}>
            Change Cover <MDBIcon icon="edit" />
          </div>
        </div>
      </div>

      <MDBModal className="profile-modal" isOpen={modal} toggle={toggle1}>
        <MDBModalBody>
          <div className="proposal-file">
            <div className="form-group">
              <label>Change cover picture</label>
              <input type="file" className="input-green" />
            </div>

            <div className="form-group">
              <label>Upload</label>
              <input type="file" className="input-green" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut.
            </p>
            <div className="form-group">
              <div className="add-modal-box">
                <i className="fa fa-plus"></i>
              </div>
            </div>

            <div className="form-group img-postive">
              <img src={require("./image/upload-img.jpg")} alt="" />
              <div className="ul-div">
                <ul>
                  <li>
                    <i className="fa fa-plus-circle"></i> Vorschuau
                  </li>
                  <li>
                    <i className="fas fa-edit"></i> Bearbeiten
                  </li>
                  <li>
                    <i className="fas fa-futbol"></i> Deac
                  </li>
                  <li>
                    <i class="fas fa-trash-alt"></i> Delete
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </MDBModalBody>
      </MDBModal>

      <MDBModal className="profile-modal" isOpen={modal2} toggle={toggle2}>
        <MDBModalBody>
          <div className="proposal-file">
            <div className="form-group">
              <label>Change Profile picture</label>
              <input type="file" className="input-green" />
            </div>

            <div className="form-group">
              <label>Upload</label>
              <input type="file" className="input-green" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut.
            </p>
            <div className="form-group">
              <div className="add-modal-box">
                <i className="fa fa-plus"></i>
              </div>
            </div>

            <div className="form-group img-postive">
              <img src={require("./image/upload-img.jpg")} alt="" />
              <span className="ellipsis">
                <i class="fas fa-ellipsis-v"></i>
              </span>
              <div className="ul-div">
                <ul>
                  <li>
                    <i className="fa fa-plus-circle"></i> Vorschuau
                  </li>
                  <li>
                    <i className="fas fa-edit"></i> Bearbeiten
                  </li>
                  <li>
                    <i className="fas fa-futbol"></i> Deac
                  </li>
                  <li>
                    <i class="fas fa-trash-alt"></i> Delete
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </MDBModalBody>
      </MDBModal>
    </>
  );
}
