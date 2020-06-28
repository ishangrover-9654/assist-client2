import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import createPrescription from "./createPrescription";
import createPres2 from "./CreatePres2";

import findPrescription from "./findPrescription";

import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";

function MedicalItem(props) {
  return (
    <div className="MapExplorer">
      <div className="header">
        <h1>Medical Planner</h1>
        <h6>Plan your medical needs</h6>
      </div>

      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/createPrescription">
                <Nav.Link>Create</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/findPrescription">
                <Nav.Link>Find</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/createPrescription" exact component={createPres2}></Route>
        <Route
          path="/findPrescription"
          exact
          component={findPrescription}
        ></Route>
      </Router>
    </div>
  );
}

export default MedicalItem;
