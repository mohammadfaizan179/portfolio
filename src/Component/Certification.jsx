import React, {useState} from 'react'
import "../Styles/Certification.css";
import {Typography, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import {List,ListItem} from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import web from "../Images/Certificates/web.jpg";
import python from "../Images/Certificates/python.jpg";
import ps from "../Images/Certificates/ps.jpg";
import iot from "../Images/Certificates/iot.jpg";
import Certificate from "./Certificate";

    const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(9),
    },
    }));

    const Certification = () => {
        const classes = useStyles();
        const [open, setOpen] = React.useState(true);
        const handleClick = () => {
            setOpen(!open);
        };
        const [openPopup, setOpenPopup] = useState(false)
        const [name, setName] = useState("")

        const handleOpenDialog = (name) =>{
            setOpenPopup(true);
            setName(name)
            console.log(name);
        }
        const handleCloseDialog = () => {
            setOpenPopup(false);
        };
        
        return (
            <div className="cer_container" id="certificate">
                <Box className="cer_heading">
                    <Typography className="skills_heading_text" variant="h4">Certifications</Typography>
                </Box>
                <div className="cer_wraper">
                <div className="cer_innner_wraper">
                {/* -------------Front End ---------------- */}
                <List>
                    <ListItem button onClick={handleClick}>
                        <Certificate 
                            primary="Web Design for Everybody: Basics of Web Development & Coding" 
                            secondary="The University of Michigan - offered through Coursera" 
                            handleOpenDialog={handleOpenDialog}
                            name="web"
                        />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <Certificate
                                    primary="Introduction to HTML5"    
                                    icon={true}
                                />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <Certificate 
                                    primary="Introduction to CSS3"    
                                    icon={true}
                                />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <Certificate 
                                    primary="Interactivity with JavaScript"    
                                    icon={true}
                                />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <Certificate 
                                    primary="Advanced Styling with Responsive Design"    
                                    icon={true}
                                />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <Certificate 
                                    primary="Web Design for Everybody Capstone"    
                                    icon={true}
                                />
                            </ListItem>
                        </List>
                    </Collapse>
                    {/* -------------ELectrical ---------------- */}
                    <ListItem>
                        <Certificate 
                            primary="Python Basics" 
                            secondary="The University of Michigan - offered through Coursera" 
                            handleOpenDialog={handleOpenDialog}
                            name="python"
                        />
                    </ListItem>
                    <ListItem>
                        <Certificate 
                            primary="Electrical Power System" 
                            secondary="The University at Buffalo and The State University of New York - offered through Coursera" 
                            handleOpenDialog={handleOpenDialog}
                            name="ps"
                        />
                    </ListItem>
                    <ListItem>
                        <Certificate 
                            primary="Introduction and Programming with IoT Boards" 
                            secondary="Pohang University of Science and Technology - offered through Coursera" 
                            handleOpenDialog={handleOpenDialog}
                            name="iot"
                        />
                    </ListItem>
                </List>
                </div>
                </div>
                <Dialog open={openPopup} onClose={handleCloseDialog} fullWidth maxWidth="md">
                    <DialogTitle >Result</DialogTitle>
                    <DialogContent dividers>
                        {
                            name==="web" && <img src={web} alt="result" width="100%"/>
                        }
                        {
                            name==="python" && <img src={python} alt="result" width="100%" />
                        }
                        {
                            name==="ps" && <img src={ps} alt="result" width="100%" />
                        }               
                        {
                            name==="iot" && <img src={iot} alt="result" width="100%" />
                        }               
                    </DialogContent>          
                    <DialogActions>
                        <Button color="secondary" variant="contained" onClick={handleCloseDialog}><ClearIcon /></Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

    export default Certification
