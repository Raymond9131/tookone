import React, { Component } from 'react'
import NavbarUser from "../component/NavbarUser";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBIcon,
  Link,
  MDBNavLink,
  MDBNav,
  MDBNavItem,
  MDBTabContent,
  MDBTabPane,
  MDBCollapse,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdown,
} from "mdbreact";
import { Multiselect } from "multiselect-react-dropdown";
import Sidebar from "../component/Sidebar";



export default class Timeline extends Component {
                 constructor() {
                   super();
                   this.state = {
                     showMe: false,
                     comment: false,
                     reply: false,
                     activeItem: "1",
                   };
                 }
                //  state = {
                //    activeItem: "1",
                //    showMe: false,
                //    comment: false,
                //    reply: false,
                //  };

                 replybox() {
                   this.setState({
                     reply: !this.state.reply,
                   });
                 }
                 commentShow() {
                   this.setState({
                     comment: !this.state.comment,
                   });
                 }

                 toggle = (tab) => (e) => {
                   if (this.state.activeItem !== tab) {
                     this.setState({
                       activeItem: tab,
                     });
                   }
                 };

                 toggleCollapse = (collapseID) => () => {
                   this.setState((prevState) => ({
                     collapseID:
                       prevState.collapseID !== collapseID ? collapseID : "",
                     plainArray: [
                       "Option 1",
                       "Option 2",
                       "Option 3",
                       "Option 4",
                       "Option 5",
                     ],
                   }));
                 };

                 handleUserWebCheck = (event) => {
                   this.setState({ userWebCheck: event.target.value });
                 };

