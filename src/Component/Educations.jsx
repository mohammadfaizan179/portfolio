import React,{useState} from 'react'
import "../Styles/Educations.css";
import {ThemeProvider, Grid, Typography, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@material-ui/core";
import matric from "../Images/matric.jpg";
import fsc from "../Images/fsc.jpg";
import be from "../Images/be.jpg";
import ClearIcon from '@material-ui/icons/Clear';
import Education from "./Education";
import {createMuiTheme} from "@material-ui/core/styles";

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
const Educations = () => {
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
                    <Education
                        handleOpenDialog         
                        degree="Bacholar of Electrical Engineering"
                        school="Sukkur IBA University"
                        year="2021"
                        result="3.51 / 4"
                    />
                    <Education
                        handleOpenDialog={handleOpenDialog}         
                        degree="Intermediate in Pre-Engineering"
                        school="Degree College Bakrani Larkana"
                        year="2016"
                        result="75.58 %"
                    />
                    <Education
                        handleOpenDialog         
                        degree="Matriculation in Science"
                        school="Dr.NA Baloch Model School Hyderabad"
                        year="2013"
                        result="71.58 %"
                    />
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

export default Educations
