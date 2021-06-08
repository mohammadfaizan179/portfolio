import React from 'react'
import "../Styles/Projects.css";
import {ThemeProvider, Grid, Typography, Box, Button, Card, CardMedia, CardContent, CardActions,} from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core/styles";
import cap from "../Images/fort.jpg";
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles({    
    media: {
    
    },
});

const Projects = () => {
    const classes = useStyles();

    return (
        <div className="pro_container">
            <Box className="pro_heading_wraper">
                <Typography variant="h4" className="pro_heading_text">Projects</Typography>
            </Box>
            <ThemeProvider theme={theme}>
                <div className="proGridWraper">
                    <Grid container justify="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <div className="proGridItem">
                            <Card variant="elevation" elevation={10}>
                                <CardMedia className="projectCardMedia" component="img" title="cap" image={cap}/>  
                                <CardContent>
                                    <Typography className="project_card_heading">Crud App</Typography>
                                    <Typography className="project_card_text">This app allows the user to perform the 4 popular API CRUD operations i.e. create, read, update and delete. The data given by the user is stored in the JSON file by the axios.</Typography>                           
                                </CardContent>
                                <CardActions className="projectCardButton">
                                    <Button style={{backgroundColor: "royalblue"}} variant="contained" color="primary">Watch Video</Button>
                                    <Button style={{backgroundColor: "royalblue"}} variant="contained" color="primary">Visit Project</Button>
                                </CardActions>
                            </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className="proGridItem">
                            <Card variant="elevation" elevation={10}>
                                    <CardMedia className="projectCardMedia" component="img" title="cap" image={cap}/>  
                                    <CardContent>
                                        <Typography className="project_card_heading">Covid-19 Dashboard</Typography>
                                        <Typography className="project_card_text">This App is about the Covid-19, you can check the current covid-19 cases country wise. Besides, you will get awarness of symptom, causes and frequently asked questions</Typography>                           
                                    </CardContent>
                                    <CardActions className="projectCardButton">
                                        <Button style={{backgroundColor: "royalblue"}} variant="contained" color="primary">Watch Video</Button>
                                        <Button style={{backgroundColor: "royalblue"}} variant="contained" color="primary">Visit Project</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className="proGridItem">
                                <Card variant="elevation" elevation={10}>
                                    <CardMedia className="projectCardMedia" component="img" title="cap" image={cap}/>  
                                    <CardContent>
                                        <Typography className="project_card_heading">E-Commerce Shop</Typography>
                                        <Typography className="project_card_text">It is a E-commerce store that allow you users to add the products in the cart, increase or decrease the item quantity, remove the item from cart, and purchase it. Besides it send confirmation email</Typography>                           
                                    </CardContent>
                                    <CardActions className="projectCardButton">
                                        <Button style={{backgroundColor: "royalblue"}} variant="contained" color="primary">Watch Video</Button>
                                        <Button style={{backgroundColor: "royalblue"}} variant="contained" color="primary">Visit Project</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Projects
