import React from 'react'
import "../Styles/NavbarComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, animateScroll as scrol} from "react-scroll"
import {Navbar, Nav} from "react-bootstrap";
import {Typography} from "@material-ui/core";
import NavbarComponentSub from "./NavbarComponentSub";

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
                        <NavbarComponentSub title="Home" to="home"/>
                        <NavbarComponentSub title="About" to="about"/>
                        <NavbarComponentSub title="Education" to="edu"/>
                        <NavbarComponentSub title="Skills" to="skills"/>
                        <NavbarComponentSub title="Projects" to="projects"/>
                        <NavbarComponentSub title="Certification" to="certificate"/>
                        <NavbarComponentSub title="Achievement" to="achievement"/>
                       
                        {/* <Nav.Link>
                            <Link
                                activeClass="active"
                                to="achievement"
                                spy={true}
                                smooth={true}
                                // offset={-50}
                                duration={100}
                                // className={classes.itemSpacing}
                            >
                                
                            </Link>
                        </Nav.Link> */}
                    </Nav>
                    </div>
                  </Navbar.Collapse>
            </Navbar>  
        </>
    )
}

export default NavbarComponent
