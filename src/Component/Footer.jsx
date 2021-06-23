import React from 'react'
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( theme =>({
    footerContainer:{
        display: "flex", 
        textAlign:"center", 
        justifyContent:"center", 
        backgroundColor:"#222023", 
        color:"#ffffff", 
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(33, 150, 243))", 
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.footerContainer}>
                <Typography style={{fontFamily:"Noto Serif, serif"}}>Muhammad Faizan </Typography>
            </div>
        </>
    )
}

export default Footer
