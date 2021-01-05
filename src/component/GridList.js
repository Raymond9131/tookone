import React, { useState, useEffect } from "react";
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
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
export default function GridList(props) {
  const [showMe, setshowMe] = useState(false);
  const [comment, setComment] = useState(false);
  const [reply, setReply] = useState(false);

  const [container, setContainer] = useState("");

  // const [activeItem , setactiveItem] = useState(false)

  const operation = () => {
    setshowMe(!showMe);
  };

  const commentShow = () => {
    setComment(!comment);
  };

  const replybox = () => {
    setReply(!reply);
  };

  const handlePress = () => {
    props.handleClick("leftView");
  };

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
      <div className="gridlistbox-div">
        <div className="grid">
          <ul className="grid-list">
            <li onClick={() => handlePress("leftView")}>
              <Link to="/ibord-home">
                <MDBIcon icon="th" />
              </Link>
            </li>
            <li>
              <Link to="/ibord-home" className="active">
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
                  <img src={require("./image/grid-list.jpg")} alt="" />
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
                        <li onClick={() => commentShow()}>
                          <MDBIcon icon="comment" className="green-color" />
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
                          <MDBIcon far icon="bookmark" />
                        </li>
                      </ul>
                    </div>
                  </div>

                  {comment ? (
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
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                          <ul>
                            <li>
                              <MDBIcon icon="angle-up" />
                            </li>
                            <li>
                              <MDBIcon icon="angle-down" />
                            </li>
                            <li onClick={() => replybox()}>
                              <MDBIcon icon="share" />
                              Reply
                            </li>
                          </ul>
                        </div>
                      </div>
                      {reply ? (
                        <div className="replysearch">
                          <div className="reply-user">
                            <img src={require("./image/i-post-3.png")} alt="" />
                          </div>
                          <div className="user-input">
                            <textarea
                              class="commentar"
                              placeholder="Add a comment..."
                            />
                            <div className="replyfooter">
                              <button
                                className="btn btn-danger"
                                onClick={() => setReply(false)}
                              >
                                Cencel
                              </button>
                              <button className="btn btn-info">Reply</button>
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
                  <img src={require("./image/grid-list.jpg")} alt="" />
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
                        <li onClick={() => commentShow()}>
                          <MDBIcon icon="comment" className="green-color" />
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
                          <MDBIcon far icon="bookmark" />
                        </li>
                      </ul>
                    </div>
                  </div>

                  {comment ? (
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
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                          <ul>
                            <li>
                              <MDBIcon icon="angle-up" />
                            </li>
                            <li>
                              <MDBIcon icon="angle-down" />
                            </li>
                            <li onClick={() => replybox()}>
                              <MDBIcon icon="share" />
                              Reply
                            </li>
                          </ul>
                        </div>
                      </div>
                      {reply ? (
                        <div className="replysearch">
                          <div className="reply-user">
                            <img src={require("./image/i-post-3.png")} alt="" />
                          </div>
                          <div className="user-input">
                            <textarea
                              class="commentar"
                              placeholder="Add a comment..."
                            />
                            <div className="replyfooter">
                              <button
                                className="btn btn-danger"
                                onClick={() => setReply(false)}
                              >
                                Cencel
                              </button>
                              <button className="btn btn-info">Reply</button>
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
                      <MDBIcon icon="camera" />
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
                  <img src={require("./image/grid-list.jpg")} alt="" />

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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
                        <li onClick={() => commentShow()}>
                          <MDBIcon icon="comment" className="green-color" />
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
                          <MDBIcon far icon="bookmark" />
                        </li>
                      </ul>
                    </div>
                  </div>

                  {comment ? (
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
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                          <ul>
                            <li>
                              <MDBIcon icon="angle-up" />
                            </li>
                            <li>
                              <MDBIcon icon="angle-down" />
                            </li>
                            <li onClick={() => replybox()}>
                              <MDBIcon icon="share" />
                              Reply
                            </li>
                          </ul>
                        </div>
                      </div>
                      {reply ? (
                        <div className="replysearch">
                          <div className="reply-user">
                            <img src={require("./image/i-post-3.png")} alt="" />
                          </div>
                          <div className="user-input">
                            <textarea
                              class="commentar"
                              placeholder="Add a comment..."
                            />
                            <div className="replyfooter">
                              <button
                                className="btn btn-danger"
                                onClick={() => setReply(false)}
                              >
                                Cencel
                              </button>
                              <button className="btn btn-info">Reply</button>
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
      </div>
    </>
  );
}
