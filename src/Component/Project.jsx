import React from 'react'
import {Grid, Typography, Button, Card, CardMedia, CardContent, CardActions} from "@material-ui/core";
import "../Styles/Projects.css";

const Project = ({pic, title, content, github_link, proj_link}) => {
    return (
        <>
          <Grid item xs={12} sm={6} md={4}>
            <div className="proGridItem">
            <Card variant="elevation" elevation={10}>
                <CardMedia className="projectCardMedia" component="img" title="cap" image={pic}/>  
                <CardContent>
                    <Typography className="project_card_heading">{title}</Typography>
                    <Typography className="project_card_text">{content}</Typography>                           
                </CardContent>
                <CardActions className="projectCardButton">
                    <Button style={{backgroundColor: "royalblue"}} variant="contained" color="primary" fullWidth component="a" href={github_link} target="_blank">Github</Button>
                    <Button style={{backgroundColor: "royalblue"}} variant="contained" color="primary" fullWidth component="a" href={proj_link} target="_blank">Visit Site</Button>
                </CardActions>
            </Card>
            </div>
        </Grid>  
        </>
    )
}

export default Project
