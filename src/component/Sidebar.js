import React, { Component } from "react";
import { NavLink } from "mdbreact";

export default class Sidebar extends Component {
  render() {

    return (
      <>
        <div className="sidebar">
          <ul>
            <li>
              <NavLink to="/my-profile" activeClassName="active1">
                <i className="fas fa-home"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/iboard" activeClassName="active1">
                <img src={require("./image/ibord.png")} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i class="fas fa-inbox"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i class="fas fa-chart-bar"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i class="fas fa-eye"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i class="fas fa-bookmark"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i class="fas fa-vote-yea"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i class="fas fa-envelope"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i class="fas fa-cog"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i class="fas fa-info-circle"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i class="fas fa-sign-out-alt"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
