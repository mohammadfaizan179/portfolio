import React,{useState} from 'react'
import "../Styles/NavbarComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, animateScroll as scrol} from "react-scroll"
import {Navbar, Nav} from "react-bootstrap";
import {Typography} from "@material-ui/core";
import NavbarComponentSub from "./NavbarComponentSub";
import logo from "../Images/logo.png"
const NavbarComponent = () => {
    const [navbar, setNavbar] = useState(false);
    
    const changeBackground = () =>{
        console.log(window.scrollY);
        if(window.scrollY > 640){
            setNavbar(true);
        }else{
            setNavbar(false); 
        }
    };
    window.addEventListener("scroll", changeBackground);

    return (
        <>      
            <Navbar className={navbar ? "navbarWarper active" : "navbarWarper"} variant="dark" fixed="top" expand="md">
                  <Navbar.Brand style={{flexGrow: 30}} >
                        {/* <img src={logo} alt="logo" style={{marginLeft:"60px"}}/> */}
                        <Typography variant="h5" style={{marginLeft:"20px", fontFamily:"cursive", color:"#ffffff"}}>Muhammad Faizan</Typography>
                  </Navbar.Brand>
                  <Navbar.Toggle style={{marginRight:"20px"}}/>
                  <Navbar.Collapse>
                    <div className="navLink">
                    <Nav>
                        <NavbarComponentSub title="Home" to="home" offset={0}/>
                        <NavbarComponentSub title="About" to="about" offset={-120}/>
                        <NavbarComponentSub title="Education" to="edu" offset={-20}/>
                        <NavbarComponentSub title="Skills" to="skills" offset={-120}/>
                        <NavbarComponentSub title="Projects" to="projects" offset={-20}/>
                        <NavbarComponentSub title="Certification" to="certificate" offset={-120}/>
                        <NavbarComponentSub title="Achievement" to="achievement" offset={-20}/>
                    </Nav>
                    </div>
                  </Navbar.Collapse>
            </Navbar>  
        </>
    )
}

export default NavbarComponent
