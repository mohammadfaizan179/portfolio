import React from 'react'
import "../Styles/Educations.css";

import {createMuiTheme} from "@material-ui/core/styles";
import {Grid, Card, CardMedia, Typography, Box, CardContent, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@material-ui/core";
import cap from "../Images/cap2.png";


const Education = ({handleOpenDialog,degree, school, year, result}) => {
    return (
        <>
            <Grid item xs={12} sm={6} lg={4}>
            <div className="gridItem">
                <Card variant="elevation" elevation={10}>
                    <CardMedia className="cardMedia" component="img" title="cap" image={cap} width="100px !important}"/>  
                    <CardContent>
                        <Typography className="card_item_text_heading">{degree}</Typography>
                        <Typography className="card_item_text">{school}</Typography>
                        <Typography className="card_item_text">{year}</Typography>
                        <Typography className="card_item_res">{result}</Typography>                            
                    </CardContent>
                    <CardActions className="cardButton">
                        <Button style={{backgroundColor: "royalblue"}} variant="contained" color="primary" color="primary" onClick={()=> handleOpenDialog("matric")}>View Marksheet</Button>
                    </CardActions>
                </Card>
            </div>
            </Grid>
        </>
    )
}

export default Education
