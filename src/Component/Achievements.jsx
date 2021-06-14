import React from 'react'
import "../Styles/Achievements.css";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider, Grid, Typography, Box} from "@material-ui/core";
import Achievement from "./Achievement";

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
        <div className="ach_container" id="achievement">
            <Box className="ach_heading_wraper">
                <Typography variant="h4" className="ach_heading_text">Achievement</Typography>
            </Box>
            <ThemeProvider theme={theme}>
                <div className="achGridWraper">
                    <Grid container justify="center">
                        <Achievement 
                            title = "Awards"
                            ach_1 = "Awarded with OGDCL-NTHP fully funded scholarship for 4 years undergraduation program"
                            ach_2 = "1st runner-up in mathematic Olympiad and won laptop"
                            ach_3 = "Achieved Ngiri Ignite funding for final year project"
                            ach_4 = "Awarded with laptop in Prime Minister’s laptop scheme"
                        />
                        <Achievement 
                            title = "Extracurricular activities"
                            ach_1 = "Executive member of boy’s hotel society"
                            ach_2 = "Active member of public speaking and literary society"
                            ach_3 = "Organized the inauguration event of national youth assembly at Sukkur IBA"
                            ach_4 = "Attended International Conference (iCoMET-2018,2019)"
                        />
                    </Grid>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Achievements
