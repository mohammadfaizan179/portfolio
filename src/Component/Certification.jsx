import React, {useState} from 'react'
import "../Styles/Certification.css";
import {Typography, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import web from "../Images/Certificates/web.jpg";
import python from "../Images/Certificates/python.jpg";
import ps from "../Images/Certificates/ps.jpg";
import iot from "../Images/Certificates/iot.jpg";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import StarBorderIcon from '@material-ui/icons/StarBorder';

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
        <div className="cer_container">
            <Box className="cer_heading">
                <Typography className="skills_heading_text" variant="h4">Certification</Typography>
            </Box>

            <div className="cer_wraper">
            <div className="cer_innner_wraper">
                    {/* -------------Front End ---------------- */}
            <List>
                <ListItem  onClick={handleClick}>
                    <ListItemIcon>
                        <ArrowForwardIcon color="secondary"/>
                    </ListItemIcon>
                    <ListItemText 
                        primary={<Typography variant="body1">Web Design for Everybody: Basics of Web Development & Coding</Typography>}
                        secondary={
                            <>
                                <Typography variant="caption" style={{ color: '#ff6f00' }}>University of Michigan - offered through Coursera</Typography>
                                <br />
                                <Typography variant="caption" style={{ color: '#ffffff' }} onClick={()=> handleOpenDialog("web")} component={Button}><VisibilityIcon color="primary" size="large"/> View Certificate </Typography>
                            </>
                        }
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorderIcon color="primary" />
                            </ListItemIcon>     
                            <ListItemText 
                                primary={<Typography variant="body2" style={{color:"#ffffff"}}>Introduction to HTML5</Typography>}
                            />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorderIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                                primary={<Typography variant="body2" style={{color:"#ffffff"}}>Introduction to CSS3</Typography>}
                            />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorderIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                                primary={<Typography variant="body2" style={{color:"#ffffff"}}>Interactivity with JavaScript</Typography>}
                            />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorderIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                                primary={<Typography variant="body2" style={{color:"#ffffff"}}>Advanced Styling with Responsive Design</Typography>}
                            />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorderIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                                primary={<Typography variant="body2" style={{color:"#ffffff"}}>Web Design for Everybody Capstone</Typography>}
                            />
                        </ListItem>
                    </List>
                </Collapse>
                {/* -------------ELectrical ---------------- */}
                <ListItem>
                    <ListItemIcon>
                        <ArrowForwardIcon color="secondary"/>
                    </ListItemIcon>
                    <ListItemText 
                        primary={<Typography variant="h6">Python Basics</Typography>}
                        secondary={
                            <>
                            <Typography variant="caption" style={{ color: '#ff6f00' }}>The University of Michigan - offered through Coursera</Typography>
                            <br />
                            <Typography variant="caption" style={{ color: '#ffffff' }} onClick={()=> handleOpenDialog("python")} component={Button}><VisibilityIcon color="primary" size="large"/> View Certificate </Typography>
                            </>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ArrowForwardIcon color="secondary"/>   
                    </ListItemIcon>
                    <ListItemText 
                        primary={<Typography variant="h6">Electrical Power System</Typography>}
                        secondary={
                            <>
                                <Typography variant="caption" style={{ color: '#ff6f00' }}>The University at Buffalo and The State University of New York - offered through Coursera</Typography>}
                                <br />
                                <Typography variant="caption" style={{ color: '#ffffff' }} onClick={()=> handleOpenDialog("ps")} component={Button}><VisibilityIcon color="primary" size="large"/> View Certificate </Typography>
                            </>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ArrowForwardIcon color="secondary"/>
                    </ListItemIcon>
                    <ListItemText 
                        primary={<Typography variant="h6">Introduction and Programming with IoT Boards</Typography>}
                        secondary={
                            <>
                            <Typography variant="caption" style={{ color: '#ff6f00' }}>Pohang University of Science and Technology - offered through Coursera</Typography>
                                <br />
                            <Typography variant="caption" style={{ color: '#ffffff' }} onClick={()=> handleOpenDialog("iot")} component={Button}><VisibilityIcon color="primary" size="large"/> View Certificate </Typography>
                            </>
                        }
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
