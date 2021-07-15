import React from 'react';
import "../Styles/About.css";
import {Box, Typography, Grid} from "@material-ui/core";
import aboutPic from "../Images/myPic2.png";

const About = () => {
    return (
        <>
            
            <div className="about_container" id="about">
                <Box className="about_heading">
                    <Typography className="about_me" variant="h4">About me</Typography>
                    <Typography className="who_am_i" variant="h6">--- Who Am I ---</Typography>
                </Box>
                <Grid container>
                    <Grid item xs={12} md={4} className="picGrid">
                        <img className="about_pic" src={aboutPic} alt="about_pic" />
                    </Grid>
                    <Grid item xs={12} md={8} className="contentGrid">
                        <Typography className="about_content_myName" style={{fontFamily: "Balsamiq Sans, cursive", color:"#8B0000"}} variant="h3">Muhammad Faizan</Typography>
                        <Typography style={{fontFamily: "Noto Serif, serif", color:"#000000"}} variant="h6">I am an Electrical Engineer and Web Developer</Typography>
                        <Grid container className="contentInnerGrid">
                            <Grid item xs={12} sm={4}>
                                <ul>
                                    <li><span style={{color: "#8B0000", fontSize:"18px"}}>Nationality:</span> Pakistani</li>
                                    <li><span style={{color: "#8B0000", fontSize:"18px"}}>Birthday:</span> 7 June 1996</li>
                                    <li><span style={{color: "#8B0000", fontSize:"18px"}}>Mobile:</span> 03135399179</li>
                                    <li><span style={{color: "#8B0000", fontSize:"18px"}}>Qualification:</span> Graduation</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <ul>
                                    <li><span style={{color: "#8B0000", fontSize:"18px"}}>City: </span> Hyderabad</li>
                                    <li><span style={{color: "#8B0000", fontSize:"18px"}}>Age:</span> 25 Years</li>
                                    <li><span style={{color: "#8B0000", fontSize:"18px"}}>Email:</span> faizan.meo179@gmail.com</li>
                                    <li><span style={{color: "#8B0000", fontSize:"18px"}}>Interest:</span> Web Development, Electrical & Electronic Systems</li>
                                </ul>
                            </Grid>
                        </Grid>
                        <Typography variant="body1" style={{fontFamily: "Noto Serif, serif", textAlign:"justify", fontSize:"18px", color:"#000000"}}>
                            I have completed my graduation in electrial engineering from Sukkur IBA University with flying colors. Besides,  I have been working passionately on the web development for the last one and half year and have excelled in the required skills.                          
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default About
