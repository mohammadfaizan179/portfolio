import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import logo from "../Images/b1.jpg";
import {Navbar, Nav} from "react-bootstrap";
import {Typography} from "@material-ui/core";
import "../Styles/NavbarComponent.css";

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="md">
                  <Navbar.Brand style={{flexGrow: 30}} >
                        <Typography variant="h5" style={{marginLeft:"20px"}}>Muhammad Faizan</Typography>
                  </Navbar.Brand>
                  <Navbar.Toggle style={{marginRight:"20px"}}/>
                  <Navbar.Collapse>
                    <div className="navLink">
                    <Nav>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>Education</Nav.Link>
                        <Nav.Link>Skills</Nav.Link>
                        <Nav.Link>Projects</Nav.Link>
                        <Nav.Link>Certification</Nav.Link>
                        <Nav.Link>Achievement</Nav.Link>
                    </Nav>
                    </div>
                  </Navbar.Collapse>
            </Navbar>  
        </>
    )
}

export default NavbarComponent
