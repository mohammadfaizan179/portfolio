import React from 'react'
import "../Styles/Skills.css";
import {ThemeProvider, Typography, Box, Grid, Paper, LinearProgress} from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core/styles";
import htmlPic from "../Images/Skills/html.png";
import css from "../Images/Skills/css.png";
import js from "../Images/Skills/js.png";
import bootstrap from "../Images/Skills/bootstrap.png";
import leaderShip from "../Images/Skills/lead.png";
import probSolving from "../Images/Skills/ps.png";
import analytical from "../Images/Skills/ana2.png";
import interPers from "../Images/Skills/ip1.png";
import react from "../Images/Skills/react.png";
import jsx from "../Images/Skills/jsx.png";
import redux from "../Images/Skills/redux.png";
import matPic from "../Images/Skills/material.png";
import json from "../Images/Skills/json.png";
import api from "../Images/Skills/api.png";
import git from "../Images/Skills/git.png";
import npm from "../Images/Skills/npm.png";
import babel from "../Images/Skills/babel.png";
import balsamiq from "../Images/Skills/balsamiq.png";

const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
      },
    },
})

const Skills = () => {
    return (
        <div className="skills_container">
            <Box className="skills_heading">
                    <Typography className="skills_heading_text" variant="h4">Skills</Typography>
            </Box>

            <ThemeProvider theme={theme}>
                <Typography variant="h5" style={{color: "#fff", margin: "0 0 0 48px", padding: "10px" ,fontFamily: "Noto Serif, serif", display:"flex", borderLeft:"2px solid #e62e00"}}>Soft:</Typography>
                <Box className="skillsGridWraper">
                <Grid container justify="center">
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            {/* <Paper> */}
                                <img src={analytical} alt="html" width="50px" height="70px"/>
                                <Typography>Analytical</Typography>
                            {/* </Paper> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            {/* <Paper> */}
                                <img src={probSolving} alt="html" width="50px" height="70px"/>
                                <Typography>Problem Solving</Typography>
                            {/* </Paper> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            {/* <Paper> */}
                                <img src={interPers} alt="html" width="120px" height="70px"/>
                                <Typography>Interpersonal</Typography>
                            {/* </Paper> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            {/* <Paper> */}
                                <img src={leaderShip} alt="html" width="120px" height="70px"/>
                                <Typography>Leadership</Typography>
                            {/* </Paper> */}
                        </Box>
                    </Grid>
                </Grid>
                </Box>
            </ThemeProvider>

            {/* ---------------- Web Skills --------------- */}
            
            <ThemeProvider theme={theme}>
                <Typography variant="h5" style={{color: "#fff", margin: "0 0 0 48px", padding: "10px" ,fontFamily: "Noto Serif, serif", display:"flex", borderLeft:"2px solid #e62e00"}}>Web Developement:</Typography>
                <Box className="skillsGridWraper">
                <Grid container justify="center">
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            <img src={htmlPic} alt="html" width="30px" height="30px" style={{marginRight:"5px"}}/>
                            <Typography>HTML</Typography>
                            <Box>   
                            <LinearProgress 
                                variant="determinate" 
                                value={100}
                                color="secondary"
                                backgroundColor="orange"
                                style={{width:"100%" , height:"15px", borderRadius: "5px", backgroundColor:"white" }}
                                />                      
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            <img src={css} alt="html" width="20px" height="30px" style={{marginRight:"8px"}} />
                            <Typography>CSS</Typography>
                            <Box>   
                            <LinearProgress 
                                variant="determinate" 
                                value={85}
                                color="secondary"
                                backgroundColor="orange"
                                style={{width:"100%" , height:"15px", borderRadius: "5px", backgroundColor:"white" }}
                                />                      
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            <img src={js} alt="html" width="35px" height="30px" style={{marginRight:"5px"}}/>
                            <Typography>JavaScript</Typography>
                            <Box>   
                            <LinearProgress 
                                variant="determinate" 
                                value={80}
                                color="secondary"
                                backgroundColor="orange"
                                style={{width:"100%" , height:"15px", borderRadius: "5px", backgroundColor:"white" }}
                                />                      
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            <img src={react} alt="html" width="30px" height="30px" style={{marginRight:"5px"}}/>
                            <Typography>React-JS</Typography>
                            <Box>   
                            <LinearProgress 
                                variant="determinate" 
                                value={85}
                                color="secondary"
                                backgroundColor="orange"
                                style={{width:"100%" , height:"15px", borderRadius: "5px", backgroundColor:"white" }}
                                />                      
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            <img src={jsx} alt="html" width="30px" height="30px" style={{marginRight:"5px"}}/>
                            <Typography>JSX</Typography>
                            <Box>   
                            <LinearProgress 
                                variant="determinate" 
                                value={75}
                                color="secondary"
                                backgroundColor="orange"
                                style={{width:"100%" , height:"15px", borderRadius: "5px", backgroundColor:"white" }}
                                />                      
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            <img src={bootstrap} alt="html" width="30px" height="30px" style={{marginRight:"5px"}}/>
                            <Typography>Bootstrap</Typography>
                            <Box>   
                            <LinearProgress 
                                variant="determinate" 
                                value={100}
                                color="secondary"
                                backgroundColor="orange"
                                style={{width:"100%" , height:"15px", borderRadius: "5px", backgroundColor:"white" }}
                                />                      
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            <img src={redux} alt="html" width="30px" height="30px" style={{marginRight:"5px"}}/>
                            <Typography>Redux</Typography>
                            <Box>   
                            <LinearProgress 
                                variant="determinate" 
                                value={75}
                                color="secondary"
                                backgroundColor="orange"
                                style={{width:"100%" , height:"15px", borderRadius: "5px", backgroundColor:"white" }}
                                />                      
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            <img src={matPic} alt="html" width="30px" height="30px" style={{marginRight:"5px"}}/>
                            <Typography>Material-UI</Typography>
                            <Box>   
                            <LinearProgress 
                                variant="determinate" 
                                value={85}
                                color="secondary"
                                backgroundColor="orange"
                                style={{width:"100%" , height:"15px", borderRadius: "5px", backgroundColor:"white" }}
                                />                      
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            <img src={json} alt="html" width="30px" height="30px" style={{marginRight:"5px"}}/>
                            <Typography>JSON</Typography>
                            <Box>   
                            <LinearProgress 
                                variant="determinate" 
                                value={100}
                                color="secondary"
                                backgroundColor="orange"
                                style={{width:"100%" , height:"15px", borderRadius: "5px", backgroundColor:"white" }}
                                />                      
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            <img src={api} alt="html" width="30px" height="30px" style={{marginRight:"5px"}}/>
                            <Typography>RestAPI Use</Typography>
                            <Box>   
                            <LinearProgress 
                                variant="determinate" 
                                value={60}
                                color="secondary"
                                backgroundColor="orange"
                                style={{width:"100%" , height:"15px", borderRadius: "5px", backgroundColor:"white" }}
                                />                      
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                </Box>
            </ThemeProvider>

            {/* ---------------- Tool ------------------------------ */}
            <ThemeProvider theme={theme}>
                <Typography variant="h5" style={{color: "#fff", margin: "0 0 0 48px", padding: "10px" ,fontFamily: "Noto Serif, serif", display:"flex", borderLeft:"2px solid #e62e00"}}>Tools:</Typography>
                <Box className="skillsGridWraper">
                <Grid container justify="center">
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            {/* <Paper> */}
                                <img src={git} alt="html" width="120px" height="70px"/>
                                <Typography>Git/GitHub</Typography>
                            {/* </Paper> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            {/* <Paper> */}
                                <img src={npm} alt="html" width="50px" height="70px"/>
                                <Typography>NPM</Typography>
                            {/* </Paper> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            {/* <Paper> */}
                                <img src={babel} alt="html" width="100px" height="70px"/>
                                <Typography>Babel & WebPack</Typography>
                            {/* </Paper> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="skillsGridItem">
                            {/* <Paper> */}
                                <img src={balsamiq} alt="html" width="100px" height="70px"/>
                                <Typography>Wireframe (Balsamiq)</Typography>
                            {/* </Paper> */}
                        </Box>
                    </Grid>
                </Grid>
                </Box>
            </ThemeProvider>

        </div>
    )
}

export default Skills
