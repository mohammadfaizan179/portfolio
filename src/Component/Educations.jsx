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
        <div className="education_container" id="edu">
            <Box className="edu_heading_wraper">
                <Typography variant="h4" className="edu_heading_text">Education</Typography>
            </Box>
            
            <ThemeProvider theme={theme}>
                <div className="gridWraper">
                <Grid container justify="center">
                    <Education
                        handleOpenDialog={handleOpenDialog}         
                        degree="BE - Electrical Engineering"
                        school="Sukkur IBA University"
                        year="Year: 2021"
                        result="CGPA: 3.51 / 4"
                        marksheet="be"
                    />
                    <Education
                        handleOpenDialog={handleOpenDialog}         
                        degree="Intermediate in Pre-Engineering"
                        school="Degree College Bakrani Larkana"
                        year="Year: 2016"
                        result="Percentage: 75.58 %"
                        marksheet="fsc"
                    />
                    <Education
                        handleOpenDialog={handleOpenDialog}   
                        degree="Matriculation in Science"
                        school="Dr.NA Baloch Model School Hyderabad"
                        year="Year: 2013"
                        result="Percentage: 71.58 %"
                        marksheet="matric"
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
