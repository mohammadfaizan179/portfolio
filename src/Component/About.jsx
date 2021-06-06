import React from 'react';
import "../Styles/About.css";
import {Box, Typography, Grid} from "@material-ui/core";
import aboutPic from "../Images/about.png";

const About = () => {
    return (
        <>
            <div className="about_container">
                <Box className="about_heading">
                    <Typography className="about_me" variant="h4">About me</Typography>
                    <Typography className="who_am_i" variant="h6">--- Who Am I ---</Typography>
                </Box>
                <Grid container>
                    <Grid item xs={12} md={4} className="picGrid">
                        <img className="about_pic" src={aboutPic} alt="about_pic" />
                    </Grid>
                    <Grid item xs={12} md={8} className="contentGrid">
                        <Typography className="about_content_myName" style={{fontFamily: "Balsamiq Sans, cursive", color:"#ff8000"}} variant="h3">Muhammad Faizan</Typography>
                        <Typography style={{fontFamily: "Noto Serif, serif"}} variant="h6">I am an Electrical Engineering and Front-End Web Developer</Typography>
                        <Grid container className="contentInnerGrid">
                            <Grid item xs={12} sm={4}>
                                <ul>
                                    <li><span style={{color: "#ff8000", fontSize:"18px"}}>Natinality:</span> Pakistani</li>
                                    <li><span style={{color: "#ff8000", fontSize:"18px"}}>Birthday:</span> 7 June 1996</li>
                                    <li><span style={{color: "#ff8000", fontSize:"18px"}}>Mobile:</span> 03135399179</li>
                                    <li><span style={{color: "#ff8000", fontSize:"18px"}}>Qualification:</span> Graduation</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <ul>
                                    <li><span style={{color: "#ff8000", fontSize:"18px"}}>City: </span> Hyderabad</li>
                                    <li><span style={{color: "#ff8000", fontSize:"18px"}}>Age:</span> 26</li>
                                    <li><span style={{color: "#ff8000", fontSize:"18px"}}>Email:</span> mohammadfaizan.be17@iba-suk.edu.pk</li>
                                    <li><span style={{color: "#ff8000", fontSize:"18px"}}>Interest:</span> Web Development, Electrical & Electroni Control system</li>
                                </ul>
                            </Grid>
                        </Grid>
                        <Typography variant="body1" style={{fontFamily: "Noto Serif, serif", textAlign:"justify", fontSize:"18px"}}>
                            I have completed my graduation in electrial engineering from Sukkur IBA University with flying colors. Besides, during my graduation I worked on the web development especially on Front-End and excell in the required skills. Making use of these skills I built usefull projects.                         
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default About
