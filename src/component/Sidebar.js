import React, { Component } from "react";
import { Link } from "mdbreact";
export default class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-home"></i>
              </Link>
            </li>
            <li>
              <Link to="/iboard" className="active">
                <img src={require("./image/ibord.png")} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-inbox"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-chart-bar"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-eye"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-bookmark"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-vote-yea"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-envelope"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-cog"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-info-circle"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-sign-out-alt"></i>
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
