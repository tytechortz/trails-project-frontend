import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Route, Switch } from 'react-router-dom';
import AddTrail from "../AddTrail/addTrail"
import EditTrail from '../EditTrail/editTrail';
import TrailContainer from '../TrailContainer/trailContainer';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import LogIn from '../LogInContainer/LogIn';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/trail">TrailBlazer</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/trail">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/login">LogIn</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >
                  <NavLink tag={Link} to="/trail/addTrail">Add Trail</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink tag={Link} to="/trail/editTrail">Edit Trail</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
