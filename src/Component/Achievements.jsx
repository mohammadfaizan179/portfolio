import React from 'react'
import "../Styles/Achievements.css";
import {createMuiTheme} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {ThemeProvider, Grid, Card, CardMedia, Typography, Box, CardContent, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@material-ui/core";

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

const Achievements = () => {
    return (
        <div className="education_container">
            <Box className="ach_heading_wraper">
                <Typography variant="h4" className="ach_heading_text">Achievement</Typography>
            </Box>
            <ThemeProvider theme={theme}>
                <div className="achGridWraper">
                    <Grid container justify="center">
                        <Grid item xs={12} md={6}>
                            <div className="achGridItem">
                                <Typography className="achGridItemHead" variant="h5">Awards</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowForwardIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText className="achListItemText" primary={<Typography variant="body1"> Awarded with OGDCL-NTHP fully funded scholarship for 4 years undergraduation program</Typography>}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowForwardIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText className="achListItemText" primary={<Typography variant="body1">1<sup>st</sup> runner-up in mathematic Olympiad and won laptop</Typography>}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowForwardIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText className="achListItemText" primary={<Typography variant="body1">Achieved Ngiri Ignite funding for final year project</Typography>}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowForwardIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText className="achListItemText" primary={<Typography variant="body1">Awarded with laptop in Prime Minister’s laptop scheme</Typography>}/>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>

                        {/* --------------------- ECA ------------------------- */}
                        <Grid item xs={12} md={6}>
                            <div className="achGridItem">
                            <Typography className="achGridItemHead" variant="h5">Extracurricular activity</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowForwardIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText className="achListItemText" primary={<Typography variant="body1">Executive member of boy’s hotel society</Typography>}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowForwardIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText className="achListItemText" primary={<Typography variant="body1">Active member of public speaking and literary society</Typography>}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowForwardIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText className="achListItemText" primary={<Typography variant="body1">rganized the inauguration event of national youth assembly at Sukkur IBA</Typography>}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowForwardIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText className="achListItemText" primary={<Typography variant="body1">Attended International Conference (iCoMET-2018,2019)</Typography>}/>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Achievements
