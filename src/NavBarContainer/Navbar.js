import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Route, Switch } from 'react-router-dom';
import AddTrail from "../AddTrail/addTrail"
import EditTrail from '../EditTrail/editTrail';
import TrailContainer from '../TrailContainer/trailContainer';
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
          <NavbarBrand href="/">TrailBlazer</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem componentClass={TrailContainer}>
                <NavLink href="/" to="/">Home</NavLink>
              </NavItem>
              <NavItem componentClass={LogIn}>
                <NavLink href="/login" to="/login">LogIn</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem componentClass={AddTrail}>
                  <NavLink href="/addTrail" to="/addTrail">Add a Trail</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/editTrail" to="/editTrail">Edit a Trail</NavLink>
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
