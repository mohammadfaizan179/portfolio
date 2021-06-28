import React from 'react'
import "../Styles/Projects.css";
import {ThemeProvider, Grid, Typography, Box, Button, Card, CardMedia, CardContent, CardActions,} from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core/styles";
import cap from "../Images/fort.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Project from "./Project";
import crud from "../Images/crud2.PNG";
import covid from "../Images/covid.jpeg";
import store from "../Images/store.jpg";
import todo from "../Images/todo.png";

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
        <div className="pro_container" id="projects">
            <Box className="pro_heading_wraper">
                <Typography variant="h4" className="pro_heading_text">Projects</Typography>
            </Box>
            <ThemeProvider theme={theme}>
                <div className="proGridWraper">
                    <Grid container justify="center">
                        <Project 
                            pic={store}
                            title="E-Commerce Shop"
                            content="It is an E-commerce store that allow users to add the products in the cart, increase or decrease the item quantity, remove the item, and clear the cart, and process their transaction through paypal sandbox."
                            github_link="https://github.com/mohammadfaizan179/e-shope"
                            proj_link = "https://react-ecommerce-shope.netlify.app/"
                        />
                        <Project 
                            pic={covid}
                            title="Covid-19 Dashboard"
                            content="This App is about the Covid-19, you can check the current covid-19 cases country wise. Besides, you will get awarness of symptom, causes and frequently asked questions."
                            github_link="https://github.com/mohammadfaizan179/covid_19_dashboard"
                            proj_link = "https://react-covid-19-dashboard.netlify.app/"
                        />
                        <Project 
                            pic={crud}
                            title="Crud App"
                            content="This app allows the user to perform the 4 popular CRUD operations i.e. create, read, update and delete. The app uses the redux to manage the state of app. Besides uses the framer motion for animations"
                            github_link="https://github.com/mohammadfaizan179/contact-book"
                            proj_link = "https://redux-react-crud-app.netlify.app/"
                        />
                        <Project 
                            pic={todo}
                            title="ToDo App"
                            content="This app allows the user to record the delay routine tasks. It allows to edit, and push the tasks in the completed list. Besides it allows to cancel any task. It uses the redux for the flow of data."
                            github_link="https://github.com/mohammadfaizan179/React-Redux-ToDo-App"
                            proj_link = "https://react-redux-todo-animated-app.netlify.app/"
                        />
                    </Grid>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Projects
