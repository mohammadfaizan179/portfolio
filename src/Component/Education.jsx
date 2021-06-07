import React,{useState} from 'react'
import "../Styles/Education.css";
import {ThemeProvider, Grid, Card, CardMedia, Typography, Box, CardContent, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core/styles";
import cap from "../Images/cap2.png";
import fazi from "../Images/fazi7.png";
import matric from "../Images/matric.jpg";
import fsc from "../Images/fsc.jpg";
import be from "../Images/be.jpg";
import ClearIcon from '@material-ui/icons/Clear';

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
const Education = () => {
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
        <div className="education_container">
            <Box className="edu_heading_wraper">
                <Typography variant="h4" className="edu_heading_text">Education</Typography>
            </Box>
            <ThemeProvider theme={theme}>
                <div className="gridWraper">
                <Grid container justify="center">
                    <Grid item xs={12} sm={6} lg={4}>
                    <div className="gridItem">
                        <Card variant="elevation" elevation={10}>
                            <CardMedia className="cardMedia" component="img" title="cap" image={cap} width="100px !important}"/>  
                            <CardContent>
                                <Typography className="card_item_text_heading">Bacholar of Electrical Engineering</Typography>
                                <Typography className="card_item_text">Sukkur IBA University</Typography>
                                <Typography className="card_item_text">2021</Typography>
                                <Typography className="card_item_res">3.51 / 4</Typography>                            
                            </CardContent>
                            <CardActions className="cardButton">
                                <Button style={{backgroundColor: "royalblue"}} variant="contained" color="primary" color="primary" onClick={()=> handleOpenDialog("matric")}>View Marksheet</Button>
                            </CardActions>
                        </Card>
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                    <div className="gridItem">
                        <Card variant="elevation" elevation={10}>
                            <CardMedia className="cardMedia" component="img" title="cap" image={cap} width="100px !important}"/>  
                            <CardContent>
                                <Typography className="card_item_text_heading">Intermediate in Pre-Engineering</Typography>
                                <Typography className="card_item_text">Degree College Bakrani Larkana</Typography>
                                <Typography className="card_item_text">2016</Typography>
                                <Typography className="card_item_res">75.58% (1<sup>st</sup> Division)</Typography>
                            </CardContent>
                            <CardActions className="cardButton">
                                <Button style={{backgroundColor: "royalblue"}} variant="contained" color="primary" color="primary" onClick={()=> handleOpenDialog("fsc")} >View Marksheet</Button>
                            </CardActions>
                        </Card>
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                    <div className="gridItem">
                        <Card variant="elevation" elevation={10}>
                            <CardMedia className="cardMedia" component="img" title="cap" image={cap} width="100px !important}"/>  
                            <CardContent>
                                <Typography className="card_item_text_heading">Matriculation in Science</Typography>
                                <Typography className="card_item_text">Dr. NA Baloch Model School Hyd</Typography>
                                <Typography className="card_item_text">2013</Typography>
                                <Typography className="card_item_res">71.58% (1<sup>st</sup> Division)</Typography>
                            </CardContent>
                            <CardActions className="cardButton">
                                <Button style={{backgroundColor: "royalblue"}} variant="contained" color="primary" onClick={()=> handleOpenDialog("be")} >View Transcript</Button>
                            </CardActions>
                       </Card>
                    </div>
                    </Grid>
                </Grid>
                </div>
            </ThemeProvider>
            <Dialog open={openPopup} onClose={handleCloseDialog}  width="600px" height="900px" fullWidth maxWidth="sm">
                <DialogTitle >Result</DialogTitle>
                <DialogContent dividers>
                    {
                        name==="matric" && <img src={matric} alt="result" width="500px" />
                    }
                    {
                        name==="fsc" && <img src={fsc} alt="result" width="500px" />
                    }
                    {
                        name==="be" && <img src={be} alt="result" width="500px" />
                    }               
                </DialogContent>          
                <DialogActions>
                    <Button color="secondary" variant="contained" onClick={handleCloseDialog}><ClearIcon /></Button>
                </DialogActions>
            </Dialog>
        
        </div>
    )
}

export default Education
