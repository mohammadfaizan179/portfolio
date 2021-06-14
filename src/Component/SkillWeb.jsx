import React,{useState,useEffect} from 'react'
import {Grid, Box, Typography, LinearProgress} from "@material-ui/core";
import "../Styles/Skills.css";

const SkillWeb = ({pic, title, value}) => {
    const [val, setValue] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setValue(oldValue =>{
                const newValue = oldValue + 1;
                if(newValue===value){
                    clearInterval(interval);
                }
                return newValue;
            });
        }, 10)
    },[])

    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box className="skillsGridItem skillsGridItemWeb">
                    <img src={pic} alt="html" width="30px" height="30px" style={{marginRight:"5px"}}/>
                    <Typography>{title}</Typography>
                    <Box>   
                    <LinearProgress 
                        variant="determinate" 
                        value={val}
                        color="secondary"
                        style={{width:"100%" , height:"15px", borderRadius: "5px", backgroundColor:"white" }}
                    />                      
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default SkillWeb
