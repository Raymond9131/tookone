import React, { useState, useEffect } from "react";
import NavbarUser from "./NavbarUser";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";

import Subscribers from "./Subscribers";
import Subscribed from "./Subscribed";
import Contribution from "./Contribution";
import All from "./All";
import GridList from "./GridList";
import AudioPlayer from "react-h5-audio-player";
// import FetchArt from '../component/FetchArt'
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
import FetchArt from "./FetchArt";
import FetchEye from "./FetchEye";
import FetchSpinner from "./FetchSpinner";
import { NavLink } from "react-router-dom";

// import { GridList } from "material-ui";

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

export default function IbordHome(props) {
  const classes = useStyles();

  const [showMe, setshowMe] = useState(false);

  const [container, setContainer] = useState("");
  const [comment, setComment] = useState(false);
  const [reply, setReply] = useState(false);

  // const [activeItem , setactiveItem] = useState(false)

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

  const handleClick = (opt) => {
    switch (opt) {
      case 0:
        setContainer(fetchUser());
        break;

      //  case 1:
      //    setContainer(fetchWeb());
      //    break;

      //  case 2:
      //    setContainer(fetchPost());
      //    break;

      case 3:
        setContainer(fetchSubscribers());
        break;

      case 4:
        setContainer(fetchSubscribed());
        break;

      case 5:
        setContainer(fetchContribution());
        break;

      case "art":
        setContainer(fetchArt());
        break;

      case "eye-post":
        setContainer(fetchEye());
        break;

      case "spiner-post":
        setContainer(fetchSpinner());
        break;

      case "fillter-post":
        setContainer(fetchFilter());
        break;

      case "gridList":
        setContainer(fetchGridList());
        break;

      case "leftView":
        setContainer(fetchUser());
        break;
    }
  };

  const fetchUser = () => {
    return (
      <>
        <div className="ibord-post mb-4 visibleb">
          <MDBRow>
            <MDBCol md="5">
              <ul className="radio-box">
                <li>
                  <Link to="/">
                    <i class="fas fa-eye"></i> Visible
                  </Link>
                </li>
                <li>
                  <Link to="/" className="active">
                    <i class="fas fa-eye-slash"></i> Invisible
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
                  <Link to="/my-profile" className="active">
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

        <div className="tabs-bio">
          <div className="unfinished">
            <div className="grid">
              <ul className="grid-list">
                <li>
                  <Link to="/my-profile" className="active">
                    <MDBIcon icon="th" />
                  </Link>
                </li>
                <li onClick={() => handleClick("gridList")}>
                  <Link to="/my-profile">
                    <MDBIcon icon="list" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="ibord-post-box">
              <div className="post-listv">
                <ul>
                  <li>
                    <Link to="/" className="active">
                      <i class="fas fa-eye-slash"></i> Invisible
                    </Link>
                  </li>
                </ul>
              </div>
              <MDBRow className="no-gutters">
                <MDBCol md="4">
                  <div className="post-shadow">
                    <Link to="/" className="iconbox">
                      <MDBIcon icon="images" />
                    </Link>
                    <img src={require("./image/i-post.png")} alt="" />
                    <div className="huiye">
                      <h4>
                        <MDBIcon icon="camera" />
                        Photo
                        <br />
                        <small>1 hours Ago</small>
                      </h4>
                      <ul>
                        <li>
                          <MDBIcon icon="home" />
                          Berlin
                        </li>
                        <li>
                          <MDBIcon icon="map-marker-alt" />
                          50 KM Deffrent
                        </li>
                      </ul>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="4">
                  <div className="post-shadow">
                    <Link to="/" className="iconbox">
                      <MDBIcon icon="video" />
                    </Link>
                    <img src={require("./image/i-post-2.png")} alt="" />
                    <div className="huiye">
                      <h4>
                        <MDBIcon icon="video" />
                        Videos
                        <br />
                        <small>1 hours Ago</small>
                      </h4>
                      <ul>
                        <li>
                          <MDBIcon icon="home" />
                          Berlin
                        </li>
                        <li>
                          <MDBIcon icon="map-marker-alt" />
                          50 KM Deffrent
                        </li>
                      </ul>
                    </div>
                  </div>
                </MDBCol>

                <MDBCol md="4">
                  <div className="post-shadow">
                    <Link to="/" className="iconbox">
                      <MDBIcon icon="music" />
                    </Link>
                    <img src={require("./image/i-post-5.png")} alt="" />
                    <div className="huiye">
                      <h4>
                        <MDBIcon icon="music" /> Music
                        <br />
                        <small>1 hours Ago</small>
                      </h4>
                      <ul>
                        <li>
                          <MDBIcon icon="home" />
                          Berlin
                        </li>
                        <li>
                          <MDBIcon icon="map-marker-alt" />
                          50 KM Deffrent
                        </li>
                      </ul>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="4">
                  <div className="post-shadow">
                    <Link to="/" className="iconbox">
                      <MDBIcon icon="images" />
                    </Link>
                    <img src={require("./image/i-post-3.png")} alt="" />
                    <div className="huiye">
                      <h4>
                        <MDBIcon icon="camera" /> Photo
                        <br />
                        <small>1 hours Ago</small>
                      </h4>
                      <ul>
                        <li>
                          <MDBIcon icon="home" />
                          Berlin
                        </li>
                        <li>
                          <MDBIcon icon="map-marker-alt" />
                          50 KM Deffrent
                        </li>
                      </ul>
                    </div>
                  </div>
                </MDBCol>

                <MDBCol md="4">
                  <div className="post-shadow">
                    <Link to="/" className="iconbox">
                      <MDBIcon icon="video" />
                    </Link>
                    <img src={require("./image/i-post-4.png")} alt="" />
                    <div className="huiye">
                      <h4>
                        <MDBIcon icon="video" />
                        Videos
                        <br />
                        <small>1 hours Ago</small>
                      </h4>
                      <ul>
                        <li>
                          <MDBIcon icon="home" />
                          Berlin
                        </li>
                        <li>
                          <MDBIcon icon="map-marker-alt" />
                          50 KM Deffrent
                        </li>
                      </ul>
                    </div>
                  </div>
                </MDBCol>

                <MDBCol md="4">
                  <div className="post-shadow">
                    <Link to="/" className="iconbox">
                      <MDBIcon far icon="file-excel" />
                    </Link>
                    <img src={require("./image/i-post-6.png")} alt="" />
                    <div className="huiye">
                      <div className="annual_btn">
                        <span>
                          <MDBIcon far icon="file-excel" />
                          Annual Report
                        </span>
                        <span>
                          <MDBIcon far icon="arrow-alt-circle-down" />
                        </span>
                      </div>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        </div>
      </>
    );
  };

  //  const fetchWeb = () => {
  //    return (
  //      <>
  //        <GridList />
  //      </>
  //    );
  //  };

  //  const fetchPost = () => {
  //    return (
  //      <>
  //        <h1> Post </h1>
  //      </>
  //    );
  //  };

  const fetchSubscribers = () => {
    return <Subscribers />;
  };

  const fetchSubscribed = () => {
    return <Subscribed />;
  };

  const fetchContribution = () => {
    return <Contribution />;
  };

  const fetchArt = () => {
    return <FetchArt handleClick={handleClick} />;
  };

  const fetchEye = () => {
    return <FetchEye handleClick={handleClick} />;
  };

  const fetchSpinner = () => {
    return <FetchSpinner handleClick={handleClick} />;
  };

  const fetchFilter = () => {
    return <>Filter</>;
  };

  const fetchGridList = () => {
    return <GridList handleClick={handleClick} />;
  };

  return (
    <>
      <NavbarUser />

      <div className="ibord">
        <Sidebar />
        <All />

        <div className="content-main top-postion">
          <MDBContainer>
            <div className="{classes.root}">
              <ul className="menubar-update ">
                <li>
                  <NavLink
                    to="#"
                    activeClassName="active1"
                    onClick={() => handleClick(0)}
                  >
                    User Post
                  </NavLink>
                  {/* <a className="active" onClick={() => handleClick(0)}>
                    User Post
                  </a> */}
                </li>

                <li>
                  <NavLink
                    to="#"
                    activeClassName="active1"
                    onClick={() => handleClick(1)}
                  >
                    Web Post
                  </NavLink>
                  {/* <a onClick={() => handleClick(1)}>Web Post</a> */}
                </li>

                <li>
                  <NavLink
                    to="#"
                    activeClassName="active1"
                    onClick={() => handleClick("art")}
                  >
                    <i class="fas fa-at"></i>
                  </NavLink>
                  {/* <a>
                    <i class="fas fa-at"></i>
                  </a> */}
                </li>

                <li>
                  <NavLink
                    to="#"
                    activeClassName="active1"
                    onClick={() => handleClick("eye-post")}
                  >
                    <i class="fas fa-eye-slash"></i>
                  </NavLink>
                </li>
                <li>
                  <a
                  // onClick={() => handleClick("spiner-post")}
                  >
                    <i class="fas fa-spinner"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="active"
                    // onClick={() => handleClick("fillter-post")}
                  >
                    <i class="fas fa-filter"></i>
                  </a>
                </li>
              </ul>
            </div>

            {!container ? <>{fetchUser()}</> : container}
          </MDBContainer>
        </div>
      </div>
    </>
  );
}
