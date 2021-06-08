import React from 'react'
import {Grid, Typography, Box} from "@material-ui/core";
import "../Styles/Skills.css";

const Skill = ({title,pic}) => {
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box className="skillsGridItem">
                    {/* <Paper> */}
                        <img src={pic} alt="analytical" width="50px" height="70px"/>
                        <Typography>{title}</Typography>
                    {/* </Paper> */}
                </Box>
            </Grid>            
        </>
    )
}
export default Skill

