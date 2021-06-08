import React from 'react'
import "../Styles/Projects.css";
import {ThemeProvider, Grid, Typography, Box, Button, Card, CardMedia, CardContent, CardActions,} from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core/styles";
import cap from "../Images/fort.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Project from "./Project";

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
                        <Project 
                            pic={cap}
                            title="Crud App"
                            content="This app allows the user to perform the 4 popular API CRUD operations i.e. create, read, update and delete. The data given by the user is stored in the JSON file by the axios."
                        />
                        <Project 
                            pic={cap}
                            title="Covid-19 Dashboard"
                            content="This App is about the Covid-19, you can check the current covid-19 cases country wise. Besides, you will get awarness of symptom, causes and frequently asked questions."
                        />
                        <Project 
                            pic={cap}
                            title="E-Commerce Shop"
                            content="It is a E-commerce store that allow you users to add the products in the cart, increase or decrease the item quantity, remove the item from cart, and purchase it. Besides it send confirmation email."
                        />
                    </Grid>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Projects
