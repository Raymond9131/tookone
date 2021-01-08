import React, { Component } from "react";
import NavbarUser from "../component/NavbarUser";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  //   MDBIcon,
  MDBNavLink,
  MDBNav,
  MDBNavItem,
  MDBTabContent,
  MDBTabPane,
  MDBCollapse,

} from "mdbreact";
import { Multiselect } from "multiselect-react-dropdown";
import Sidebar from "../component/Sidebar";


export default class CreatePost extends Component {
                 state = {
                   activeItem: "1",
                   activeItem1: "1",
                   collapseID: "basicCollapse3",
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

                 componentDidMount() {
                   window.scrollTo(0, 0);
                 }
                 toggle = (tab) => (e) => {
                   if (this.state.activeItem !== tab) {
                     this.setState({
                       activeItem: tab,
                     });
                   }
                 };

                 togglecreate = (tab) => (e) => {
                   if (this.state.activeItem1 !== tab) {
                     this.setState({
                       activeItem1: tab,
                     });
                   }
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
                                   <div className="tab-fillter">
                                     <MDBNav>
                                       <MDBNavItem>
                                         <MDBNavLink
                                           link
                                           to="#"
                                           active={
                                             this.state.activeItem1 === "1"
                                           }
                                           onClick={this.togglecreate("1")}
                                           role="tab"
                                         >
                                           <i class="fas fa-bars"></i> Text
                                         </MDBNavLink>
                                       </MDBNavItem>
                                       <MDBNavItem>
                                         <MDBNavLink
                                           link
                                           to="#"
                                           active={
                                             this.state.activeItem1 === "2"
                                           }
                                           onClick={this.togglecreate("2")}
                                           role="tab"
                                         >
                                           <i class="fas fa-book"></i> Article
                                         </MDBNavLink>
                                       </MDBNavItem>
                                       <MDBNavItem>
                                         <MDBNavLink
                                           link
                                           to="#"
                                           active={
                                             this.state.activeItem1 === "3"
                                           }
                                           onClick={this.togglecreate("3")}
                                           role="tab"
                                         >
                                           <i class="fas fa-question-circle"></i>
                                           Questions
                                         </MDBNavLink>
                                       </MDBNavItem>

                                       <MDBNavItem>
                                         <MDBNavLink
                                           link
                                           to="#"
                                           active={
                                             this.state.activeItem1 === "4"
                                           }
                                           onClick={this.togglecreate("4")}
                                           role="tab"
                                         >
                                           <i class="fas fa-egg"></i>
                                           Recipe
                                         </MDBNavLink>
                                       </MDBNavItem>

                                       <MDBNavItem>
                                         <MDBNavLink
                                           link
                                           to="#"
                                           active={
                                             this.state.activeItem1 === "5"
                                           }
                                           onClick={this.togglecreate("5")}
                                           role="tab"
                                         >
                                           <i class="fas fa-camera"></i>
                                           Camera
                                         </MDBNavLink>
                                       </MDBNavItem>

                                       <MDBNavItem>
                                         <MDBNavLink
                                           link
                                           to="#"
                                           active={
                                             this.state.activeItem1 === "6"
                                           }
                                           onClick={this.togglecreate("6")}
                                           role="tab"
                                         >
                                           <i class="fas fa-video"></i>
                                           Video
                                         </MDBNavLink>
                                       </MDBNavItem>

                                       <MDBNavItem>
                                         <MDBNavLink
                                           link
                                           to="#"
                                           active={
                                             this.state.activeItem1 === "7"
                                           }
                                           onClick={this.togglecreate("7")}
                                           role="tab"
                                         >
                                           <i class="fas fa-music"></i>
                                           Audio
                                         </MDBNavLink>
                                       </MDBNavItem>

                                       <MDBNavItem>
                                         <MDBNavLink
                                           link
                                           to="#"
                                           active={
                                             this.state.activeItem1 === "8"
                                           }
                                           onClick={this.togglecreate("8")}
                                           role="tab"
                                         >
                                           <i class="fas fa-book"></i>
                                           Docoment
                                         </MDBNavLink>
                                       </MDBNavItem>

                                       <MDBNavItem>
                                         <MDBNavLink
                                           link
                                           to="#"
                                           active={
                                             this.state.activeItem1 === "9"
                                           }
                                           onClick={this.togglecreate("9")}
                                           role="tab"
                                         >
                                           <i class="fas fa-spinner"></i>
                                           Finder
                                         </MDBNavLink>
                                       </MDBNavItem>

                                       <MDBNavItem>
                                         <MDBNavLink
                                           link
                                           to="#"
                                           active={
                                             this.state.activeItem1 === "10"
                                           }
                                           onClick={this.togglecreate("10")}
                                           role="tab"
                                         >
                                           <i class="fas fa-paperclip"></i>
                                           Url
                                         </MDBNavLink>
                                       </MDBNavItem>

                                       <MDBNavItem>
                                         <MDBNavLink
                                           link
                                           to="#"
                                           active={
                                             this.state.activeItem1 === "11"
                                           }
                                           onClick={this.togglecreate("11")}
                                           role="tab"
                                         >
                                           <i class="fas fa-file"></i>
                                           Gif
                                         </MDBNavLink>
                                       </MDBNavItem>
                                     </MDBNav>
                                   </div>

                                   <div className="create-text-title">
                                     <div className="left-text">
                                       <h2>
                                         <i class="fas fa-bars"></i> Text
                                       </h2>
                                     </div>
                                     <div className="anoany">
                                       <span>Anonymous</span>
                                       <div className="custom-control custom-switch">
                                         <input
                                           type="checkbox"
                                           className="custom-control-input"
                                           id="customSwitches"
                                           readOnly
                                         />
                                         <label
                                           className="custom-control-label"
                                           htmlFor="customSwitches"
                                         ></label>
                                         <span>
                                           <i class="far fa-lightbulb"></i>
                                         </span>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="tabing-content">
                                     <MDBTabContent
                                       activeItem={this.state.activeItem1}
                                     >
                                       <MDBTabPane tabId="1" role="tabpanel">
                                         <div className="form-group">
                                           <div className="field pt-3">
                                             <span className="file-comment-icon">
                                               <i class="far fa-comments"></i>
                                             </span>
                                             <input
                                               type="text"
                                               id="option1"
                                               className="form-control"
                                               placeholder="Share your thoughts, experiences or create posts for your environment, subscribers or the whole word"
                                             />
                                             <span className="emoji-surprise">
                                               <i class="far fa-surprise"></i>
                                             </span>
                                           </div>
                                         </div>

                                         <div className="form-group">
                                           <div className="field pt-3">
                                             <span className="file-comment-icon">
                                               <i class="fas fa-location-arrow"></i>
                                             </span>
                                             <input
                                               type="text"
                                               id="option1"
                                               className="form-control"
                                               placeholder="Local"
                                             />
                                             <span
                                               className="emoji-surprise"
                                               style={{ right: "0px" }}
                                             >
                                               <div className="custom-control custom-switch">
                                                 <input
                                                   type="checkbox"
                                                   className="custom-control-input"
                                                   id="location"
                                                   readOnly
                                                 />
                                                 <label
                                                   className="custom-control-label"
                                                   htmlFor="location"
                                                 ></label>
                                               </div>
                                             </span>
                                           </div>
                                         </div>

                                         <div className="form-group">
                                           <div className="field pt-3">
                                             <span className="file-comment-icon">
                                               <i class="fas fa-map-marker-alt"></i>
                                             </span>
                                             <input
                                               type="text"
                                               id="option1"
                                               className="form-control"
                                               placeholder="Berlin"
                                             />
                                           </div>
                                         </div>

                                         <div className="form-group text-right">
                                           <button className="btn btn-publish">
                                             Publish
                                           </button>
                                         </div>
                                       </MDBTabPane>
                                       <MDBTabPane tabId="2" role="tabpanel">
                                         <p className="mt-2">2</p>
                                       </MDBTabPane>
                                       <MDBTabPane tabId="3" role="tabpanel">
                                         <p className="mt-2">3</p>
                                       </MDBTabPane>

                                       <MDBTabPane tabId="4" role="tabpanel">
                                         <p className="mt-2">4</p>
                                       </MDBTabPane>
                                       <MDBTabPane tabId="5" role="tabpanel">
                                         <p className="mt-2">5</p>
                                       </MDBTabPane>
                                       <MDBTabPane tabId="6" role="tabpanel">
                                         <p className="mt-2">6</p>
                                       </MDBTabPane>
                                     </MDBTabContent>
                                   </div>
                                 </div>
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
