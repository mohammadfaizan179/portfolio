import React from 'react'
import "../Styles/NavbarComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, animateScroll as scrol} from "react-scroll"
import {Navbar, Nav} from "react-bootstrap";
import {Typography} from "@material-ui/core";
import NavbarComponentSub from "./NavbarComponentSub";
import logo from "../Images/logo.png"
const NavbarComponent = () => {
    return (
        <>
            
            <Navbar bg="dark" variant="dark" fixed="top" expand="md">
                  <Navbar.Brand style={{flexGrow: 30}} >
                        {/* <img src={logo} alt="logo" style={{marginLeft:"60px"}}/> */}
                        <Typography variant="h5" style={{marginLeft:"20px", fontFamily:"cursive"}}>Muhammad Faizan</Typography>
                  </Navbar.Brand>
                  <Navbar.Toggle style={{marginRight:"20px"}}/>
                  <Navbar.Collapse>
                    <div className="navLink">
                    <Nav>
                        <NavbarComponentSub title="Home" to="home"/>
                        <NavbarComponentSub title="About" to="about"/>
                        <NavbarComponentSub title="Education" to="edu"/>
                        <NavbarComponentSub title="Skills" to="skills"/>
                        <NavbarComponentSub title="Projects" to="projects"/>
                        <NavbarComponentSub title="Certification" to="certificate"/>
                        <NavbarComponentSub title="Achievement" to="achievement"/>
                    </Nav>
                    </div>
                  </Navbar.Collapse>
            </Navbar>  
        </>
    )
}

export default NavbarComponent