                 render() {
                   const { plainArray } = this.state;
                   return (
                     <>
                       <NavbarUser />
                       <div className="ibord ">
                         <Sidebar />
                         <div className="create-post-main mt-4">
                           <MDBContainer fluid>
                             <MDBRow>
                               <MDBCol md="9">
                                 <div className="create-post-main-box">
                                   <div className="title-headding">
                                     <i class="fas fa-users"></i>
                                     Timeline
                                   </div>

                                   <div class="pt-4 pb-4 px-4">
                                     <MDBRow>
                                       <MDBCol md="4">
                                         <div className="card-box1">
                                           <div className="userpoint">
                                             <span className="cross_sign">
                                               <MDBIcon icon="times" />
                                             </span>
                                             <img
                                               src={require("./image/ellipe-1.png")}
                                               alt=""
                                             />
                                             <div className="point-namemy">
                                               <h5>
                                                 <b>Profile 1 </b>
                                               </h5>
                                             </div>
                                             <div className="point-name">
                                               25 Subscribers
                                             </div>
                                             <div className="mt-2">
                                               <button className="btn btn-publish">
                                                 Subscribe
                                               </button>
                                             </div>
                                           </div>
                                         </div>
                                       </MDBCol>
                                       <MDBCol md="4">
                                         <div className="card-box1">
                                           <div className="userpoint">
                                             <span className="cross_sign">
                                               <MDBIcon icon="times" />
                                             </span>
                                             <img
                                               src={require("./image/ellipe-1.png")}
                                               alt=""
                                             />
                                             <div className="point-namemy">
                                               <h5>
                                                 <b>Profile 1 </b>
                                               </h5>
                                             </div>
                                             <div className="point-name">
                                               25 Subscribers
                                             </div>
                                             <div className="mt-2">
                                               <button className="btn btn-publish">
                                                 Subscribe
                                               </button>
                                             </div>
                                           </div>
                                         </div>
                                       </MDBCol>
                                       <MDBCol md="4">
                                         <div className="card-box1">
                                           <div className="userpoint">
                                             <span className="cross_sign">
                                               <MDBIcon icon="times" />
                                             </span>
                                             <img
                                               src={require("./image/ellipe-1.png")}
                                               alt=""
                                             />
                                             <div className="point-namemy">
                                               <h5>
                                                 <b>Profile 1 </b>
                                               </h5>
                                             </div>
                                             <div className="point-name">
                                               25 Subscribers
                                             </div>
                                             <div className="mt-2">
                                               <button className="btn btn-publish">
                                                 Subscribe
                                               </button>
                                             </div>
                                           </div>
                                         </div>
                                       </MDBCol>
                                     </MDBRow>
                                   </div>
                                 </div>

                                 <div className="create-post-main-box mt-4 mb-4 for_br">
                                   <MDBRow>
                                     <MDBCol>
                                       <MDBNav className="ul-nav-nav">
                                         <MDBNavItem>
                                           <MDBNavLink
                                             link
                                             to="#"
                                             active={
                                               this.state.activeItem === "1"
                                             }
                                             onClick={this.toggle("1")}
                                             role="tab"
                                           >
                                             User
                                           </MDBNavLink>
                                         </MDBNavItem>
                                         <MDBNavItem>
                                           <MDBNavLink
                                             link
                                             to="#"
                                             // active={this.state.activeItem === "2"}
                                             // onClick={this.toggle("2")}
                                             // role="tab"
                                           >
                                             Web
                                           </MDBNavLink>
                                         </MDBNavItem>
                                       </MDBNav>
                                     </MDBCol>
                                     <MDBCol md="9">
                                       <ul className="ibord-lists">
                                         <li>
                                           <Link to="/">
                                             <MDBIcon icon="edit" />
                                             All
                                           </Link>
                                         </li>
                                         <li>
                                           <Link to="/">
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
                                                   <Link to="#">
                                                     Most of the comments{" "}
                                                   </Link>
                                                 </li>
                                               </ul>
                                             </MDBDropdownMenu>
                                           </MDBDropdown>
                                         </MDBNavItem>
                                       </ul>
                                     </MDBCol>
                                   </MDBRow>
                                 </div>

                                 <MDBTabContent
                                   activeItem={this.state.activeItem}
                                 >
                                   <MDBTabPane tabId="1" role="tabpanel">
                                     <div className="ibord-post visibleb"></div>
                                     <div className="gridlistbox-div">
                                       <div className="ibord-post-box">
                                         <MDBRow>
                                           <MDBCol md="12">
                                             <div className="post-main">
                                               <div className="post-avatar mb-4">
                                                 <div className="leftside-av">
                                                   <div className="avatar-name">
                                                     <img
                                                       src={require("./image/i-post.png")}
                                                       className="user-online"
                                                       alt=""
                                                     />
                                                   </div>
                                                   <div className="avatar-text">
                                                     <h4>Toon</h4>
                                                     <ul>
                                                       <li>50 min</li>
                                                       <li>
                                                         <MDBIcon
                                                           far
                                                           icon="eye"
                                                         />
                                                       </li>
                                                       <li>
                                                         <MDBIcon icon="map-marker-alt" />
                                                       </li>
                                                     </ul>
                                                   </div>
                                                 </div>
                                                 <div className="elvpis">
                                                   <MDBIcon icon="ellipsis-h" />
                                                   <span>
                                                     <MDBIcon icon="camera" />
                                                   </span>
                                                 </div>
                                               </div>
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
                                                 <img
                                                   src={require("./image/grid-list.jpg")}
                                                   alt=""
                                                 />
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
                                               <div className="post-list-content">
                                                 <p>
                                                   Lorem Ipsum is simply dummy
                                                   text of the printing and
                                                   typesetting industry. Lorem
                                                   Ipsum has been the industry's
                                                   standard dummy text ever
                                                   since the 1500s, when an
                                                   unknown printer took a galley
                                                   of type and scrambled it to
                                                   make a type specimen book. It
                                                   has survived not only five
                                                   centuries, but also the leap
                                                   into electronic typesetting,
                                                   remaining essentially
                                                   unchanged. It was popularised
                                                   in the 1960s with the release
                                                   of Letraset sheets containing
                                                   Lorem Ipsum passages, and
                                                   more recently with desktop
                                                   publishing software like
                                                   Aldus PageMaker including
                                                   versions of Lorem Ipsum.
                                                 </p>
                                                 <div className="replybox">
                                                   <div className="reply-left">
                                                     <ul>
                                                       <li className="green-color">
                                                         <MDBIcon icon="angle-up" />
                                                         <span>0</span>
                                                       </li>
                                                       <li>
                                                         <MDBIcon icon="angle-down" />
                                                       </li>
                                                       <li className="plane">
                                                         <MDBIcon icon="paper-plane" />
                                                       </li>
                                                       <li
                                                         onClick={() =>
                                                           this.commentShow()
                                                         }
                                                       >
                                                         <MDBIcon
                                                           icon="comment"
                                                           className="green-color"
                                                         />
                                                         <span>456</span>
                                                       </li>
                                                     </ul>
                                                   </div>
                                                   <div className="reply-report">
                                                     <ul>
                                                       <li>
                                                         <MDBIcon icon="eye" />
                                                         <span>1000</span>
                                                       </li>
                                                       <li>
                                                         <MDBIcon
                                                           far
                                                           icon="bookmark"
                                                         />
                                                       </li>
                                                     </ul>
                                                   </div>
                                                 </div>

                                                 {this.state.comment ? (
                                                   <div className="commentbox">
                                                     <div className="view-post">
                                                       <div className="view-user">
                                                         <img
                                                           src={require("./image/i-post-3.png")}
                                                           alt=""
                                                           className="user-online"
                                                         />
                                                       </div>
                                                       <div className="view-surename">
                                                         <h5>
                                                           Surname
                                                           <span>
                                                             10 Minute ago
                                                           </span>
                                                         </h5>
                                                         <p>
                                                           Lorem Ipsum is simply
                                                           dummy text of the
                                                           printing and
                                                           typesetting industry.
                                                           Lorem Ipsum has been
                                                           the industry's
                                                           standard dummy text
                                                           ever since the 1500s,
                                                           when an unknown
                                                           printer took a galley
                                                           of type and scrambled
                                                           it to make a type
                                                           specimen book. It has
                                                           survived not only
                                                           five centuries, but
                                                           also the leap into
                                                           electronic
                                                           typesetting,
                                                           remaining essentially
                                                           unchanged. It was
                                                           popularised in the
                                                           1960s with the
                                                           release of Letraset
                                                           sheets containing
                                                           Lorem Ipsum passages,
                                                           and more recently
                                                           with desktop
                                                           publishing software
                                                           like Aldus PageMaker
                                                           including versions of
                                                           Lorem Ipsum.
                                                         </p>
                                                         <ul>
                                                           <li>
                                                             <MDBIcon icon="angle-up" />
                                                           </li>
                                                           <li>
                                                             <MDBIcon icon="angle-down" />
                                                           </li>
                                                           <li
                                                             onClick={() =>
                                                               this.replybox()
                                                             }
                                                           >
                                                             <MDBIcon icon="share" />
                                                             Reply
                                                           </li>
                                                         </ul>
                                                       </div>
                                                     </div>
                                                     {this.state.reply ? (
                                                       <div className="replysearch">
                                                         <div className="reply-user">
                                                           <img
                                                             src={require("./image/i-post-3.png")}
                                                             alt=""
                                                           />
                                                         </div>
                                                         <div className="user-input">
                                                           <textarea
                                                             class="commentar"
                                                             placeholder="Add a comment..."
                                                           />
                                                           <div className="replyfooter">
                                                             <button
                                                               className="btn btn-danger"
                                                               onClick={() =>
                                                                 this.setState({
                                                                   reply: false,
                                                                 })
                                                               }
                                                             >
                                                               Cencel
                                                             </button>
                                                             <button className="btn btn-info">
                                                               Reply
                                                             </button>
                                                           </div>
                                                         </div>
                                                       </div>
                                                     ) : null}
                                                   </div>
                                                 ) : null}
                                               </div>
                                             </div>
                                           </MDBCol>
                                         </MDBRow>
                                       </div>

                                       {/* photo end */}
                                       <div className="ibord-post-box">
                                         <MDBRow>
                                           <MDBCol md="12">
                                             <div className="post-main">
                                               <div className="post-avatar mb-4">
                                                 <div className="leftside-av">
                                                   <div className="avatar-name">
                                                     <img
                                                       src={require("./image/i-post.png")}
                                                       className="user-online"
                                                       alt=""
                                                     />
                                                   </div>
                                                   <div className="avatar-text">
                                                     <h4>Toon</h4>
                                                     <ul>
                                                       <li>50 min</li>
                                                       <li>
                                                         <MDBIcon
                                                           far
                                                           icon="eye"
                                                         />
                                                       </li>
                                                       <li>
                                                         <MDBIcon icon="map-marker-alt" />
                                                       </li>
                                                     </ul>
                                                   </div>
                                                 </div>
                                                 <div className="elvpis">
                                                   <MDBIcon icon="ellipsis-h" />
                                                   <span>
                                                     <MDBIcon icon="video" />
                                                   </span>
                                                 </div>
                                               </div>
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
                                                 <img
                                                   src={require("./image/grid-list.jpg")}
                                                   alt=""
                                                 />
                                                 <div className="plyvideo">
                                                   <span>
                                                     <MDBIcon icon="play" />
                                                   </span>
                                                 </div>
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
                                               <div className="post-list-content">
                                                 <p>
                                                   Lorem Ipsum is simply dummy
                                                   text of the printing and
                                                   typesetting industry. Lorem
                                                   Ipsum has been the industry's
                                                   standard dummy text ever
                                                   since the 1500s, when an
                                                   unknown printer took a galley
                                                   of type and scrambled it to
                                                   make a type specimen book. It
                                                   has survived not only five
                                                   centuries, but also the leap
                                                   into electronic typesetting,
                                                   remaining essentially
                                                   unchanged. It was popularised
                                                   in the 1960s with the release
                                                   of Letraset sheets containing
                                                   Lorem Ipsum passages, and
                                                   more recently with desktop
                                                   publishing software like
                                                   Aldus PageMaker including
                                                   versions of Lorem Ipsum.
                                                 </p>
                                                 <div className="replybox">
                                                   <div className="reply-left">
                                                     <ul>
                                                       <li className="green-color">
                                                         <MDBIcon icon="angle-up" />
                                                         <span>0</span>
                                                       </li>
                                                       <li>
                                                         <MDBIcon icon="angle-down" />
                                                       </li>
                                                       <li className="plane">
                                                         <MDBIcon icon="paper-plane" />
                                                       </li>
                                                       <li
                                                         onClick={() =>
                                                           this.commentShow()
                                                         }
                                                       >
                                                         <MDBIcon
                                                           icon="comment"
                                                           className="green-color"
                                                         />
                                                         <span>456</span>
                                                       </li>
                                                     </ul>
                                                   </div>
                                                   <div className="reply-report">
                                                     <ul>
                                                       <li>
                                                         <MDBIcon icon="eye" />
                                                         <span>1000</span>
                                                       </li>
                                                       <li>
                                                         <MDBIcon
                                                           far
                                                           icon="bookmark"
                                                         />
                                                       </li>
                                                     </ul>
                                                   </div>
                                                 </div>

                                                 {this.state.comment ? (
                                                   <div className="commentbox">
                                                     <div className="view-post">
                                                       <div className="view-user">
                                                         <img
                                                           src={require("./image/i-post-3.png")}
                                                           alt=""
                                                           className="user-online"
                                                         />
                                                       </div>
                                                       <div className="view-surename">
                                                         <h5>
                                                           Surname
                                                           <span>
                                                             10 Minute ago
                                                           </span>
                                                         </h5>
                                                         <p>
                                                           Lorem Ipsum is simply
                                                           dummy text of the
                                                           printing and
                                                           typesetting industry.
                                                           Lorem Ipsum has been
                                                           the industry's
                                                           standard dummy text
                                                           ever since the 1500s,
                                                           when an unknown
                                                           printer took a galley
                                                           of type and scrambled
                                                           it to make a type
                                                           specimen book. It has
                                                           survived not only
                                                           five centuries, but
                                                           also the leap into
                                                           electronic
                                                           typesetting,
                                                           remaining essentially
                                                           unchanged. It was
                                                           popularised in the
                                                           1960s with the
                                                           release of Letraset
                                                           sheets containing
                                                           Lorem Ipsum passages,
                                                           and more recently
                                                           with desktop
                                                           publishing software
                                                           like Aldus PageMaker
                                                           including versions of
                                                           Lorem Ipsum.
                                                         </p>
                                                         <ul>
                                                           <li>
                                                             <MDBIcon icon="angle-up" />
                                                           </li>
                                                           <li>
                                                             <MDBIcon icon="angle-down" />
                                                           </li>
                                                           <li
                                                             onClick={() =>
                                                               this.replybox()
                                                             }
                                                           >
                                                             <MDBIcon icon="share" />
                                                             Reply
                                                           </li>
                                                         </ul>
                                                       </div>
                                                     </div>
                                                     {this.state.reply ? (
                                                       <div className="replysearch">
                                                         <div className="reply-user">
                                                           <img
                                                             src={require("./image/i-post-3.png")}
                                                             alt=""
                                                           />
                                                         </div>
                                                         <div className="user-input">
                                                           <textarea
                                                             class="commentar"
                                                             placeholder="Add a comment..."
                                                           />
                                                           <div className="replyfooter">
                                                             <button
                                                               className="btn btn-danger"
                                                               onClick={() =>
                                                                 this.setState({
                                                                   reply: false,
                                                                 })
                                                               }
                                                             >
                                                               Cencel
                                                             </button>
                                                             <button className="btn btn-info">
                                                               Reply
                                                             </button>
                                                           </div>
                                                         </div>
                                                       </div>
                                                     ) : null}
                                                   </div>
                                                 ) : null}
                                               </div>
                                             </div>
                                           </MDBCol>
                                         </MDBRow>
                                       </div>
                                       {/* video end */}
                                       <div className="ibord-post-box">
                                         <MDBRow>
                                           <MDBCol md="12">
                                             <div className="post-main">
                                               <div className="post-avatar mb-4">
                                                 <div className="leftside-av">
                                                   <div className="avatar-name">
                                                     <img
                                                       src={require("./image/i-post.png")}
                                                       className="user-online"
                                                       alt=""
                                                     />
                                                   </div>
                                                   <div className="avatar-text">
                                                     <h4>Toon</h4>
                                                     <ul>
                                                       <li>50 min</li>
                                                       <li>
                                                         <MDBIcon
                                                           far
                                                           icon="eye"
                                                         />
                                                       </li>
                                                       <li>
                                                         <MDBIcon icon="map-marker-alt" />
                                                       </li>
                                                     </ul>
                                                   </div>
                                                 </div>
                                                 <div className="elvpis">
                                                   <MDBIcon icon="ellipsis-h" />
                                                   <span>
                                                     <MDBIcon icon="video" />
                                                   </span>
                                                 </div>
                                               </div>
                                               <div className="post-shadow grid-list-box">
                                                 <div className="audio">
                                                   <div className="iconmusic">
                                                     <MDBIcon icon="music" />

                                                     <AudioPlayer
                                                       src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                                                       // Try other props!
                                                     />
                                                   </div>
                                                 </div>
                                                 <img
                                                   src={require("./image/grid-list.jpg")}
                                                   alt=""
                                                 />

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
                                               <div className="post-list-content">
                                                 <p>
                                                   Lorem Ipsum is simply dummy
                                                   text of the printing and
                                                   typesetting industry. Lorem
                                                   Ipsum has been the industry's
                                                   standard dummy text ever
                                                   since the 1500s, when an
                                                   unknown printer took a galley
                                                   of type and scrambled it to
                                                   make a type specimen book. It
                                                   has survived not only five
                                                   centuries, but also the leap
                                                   into electronic typesetting,
                                                   remaining essentially
                                                   unchanged. It was popularised
                                                   in the 1960s with the release
                                                   of Letraset sheets containing
                                                   Lorem Ipsum passages, and
                                                   more recently with desktop
                                                   publishing software like
                                                   Aldus PageMaker including
                                                   versions of Lorem Ipsum.
                                                 </p>
                                                 <div className="replybox">
                                                   <div className="reply-left">
                                                     <ul>
                                                       <li className="green-color">
                                                         <MDBIcon icon="angle-up" />
                                                         <span>0</span>
                                                       </li>
                                                       <li>
                                                         <MDBIcon icon="angle-down" />
                                                       </li>
                                                       <li className="plane">
                                                         <MDBIcon icon="paper-plane" />
                                                       </li>
                                                       <li
                                                         onClick={() =>
                                                           this.commentShow()
                                                         }
                                                       >
                                                         <MDBIcon
                                                           icon="comment"
                                                           className="green-color"
                                                         />
                                                         <span>456</span>
                                                       </li>
                                                     </ul>
                                                   </div>
                                                   <div className="reply-report">
                                                     <ul>
                                                       <li>
                                                         <MDBIcon icon="eye" />
                                                         <span>1000</span>
                                                       </li>
                                                       <li>
                                                         <MDBIcon
                                                           far
                                                           icon="bookmark"
                                                         />
                                                       </li>
                                                     </ul>
                                                   </div>
                                                 </div>

                                                 {this.state.comment ? (
                                                   <div className="commentbox">
                                                     <div className="view-post">
                                                       <div className="view-user">
                                                         <img
                                                           src={require("./image/i-post-3.png")}
                                                           alt=""
                                                           className="user-online"
                                                         />
                                                       </div>
                                                       <div className="view-surename">
                                                         <h5>
                                                           Surname
                                                           <span>
                                                             10 Minute ago
                                                           </span>
                                                         </h5>
                                                         <p>
                                                           Lorem Ipsum is simply
                                                           dummy text of the
                                                           printing and
                                                           typesetting industry.
                                                           Lorem Ipsum has been
                                                           the industry's
                                                           standard dummy text
                                                           ever since the 1500s,
                                                           when an unknown
                                                           printer took a galley
                                                           of type and scrambled
                                                           it to make a type
                                                           specimen book. It has
                                                           survived not only
                                                           five centuries, but
                                                           also the leap into
                                                           electronic
                                                           typesetting,
                                                           remaining essentially
                                                           unchanged. It was
                                                           popularised in the
                                                           1960s with the
                                                           release of Letraset
                                                           sheets containing
                                                           Lorem Ipsum passages,
                                                           and more recently
                                                           with desktop
                                                           publishing software
                                                           like Aldus PageMaker
                                                           including versions of
                                                           Lorem Ipsum.
                                                         </p>
                                                         <ul>
                                                           <li>
                                                             <MDBIcon icon="angle-up" />
                                                           </li>
                                                           <li>
                                                             <MDBIcon icon="angle-down" />
                                                           </li>
                                                           <li
                                                             onClick={() =>
                                                               this.replybox()
                                                             }
                                                           >
                                                             <MDBIcon icon="share" />
                                                             Reply
                                                           </li>
                                                         </ul>
                                                       </div>
                                                     </div>
                                                     {this.state.reply ? (
                                                       <div className="replysearch">
                                                         <div className="reply-user">
                                                           <img
                                                             src={require("./image/i-post-3.png")}
                                                             alt=""
                                                           />
                                                         </div>
                                                         <div className="user-input">
                                                           <textarea
                                                             class="commentar"
                                                             placeholder="Add a comment..."
                                                           />
                                                           <div className="replyfooter">
                                                             <button
                                                               className="btn btn-danger"
                                                               onClick={() =>
                                                                 this.setState({
                                                                   reply: false,
                                                                 })
                                                               }
                                                             >
                                                               Cencel
                                                             </button>
                                                             <button className="btn btn-info">
                                                               Reply
                                                             </button>
                                                           </div>
                                                         </div>
                                                       </div>
                                                     ) : null}
                                                   </div>
                                                 ) : null}
                                               </div>
                                             </div>
                                           </MDBCol>
                                         </MDBRow>
                                       </div>
                                       {/* audio end */}
                                     </div>
                                   </MDBTabPane>
                                   <MDBTabPane tabId="2" role="tabpanel">
                                     <div className="gridlistbox-div">
                                       <div className="ibord-post-box"></div>
                                     </div>
                                   </MDBTabPane>
                                 </MDBTabContent>
                               </MDBCol>
                               <MDBCol md="3">
                                 <div className="proposal create-top-align">
                                   <h1>Proposal</h1>

                                   <MDBNav className="tabs-div">
                                     <MDBNavItem>
                                       <MDBNavLink
                                         link
                                         to="#"
                                         active={this.state.activeItem === "1"}
                                         onClick={this.toggle("1")}
                                         role="tab"
                                       >
                                         <i class="fas fa-bars"></i>
                                       </MDBNavLink>
                                     </MDBNavItem>
                                     <MDBNavItem>
                                       <MDBNavLink
                                         link
                                         to="#"
                                         active={this.state.activeItem === "2"}
                                         onClick={this.toggle("2")}
                                         role="tab"
                                       >
                                         <i class="fab fa-codepen"></i>
                                       </MDBNavLink>
                                     </MDBNavItem>
                                     <MDBNavItem>
                                       <MDBNavLink
                                         link
                                         to="#"
                                         active={this.state.activeItem === "3"}
                                         onClick={this.toggle("3")}
                                         role="tab"
                                       >
                                         <i class="fas fa-users"></i>
                                       </MDBNavLink>
                                     </MDBNavItem>
                                   </MDBNav>
                                   <div className="tabsbox">
                                     <MDBTabContent
                                       activeItem={this.state.activeItem}
                                     >
                                       <MDBTabPane tabId="1" role="tabpanel">
                                         <div className="proposal-container">
                                           <div className="proposal-img mb-3 border-create-radius">
                                             <span className="cubebox">
                                               <i class="fab fa-codepen"></i>
                                             </span>
                                             <img
                                               src={require("./image/mask.jpg")}
                                               alt=""
                                             />
                                             <div className="create-user-icon">
                                               <i class="fas fa-user"></i>
                                             </div>
                                           </div>

                                           <div className="proposal-img">
                                             <span
                                               className="cubebox"
                                               onClick={this.toggleCollapse(
                                                 "basicCollapse"
                                               )}
                                             >
                                               <i class="fab fa-codepen"></i>
                                             </span>
                                             <img
                                               src={require("./image/mask.jpg")}
                                               alt=""
                                             />
                                             <div className="create-user-icon">
                                               <i class="fas fa-user"></i>
                                             </div>
                                           </div>
                                           <MDBCollapse
                                             id="basicCollapse"
                                             isOpen={this.state.collapseID}
                                           >
                                             <div className="droptoggle">
                                               <img
                                                 src={require("./image/mask.jpg")}
                                                 alt=""
                                               />
                                             </div>
                                             <div className="instest">
                                               <i class="fab fa-codepen"></i>
                                               <input
                                                 type="text"
                                                 className="form-control"
                                                 placeholder="Test insterest"
                                               />
                                             </div>
                                             <div className="search-fillter">
                                               <i class="fas fa-filter"></i>
                                               <Multiselect
                                                 options={plainArray}
                                                 isObject={false}
                                               />
                                             </div>
                                             <div className="add-proposal-post">
                                               <i
                                                 class="far fa-plus-square"
                                                 onClick={this.toggle1}
                                               ></i>
                                             </div>
                                           </MDBCollapse>
                                         </div>
                                       </MDBTabPane>
                                       <MDBTabPane tabId="2" role="tabpanel">
                                         <div className="proposal-container">
                                           <div
                                             className="proposal-img"
                                             onClick={this.toggleCollapse(
                                               "basicCollapse2"
                                             )}
                                           >
                                             <span className="cubebox">
                                               <i class="fab fa-codepen"></i>
                                             </span>
                                             <img
                                               src={require("./image/refresh.jpg")}
                                               alt=""
                                             />
                                           </div>
                                           <MDBCollapse
                                             id="basicCollapse2"
                                             isOpen={this.state.collapseID}
                                           >
                                             <div className="droptoggle">
                                               <p>Test interests</p>
                                               <img
                                                 src={require("./image/refresh.jpg")}
                                                 alt=""
                                               />
                                             </div>
                                             <div className="instest">
                                               <i class="fab fa-codepen"></i>
                                               <input
                                                 type="text"
                                                 className="form-control"
                                                 placeholder="Test insterest"
                                               />
                                             </div>
                                             <div className="search-fillter">
                                               <i class="fas fa-filter"></i>
                                               <Multiselect
                                                 options={plainArray}
                                                 isObject={false}
                                               />
                                             </div>
                                             <div className="add-proposal-post">
                                               <i
                                                 class="far fa-plus-square"
                                                 onClick={this.toggle1}
                                               ></i>
                                             </div>
                                           </MDBCollapse>
                                         </div>
                                       </MDBTabPane>
                                       <MDBTabPane tabId="3" role="tabpanel">
                                         <div className="proposal-container">
                                           <div
                                             className="proposal-img"
                                             onClick={this.toggleCollapse(
                                               "basicCollapse3"
                                             )}
                                           >
                                             <span className="cubebox">
                                               <i class="fab fa-codepen"></i>
                                             </span>
                                             <img
                                               src={require("./image/mask.jpg")}
                                               alt=""
                                             />
                                           </div>
                                           <MDBCollapse
                                             id="basicCollapse3"
                                             isOpen={this.state.collapseID}
                                           >
                                             <div className="droptoggle">
                                               <p>Test interests</p>
                                               <img
                                                 src={require("./image/mask.jpg")}
                                                 alt=""
                                               />
                                             </div>
                                             <div className="instest">
                                               <i class="fab fa-codepen"></i>
                                               <input
                                                 type="text"
                                                 className="form-control"
                                                 placeholder="Test insterest"
                                               />
                                             </div>
                                             <div className="search-fillter">
                                               <i class="fas fa-filter"></i>
                                               <Multiselect
                                                 options={plainArray}
                                                 isObject={false}
                                               />
                                             </div>
                                             <div className="add-proposal-post">
                                               <i
                                                 class="far fa-plus-square"
                                                 onClick={this.toggle1}
                                               ></i>
                                             </div>
                                           </MDBCollapse>
                                         </div>
                                       </MDBTabPane>
                                     </MDBTabContent>
                                   </div>
                                 </div>
                               </MDBCol>
                             </MDBRow>
                           </MDBContainer>
                         </div>
                       </div>
                     </>
                   );
                 }
               }
