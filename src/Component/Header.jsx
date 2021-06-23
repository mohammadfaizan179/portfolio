import React from 'react'
import "../Styles/Header.css";
import Typed from 'react-typed';
import {Box, Typography, Fab} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import myPic from "../Images/myPic5.png";

const Header = () => {
    return (
        <>
        
        <div className="header_wraper" id="home">   
        <Box className="header_content">
            <Typography variant="h6" className="top_caption">Hi there, I'm</Typography>
            <Typography variant="h4" className="name">Muhammad Faizan</Typography>
            <Typed 
                className="typed-text"
                strings={["Electrical Engineer","Front-End Web Developer"]}
                typeSpeed={40}
                backSpeed={30}
                loop
            />
            <Box className="header_icon_warper">
                <Box className="header_icon">
                    <Fab className="fab_button" size="small" component="a" href="https://www.linkedin.com/in/muhammad-faizan179/" target="_blank"><LinkedInIcon /></Fab>
                </Box>
                <Box className="header_icon">
                    <Fab className="fab_button" size="small" component="a" href="https://github.com/mohammadfaizan179" target="_blank"><GitHubIcon /></Fab>
                </Box>
                <Box className="header_icon">
                    <Fab className="fab_button" size="small" component="a" href="https://twitter.com/M_Faizan_179" target="_blank"><TwitterIcon /></Fab>
                </Box>
            </Box>
        </Box>
         
        <Box className="header_pic_wraper">
             <img className="header_pic" src={myPic} alt="myPic" />
        </Box>
        </div>
        </>
    )
}

export default Header
