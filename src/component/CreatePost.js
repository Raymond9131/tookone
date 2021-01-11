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
  constructor(props) {
    super(props);
    this.state = {
      id: "someUniqueId",
      // I would use this.props.id for a real world implementation
      imageURI: null,
      activeItem: "1",
      activeItem1: "1",
      collapseID: "basicCollapse3",
    };
  }

  buildImgTag() {
    let imgTag = null;
    if (this.state.imageURI !== null)
      imgTag = (
        <div className="row">
          <div className="col-md-2">
            <img className="thumbnail boxs" src={this.state.imageURI}></img>
          </div>
        </div>
      );
    return imgTag;
  }

  readURI(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function(ev) {
        this.setState({ imageURI: ev.target.result });
      }.bind(this);
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  handleChange(e) {
    this.readURI(e); // maybe call this with webworker or async library?
    if (this.props.onChange !== undefined) this.props.onChange(e); // propagate to parent component
  }

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
      plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
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
    const imgTag = this.buildImgTag();
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
                            active={this.state.activeItem1 === "1"}
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
                            active={this.state.activeItem1 === "2"}
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
                            active={this.state.activeItem1 === "3"}
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
                            active={this.state.activeItem1 === "4"}
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
                            active={this.state.activeItem1 === "5"}
                            onClick={this.togglecreate("5")}
                            role="tab"
                          >
                            <i class="fas fa-camera"></i>
                            Photo
                          </MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                          <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItem1 === "6"}
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
                            active={this.state.activeItem1 === "7"}
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
                            active={this.state.activeItem1 === "8"}
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
                            active={this.state.activeItem1 === "9"}
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
                            active={this.state.activeItem1 === "10"}
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
                            active={this.state.activeItem1 === "11"}
                            onClick={this.togglecreate("11")}
                            role="tab"
                          >
                            <i class="fas fa-file"></i>
                            Gif
                          </MDBNavLink>
                        </MDBNavItem>
                      </MDBNav>
                    </div>

                    <div className="tabing-content">
                      <MDBTabContent activeItem={this.state.activeItem1}>
                        <MDBTabPane tabId="1" role="tabpanel">
                          <div className="text-data">
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
                            <div className="form-group">
                              <div className="field pt-3 emoji-picker-container">
                                <span className="file-comment-icon">
                                  <i class="far fa-comments"></i>
                                </span>

                                <input
                                  type="email"
                                  class="form-control"
                                  placeholder="Share your thoughts, experiences or create posts for your environment, subscribers or the whole word"
                                  data-emojiable="true"
                                />

                                {/* <input
                                               type="text"
                                               id="option1"
                                               className="form-control"
                                               placeholder="Share your thoughts, experiences or create posts for your environment, subscribers or the whole word"
                                             /> 
                                             <span className="emoji-surprise">
                                <i class="far fa-surprise"></i>
                              </span>
                                             */}
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
                          </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel">
                          <div className="text-data">
                            <div className="create-text-title">
                              <div className="left-text">
                                <h2>
                                  <i class="fas fa-book"></i> Article
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
                            <div className="form-group">
                              <div className="field pt-3">
                                <span className="file-comment-icon">
                                  <i class="fas fa-heading"></i>
                                </span>

                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Title"
                                />
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="field pt-3">
                                <span className="file-comment-icon">
                                  <i class="fas fa-comment-dots"></i>
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Create an introduction and give other people an incentive to read your article"
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="field pt-3 emoji-picker-container">
                                <span className="file-comment-icon">
                                  <i class="far fa-comments"></i>
                                </span>

                                <input
                                  type="email"
                                  class="form-control"
                                  placeholder="Share your thoughts, experiences or create posts for your environment, subscribers or the whole word"
                                  data-emojiable="true"
                                />

                                <span className="fileattachmentng">
                                  <div className="uploadimg">
                                    <label htmlFor={this.state.id}>
                                      <i class="fas fa-paperclip"></i>
                                    </label>
                                    <input
                                      id={this.state.id}
                                      type="file"
                                      multiple
                                      onChange={this.handleChange.bind(this)}
                                      className="show-for-sr"
                                    />
                                  </div>
                                  <div className="record">
                                    <i class="fas fa-record-vinyl"></i>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div className="form-group">{imgTag}</div>
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
                                      id="location1"
                                      readOnly
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="location1"
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
                                  className="form-control"
                                  placeholder="Select or type location"
                                />
                              </div>
                            </div>

                            <div className="form-group text-right">
                              <button className="btn btn-publish">
                                Publish
                              </button>
                            </div>
                          </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="3" role="tabpanel">
                          <div className="text-data">
                            <div className="create-text-title">
                              <div className="left-text">
                                <h2>
                                  <i class="fas fa-question-circle"></i>
                                  Question
                                </h2>
                              </div>
                              <div className="anoany">
                                <span>Anonymous</span>
                                <div className="custom-control custom-switch">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customSwitches3"
                                    readOnly
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customSwitches3"
                                  ></label>
                                  <span>
                                    <i class="far fa-lightbulb"></i>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="field pt-3 emoji-picker-container">
                                <span className="file-comment-icon">
                                  <i class="fas fa-question"></i>
                                </span>

                                <input
                                  type="email"
                                  class="form-control"
                                  placeholder="Ask your environment subscribers or the whole world"
                                  data-emojiable="true"
                                />

                                <span className="fileattachmentng">
                                  <div className="uploadimg">
                                    <label htmlFor={this.state.id}>
                                      <i class="fas fa-paperclip"></i>
                                    </label>
                                    <input
                                      id={this.state.id}
                                      type="file"
                                      multiple
                                      onChange={this.handleChange.bind(this)}
                                      className="show-for-sr"
                                    />
                                  </div>
                                  <div className="record">
                                    <i class="fas fa-record-vinyl"></i>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div className="form-group">{imgTag}</div>

                            <div className="form-group">
                              <div className="field pt-3 emoji-picker-container emoji-plush">
                                <span className="file-comment-icon">
                                  <i class="fas fa-comment-dots"></i>
                                </span>

                                <input
                                  type="email"
                                  class="form-control"
                                  placeholder="Answer type here or upload image"
                                  data-emojiable="true"
                                />

                                <span className="fileattachmentng">
                                  <div className="uploadimg">
                                    <label
                                    //  htmlFor={this.state.id}
                                    >
                                      <i class="fas fa-paperclip"></i>
                                    </label>
                                    <input
                                      //  id={this.state.id}
                                      type="file"
                                      multiple
                                      //  onChange={this.handleChange.bind(
                                      //    this
                                      //  )}
                                      className="show-for-sr"
                                    />
                                  </div>
                                  <div className="record">
                                    <i class="fas fa-record-vinyl"></i>
                                  </div>
                                </span>
                                <span className="emojiplush">
                                  <i class="fas fa-plus"></i>
                                </span>
                              </div>
                            </div>
                            <div className="form-group">{imgTag}</div>

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
                                      id="location1"
                                      readOnly
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="location1"
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
                                  className="form-control"
                                  placeholder="Select or type location"
                                />
                              </div>
                            </div>

                            <div className="form-group text-right">
                              <button className="btn btn-publish">
                                Publish
                              </button>
                            </div>
                          </div>
                        </MDBTabPane>

                        <MDBTabPane tabId="4" role="tabpanel">
                          <div className="text-data">
                            <div className="create-text-title">
                              <div className="left-text">
                                <h2>
                                  <i class="fas fa-egg"></i>
                                  Recipe
                                </h2>
                              </div>
                              <div className="anoany">
                                <span>Anonymous</span>
                                <div className="custom-control custom-switch">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customSwitches4"
                                    readOnly
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customSwitches4"
                                  ></label>
                                  <span>
                                    <i class="far fa-lightbulb"></i>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="field pt-3">
                                <span className="file-comment-icon">
                                  <i class="fas fa-heading"></i>
                                </span>

                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Title"
                                />
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="field pt-3 emoji-picker-container emoji-plush">
                                <span className="file-comment-icon">
                                  <i class="fas fa-comment-dots"></i>
                                </span>

                                <input
                                  type="email"
                                  class="form-control"
                                  placeholder="Create an introduction and give other people an incentive to ready your article"
                                  data-emojiable="true"
                                />
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="field pt-3 emoji-picker-container">
                                <span className="file-comment-icon">
                                  <i class="far fa-comments"></i>
                                </span>

                                <input
                                  type="email"
                                  class="form-control"
                                  placeholder="Ask your environment subscribers or the whole world"
                                  data-emojiable="true"
                                />

                                <span className="fileattachmentng">
                                  <div className="uploadimg">
                                    <label>
                                      <i class="fas fa-paperclip"></i>
                                    </label>
                                    <input className="show-for-sr" />
                                  </div>
                                  <div className="record">
                                    <i class="fas fa-record-vinyl"></i>
                                  </div>
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
                                      id="location4"
                                      readOnly
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="location4"
                                    ></label>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div className="form-group field">
                              <MDBRow className="addclass-div">
                                <MDBCol md="4">
                                  <select className="form-control pl-0 pr-0">
                                    <option>Quantity</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                  </select>
                                </MDBCol>

                                <MDBCol md="4">
                                  <select className="form-control pl-0 pr-0">
                                    <option>Unit of Measurement</option>
                                    <option value="1">
                                      Unit of Measurement 1
                                    </option>
                                    <option value="2">
                                      Unit of Measurement 2
                                    </option>
                                    <option value="3">
                                      Unit of Measurement 3
                                    </option>
                                  </select>
                                </MDBCol>

                                <MDBCol md="4">
                                  <select className="form-control pl-0 pr-0">
                                    <option>Ingredient Name</option>
                                    <option value="1">Ingredient Name 1</option>
                                    <option value="2">Ingredient Name 2</option>
                                    <option value="3">Ingredient Name 3</option>
                                  </select>
                                </MDBCol>
                                <MDBCol md="1">
                                  <i class="fas fa-plus-circle"></i>
                                </MDBCol>
                              </MDBRow>
                            </div>
                            <div className="form-group field">
                              <MDBRow>
                                <MDBCol md="6">
                                  <select className="form-control pl-0 pr-0">
                                    <option>Number of persons</option>
                                    <option value="1">persons 1</option>
                                    <option value="2">persons 2</option>
                                    <option value="3">persons 3</option>
                                  </select>
                                </MDBCol>

                                <MDBCol md="6">
                                  <select className="form-control pl-0 pr-0">
                                    <option>Preparation time</option>
                                    <option value="1">12:00 PM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">2:00 AM</option>
                                    <option value="3">3:00 AM</option>
                                    <option value="3">4:00 AM</option>
                                  </select>
                                </MDBCol>
                              </MDBRow>
                            </div>

                            <div className="form-group">
                              <div className="field pt-3">
                                <span className="file-comment-icon">
                                  <i class="fas fa-map-marker-alt"></i>
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Select or type location"
                                />
                              </div>
                            </div>

                            <div className="form-group text-right">
                              <button className="btn btn-publish">
                                Publish
                              </button>
                            </div>
                          </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="10" role="tabpanel">
                          <div className="text-data">
                            <div className="create-text-title">
                              <div className="left-text">
                                <h2>
                                  <i class="fas fa-paperclip"></i>
                                  Url
                                </h2>
                              </div>
                              <div className="anoany">
                                <span>Anonymous</span>
                                <div className="custom-control custom-switch">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customSwitches10"
                                    readOnly
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customSwitches10"
                                  ></label>
                                  <span>
                                    <i class="far fa-lightbulb"></i>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="field pt-3">
                                <span className="file-comment-icon">
                                  <i class="fas fa-paperclip"></i>
                                </span>

                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Enter a complete and valid url"
                                />
                              </div>
                            </div>

                          

                            

                            <div className="form-group">
                              <div className="field pt-3">
                                <span className="file-comment-icon">
                                  <i class="fas fa-location-arrow"></i>
                                </span>
                                <input
                                  type="text"
                                  
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
                                      id="location10"
                                      readOnly
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="location10"
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
                                  className="form-control"
                                  placeholder="Select or type location"
                                />
                              </div>
                            </div>

                            <div className="form-group text-right">
                              <button className="btn btn-publish">
                                Publish
                              </button>
                            </div>
                          </div>
                        </MDBTabPane>
                        {/* <MDBTabPane tabId="6" role="tabpanel">
                          <p className="mt-2">6</p>
                        </MDBTabPane> */}
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
                      <MDBTabContent activeItem={this.state.activeItem}>
                        <MDBTabPane tabId="1" role="tabpanel">
                          <div className="proposal-container">
                            <div className="proposal-img mb-3 border-create-radius">
                              <span className="cubebox">
                                <i class="fab fa-codepen"></i>
                              </span>
                              <img src={require("./image/mask.jpg")} alt="" />
                              <div className="create-user-icon">
                                <i class="fas fa-user"></i>
                              </div>
                            </div>

                            <div className="proposal-img">
                              <span
                                className="cubebox"
                                onClick={this.toggleCollapse("basicCollapse")}
                              >
                                <i class="fab fa-codepen"></i>
                              </span>
                              <img src={require("./image/mask.jpg")} alt="" />
                              <div className="create-user-icon">
                                <i class="fas fa-user"></i>
                              </div>
                            </div>
                            <MDBCollapse
                              id="basicCollapse"
                              isOpen={this.state.collapseID}
                            >
                              <div className="droptoggle">
                                <img src={require("./image/mask.jpg")} alt="" />
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
                              onClick={this.toggleCollapse("basicCollapse2")}
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
                              onClick={this.toggleCollapse("basicCollapse3")}
                            >
                              <span className="cubebox">
                                <i class="fab fa-codepen"></i>
                              </span>
                              <img src={require("./image/mask.jpg")} alt="" />
                            </div>
                            <MDBCollapse
                              id="basicCollapse3"
                              isOpen={this.state.collapseID}
                            >
                              <div className="droptoggle">
                                <p>Test interests</p>
                                <img src={require("./image/mask.jpg")} alt="" />
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
