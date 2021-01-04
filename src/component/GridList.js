import React, { Component } from "react";
import NavbarUser from "../component/NavbarUser";
import Sidebar from "../component/Sidebar";
import "../Modalpop.css";
import {
  MDBIcon,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBRow,
  MDBCol,
  Link,
  MDBModal,
  MDBModalBody,
} from "mdbreact";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
export default class GridList extends Component {
                 constructor() {
                   super();
                   this.state = {
                     showMe: false,
                     comment: false,
                     reply: false,
                   };
                 }
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
                 operation() {
                   this.setState({
                     showMe: !this.state.showMe,
                   });
                 }
                 toggle1 = () => {
                   this.setState({
                     modal: !this.state.modal,
                   });
                 };

                 toggle2 = () => {
                   this.setState({
                     modal2: !this.state.modal2,
                   });
                 };

                 toggle = (tab) => (e) => {
                   if (this.state.activeItem !== tab) {
                     this.setState({
                       activeItem: tab,
                     });
                   }
                 };
                 render() {
                   return (
                     <>
                       <NavbarUser />
                       <div className="ibord">
                         <Sidebar />
                         <div className="cover-bg">
                           <div className="sc-tabs">
                             <div className="center-tabs">
                               <MDBNav className="">
                                 <MDBNavItem>
                                   <MDBNavLink link to="/Subscribers">
                                     <span>15</span>
                                     Contributions
                                   </MDBNavLink>
                                 </MDBNavItem>
                                 <MDBNavItem>
                                   <MDBNavLink link to="/Subscribers">
                                     <span>7</span>
                                     Subscribers
                                   </MDBNavLink>
                                 </MDBNavItem>
                                 <MDBNavItem>
                                   <MDBNavLink
                                     link
                                     to="/Subscribers"
                                     className="active"
                                   >
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
                                         <div
                                           id="progress"
                                           data="90"
                                           class="avatar-container"
                                         >
                                           <img
                                             src={require("./image/10-min.jpg")}
                                             alt=""
                                             class="avatar"
                                           />
                                         </div>
                                         <span
                                           className="icon-edit"
                                           onClick={this.toggle2}
                                         >
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
                                           Lorem ipsum dolor sit amet,
                                           consectetur adipisicing elit. Nihil
                                           odit magnam minima, soluta doloribus
                                           reiciendis molestiae placeat unde eos
                                           molestias. Quisquam aperiam,
                                           pariatur. Tempora, placeat ratione
                                         </span>
                                         <img
                                           src={require("./image/svg.png")}
                                           alt=""
                                         />
                                       </p>
                                     </div>
                                   </MDBCol>
                                 </MDBRow>
                               </div>
                             </MDBContainer>
                             <div
                               className="cover-photo"
                               onClick={this.toggle1}
                             >
                               Change Cover <MDBIcon icon="edit" />
                             </div>
                           </div>
                         </div>

                         <div className="content-main top-postion">
                           <MDBContainer>
                             <div className="tabs-bio">
                               <div className="ibord-post">
                                 <MDBRow>
                                   <MDBCol md="5">
                                     <ul className="radio-box">
                                       <li className="radio">
                                         <input
                                           id="radio-1"
                                           name="radio"
                                           type="radio"
                                         />
                                         <label
                                           htmlFor="radio-1"
                                           class="radio-label"
                                         >
                                           Hidden Post
                                         </label>
                                       </li>
                                       <li className="radio">
                                         <input
                                           id="radio-2"
                                           name="radio"
                                           type="radio"
                                         />
                                         <label
                                           htmlFor="radio-2"
                                           class="radio-label"
                                         >
                                           Unfinished Post
                                         </label>
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
                                       <li>
                                         <Link onClick={() => this.operation()}>
                                           <MDBIcon icon="ellipsis-v" />
                                           Sort
                                         </Link>
                                         {this.state.showMe ? (
                                           <div
                                             className="short-list"
                                             onClick={() =>
                                               this.setState({ showMe: false })
                                             }
                                           >
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
                                           </div>
                                         ) : null}
                                       </li>
                                     </ul>
                                   </MDBCol>
                                 </MDBRow>
                               </div>
                               <div className="unfinished">
                                 <h2>Unfinished Post</h2>
                                 <div className="grid">
                                   <ul className="grid-list border-post-bottom">
                                     <li>
                                       <Link to="/ibord-home">
                                         <MDBIcon icon="th" />
                                       </Link>
                                     </li>
                                     <li>
                                       <Link to="/grid-list">
                                         <MDBIcon icon="list" />
                                       </Link>
                                     </li>
                                     <li>
                                       <Link to="/">
                                         <MDBIcon icon="eye-slash" />
                                       </Link>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                             </div>

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
                                               <MDBIcon far icon="eye" />
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
                                         Lorem Ipsum is simply dummy text of the
                                         printing and typesetting industry.
                                         Lorem Ipsum has been the industry's
                                         standard dummy text ever since the
                                         1500s, when an unknown printer took a
                                         galley of type and scrambled it to make
                                         a type specimen book. It has survived
                                         not only five centuries, but also the
                                         leap into electronic typesetting,
                                         remaining essentially unchanged. It was
                                         popularised in the 1960s with the
                                         release of Letraset sheets containing
                                         Lorem Ipsum passages, and more recently
                                         with desktop publishing software like
                                         Aldus PageMaker including versions of
                                         Lorem Ipsum.
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
                                             <li>
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
                                             <li
                                               onClick={() =>
                                                 this.commentShow()
                                               }
                                             >
                                               <MDBIcon icon="eye" />
                                               <span>1000</span>
                                             </li>
                                             <li>
                                               <MDBIcon far icon="bookmark" />
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
                                                 <span>10 Minute ago</span>
                                               </h5>
                                               <p>
                                                 Lorem Ipsum is simply dummy
                                                 text of the printing and
                                                 typesetting industry. Lorem
                                                 Ipsum has been the industry's
                                                 standard dummy text ever since
                                                 the 1500s, when an unknown
                                                 printer took a galley of type
                                                 and scrambled it to make a type
                                                 specimen book. It has survived
                                                 not only five centuries, but
                                                 also the leap into electronic
                                                 typesetting, remaining
                                                 essentially unchanged. It was
                                                 popularised in the 1960s with
                                                 the release of Letraset sheets
                                                 containing Lorem Ipsum
                                                 passages, and more recently
                                                 with desktop publishing
                                                 software like Aldus PageMaker
                                                 including versions of Lorem
                                                 Ipsum.
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
                                               <MDBIcon far icon="eye" />
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
                                         Lorem Ipsum is simply dummy text of the
                                         printing and typesetting industry.
                                         Lorem Ipsum has been the industry's
                                         standard dummy text ever since the
                                         1500s, when an unknown printer took a
                                         galley of type and scrambled it to make
                                         a type specimen book. It has survived
                                         not only five centuries, but also the
                                         leap into electronic typesetting,
                                         remaining essentially unchanged. It was
                                         popularised in the 1960s with the
                                         release of Letraset sheets containing
                                         Lorem Ipsum passages, and more recently
                                         with desktop publishing software like
                                         Aldus PageMaker including versions of
                                         Lorem Ipsum.
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
                                             <li>
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
                                             <li
                                               onClick={() =>
                                                 this.commentShow()
                                               }
                                             >
                                               <MDBIcon icon="eye" />
                                               <span>1000</span>
                                             </li>
                                             <li>
                                               <MDBIcon far icon="bookmark" />
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
                                                 <span>10 Minute ago</span>
                                               </h5>
                                               <p>
                                                 Lorem Ipsum is simply dummy
                                                 text of the printing and
                                                 typesetting industry. Lorem
                                                 Ipsum has been the industry's
                                                 standard dummy text ever since
                                                 the 1500s, when an unknown
                                                 printer took a galley of type
                                                 and scrambled it to make a type
                                                 specimen book. It has survived
                                                 not only five centuries, but
                                                 also the leap into electronic
                                                 typesetting, remaining
                                                 essentially unchanged. It was
                                                 popularised in the 1960s with
                                                 the release of Letraset sheets
                                                 containing Lorem Ipsum
                                                 passages, and more recently
                                                 with desktop publishing
                                                 software like Aldus PageMaker
                                                 including versions of Lorem
                                                 Ipsum.
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
                             {/* audio start */}
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
                                               <MDBIcon far icon="eye" />
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
                                         Lorem Ipsum is simply dummy text of the
                                         printing and typesetting industry.
                                         Lorem Ipsum has been the industry's
                                         standard dummy text ever since the
                                         1500s, when an unknown printer took a
                                         galley of type and scrambled it to make
                                         a type specimen book. It has survived
                                         not only five centuries, but also the
                                         leap into electronic typesetting,
                                         remaining essentially unchanged. It was
                                         popularised in the 1960s with the
                                         release of Letraset sheets containing
                                         Lorem Ipsum passages, and more recently
                                         with desktop publishing software like
                                         Aldus PageMaker including versions of
                                         Lorem Ipsum.
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
                                             <li>
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
                                             <li
                                               onClick={() =>
                                                 this.commentShow()
                                               }
                                             >
                                               <MDBIcon icon="eye" />
                                               <span>1000</span>
                                             </li>
                                             <li>
                                               <MDBIcon far icon="bookmark" />
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
                                                 <span>10 Minute ago</span>
                                               </h5>
                                               <p>
                                                 Lorem Ipsum is simply dummy
                                                 text of the printing and
                                                 typesetting industry. Lorem
                                                 Ipsum has been the industry's
                                                 standard dummy text ever since
                                                 the 1500s, when an unknown
                                                 printer took a galley of type
                                                 and scrambled it to make a type
                                                 specimen book. It has survived
                                                 not only five centuries, but
                                                 also the leap into electronic
                                                 typesetting, remaining
                                                 essentially unchanged. It was
                                                 popularised in the 1960s with
                                                 the release of Letraset sheets
                                                 containing Lorem Ipsum
                                                 passages, and more recently
                                                 with desktop publishing
                                                 software like Aldus PageMaker
                                                 including versions of Lorem
                                                 Ipsum.
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
                           </MDBContainer>
                         </div>
                       </div>
                       <MDBModal
                         className="profile-modal"
                         isOpen={this.state.modal}
                         toggle={this.toggle1}
                       >
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
                               Lorem ipsum dolor sit amet, consetetur sadipscing
                               elitr, sed diam nonumy eirmod tempor invidunt ut.
                             </p>
                             <div className="form-group">
                               <div className="add-modal-box">
                                 <i className="fa fa-plus"></i>
                               </div>
                             </div>

                             <div className="form-group img-postive">
                               <img
                                 src={require("./image/upload-img.jpg")}
                                 alt=""
                               />
                               <div className="ul-div">
                                 <ul>
                                   <li>
                                     <i className="fa fa-plus-circle"></i>{" "}
                                     Vorschuau
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

                       <MDBModal
                         className="profile-modal"
                         isOpen={this.state.modal2}
                         toggle={this.toggle2}
                       >
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
                               Lorem ipsum dolor sit amet, consetetur sadipscing
                               elitr, sed diam nonumy eirmod tempor invidunt ut.
                             </p>
                             <div className="form-group">
                               <div className="add-modal-box">
                                 <i className="fa fa-plus"></i>
                               </div>
                             </div>

                             <div className="form-group img-postive">
                               <img
                                 src={require("./image/upload-img.jpg")}
                                 alt=""
                               />
                               <span className="ellipsis">
                                 <i class="fas fa-ellipsis-v"></i>
                               </span>
                               <div className="ul-div">
                                 <ul>
                                   <li>
                                     <i className="fa fa-plus-circle"></i>{" "}
                                     Vorschuau
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
                         {/* <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle1}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter> */}
                       </MDBModal>
                     </>
                   );
                 }
               }
