import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import "react-h5-audio-player/lib/styles.css";

// import NavMy from '../component/NavMy'
import "../Modalpop.css";
import {
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  Link,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdown,
  MDBNavItem,
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

export default function FetchSpinner(props) {
  const classes = useStyles();

  const [showMe, setshowMe] = useState(false);

  const [container, setContainer] = useState("");
  const [comment, setComment] = useState(false);
  const [reply, setReply] = useState(false);

  const operation = () => {
    setshowMe(!showMe);
  };
  const commentShow = () => {
    //  alert('ys',comment)
    setComment(!comment);
    console.log("yes", comment);
  };

  const replybox = () => {
    setReply(!reply);
  };

  return (
    <>
      <div className="ibord-post mb-4 visibleb">
        <MDBRow>
          <MDBCol md="5">
            <ul className="radio-box">
              <li>
                <Link to="/" className="active">
                  <i class="fas fa-spinner"></i> Finder
                </Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="7">
            <ul className="ibord-lists">
              <li>
                <Link to="/">
                  <MDBIcon icon="edit" />
                  All
                </Link>
              </li>
              <li>
                <Link to="/" className="active">
                  <MDBIcon icon="camera" />
                  Images
                </Link>
              </li>
              <li>
                <Link to="/">
                  <MDBIcon icon="video" />
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/">
                  <MDBIcon icon="music" />
                  Audio
                </Link>
              </li>

              <li>
                <Link to="/">
                  <MDBIcon icon="text-height" />
                  Text
                </Link>
              </li>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle>
                    <MDBIcon icon="ellipsis-v" />
                    Sort
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="short-list">
                    <ul>
                      <li>
                        <Link to="#">Top Post </Link>
                      </li>
                      <li>
                        <Link to="#">New Post </Link>
                      </li>
                      <li>
                        <Link to="#">Most of the comments </Link>
                      </li>
                    </ul>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </ul>
          </MDBCol>
        </MDBRow>
      </div>

      <MDBRow>
        <MDBCol md="12">
          <div className="tabs-sppiner-menu mb-5">
            <ul>
              <li>
                <a className="active" href="#">
                  Active Finder Post 1
                </a>
              </li>
              <li>
                <a href="#">Active Finder Post 2</a>
              </li>
              <li>
                <a href="#">Active Finder Post 3</a>
              </li>
              <li>
                <a href="#">Active Finder Post 4</a>
              </li>
              <li>
                <a href="#">Active Finder Post 5</a>
              </li>
              <li>
                <a href="#">Active Finder Post 6</a>
              </li>
              <li>
                <a href="#">Active Finder Post 7</a>
              </li>
              <li>
                <a href="#">Active Finder Post 8</a>
              </li>
            </ul>
          </div>
        </MDBCol>
        <MDBCol md="10" className="mx-auto">
          <div className="finder-box">
            <MDBRow>
              <MDBCol md="6">
                <div className="post-shadow grid-list-box">
                  <div className="status-time">
                    <ul>
                      <li className="status-act">
                        <span></span>
                      </li>
                      <li>
                        <span></span>
                      </li>
                      <li>
                        <span></span>
                      </li>
                      <li>
                        <span></span>
                      </li>
                      <li>
                        <span></span>
                      </li>
                    </ul>
                  </div>
                  <img src={require("./image/linked-box.png")} alt="" />
                  <div className="huiye">
                    <ul>
                      <li>
                        <MDBIcon icon="camera" />
                        Photo
                      </li>
                      <li>
                        <MDBIcon icon="map-marker-alt" />
                        50 KM Deffrent
                        <span className="helpbox">
                          <MDBIcon icon="info-circle" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="finder-eightside">
                  <div className="ago-finder">
                    <span>
                      50 Min Ago <i class="fas fa-ellipsis-v"></i>
                    </span>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
}
