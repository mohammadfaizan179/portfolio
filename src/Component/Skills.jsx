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
import Skill from "./Skill";
import SkillWeb from "./SkillWeb";

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

            {/* --------- Soft Skills ------------------- */}
            <ThemeProvider theme={theme}>
                <Typography variant="h5" style={{color: "#fff", margin: "0 0 0 48px", padding: "10px" ,fontFamily: "Noto Serif, serif", display:"flex", borderLeft:"2px solid #e62e00"}}>Soft:</Typography>
                <Box className="skillsGridWraper">
                    <Grid container justify="center">
                        <Skill title="Analytical" pic={analytical} />
                        <Skill title="Problem Solving" pic={probSolving} />
                        <Skill title="Interpersonal" pic={interPers} />
                        <Skill title="Leadership" pic={leaderShip} />
                    </Grid>
                </Box>
            </ThemeProvider>
            {/* ---------------- Web Skills --------------- */}    
            <ThemeProvider theme={theme}>
                <Typography variant="h5" style={{color: "#fff", margin: "0 0 0 48px", padding: "10px" ,fontFamily: "Noto Serif, serif", display:"flex", borderLeft:"2px solid #e62e00"}}>Web Developement:</Typography>
                <Box className="skillsGridWraper">
                <Grid container justify="center">
                    <SkillWeb pic={htmlPic} title="HTML" value={100} />
                    <SkillWeb pic={css} title="CSS" value={85} />
                    <SkillWeb pic={js} title="JavaScript" value={80} />
                    <SkillWeb pic={react} title="React-JS" value={85} />
                    <SkillWeb pic={jsx} title="JSX" value={80} />
                    <SkillWeb pic={bootstrap} title="Bootstrap" value={100} />
                    <SkillWeb pic={redux} title="Redux" value={75} />
                    <SkillWeb pic={matPic} title="Material-UI" value={85} />
                    <SkillWeb pic={json} title="JSON" value={100} />
                    <SkillWeb pic={api} title="RestAPI Use" value={70} />
                </Grid>
                </Box>
            </ThemeProvider>
            {/* ---------------- Tool ------------------------------ */}
            <ThemeProvider theme={theme}>
                <Typography variant="h5" style={{color: "#fff", margin: "0 0 0 48px", padding: "10px" ,fontFamily: "Noto Serif, serif", display:"flex", borderLeft:"2px solid #e62e00"}}>Tools:</Typography>
                <Box className="skillsGridWraper">
                <Grid container justify="center">
                    <Skill title="Git/GitHub" pic={git} />
                    <Skill title="NPM" pic={npm} />
                    <Skill title="Babel & WebPack" pic={babel} />
                    <Skill title="Wireframe (Balsamiq)" pic={balsamiq} />
                </Grid>
                </Box>
            </ThemeProvider>
        </div>
    )
}
export default Skills
