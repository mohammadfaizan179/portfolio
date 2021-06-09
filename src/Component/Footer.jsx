import React from 'react'
import {Typography} from "@material-ui/core";

const Footer = () => {
    return (
        <>
            <div style={{display: "flex", textAlign:"center", justifyContent:"center", backgroundColor:"#222023", color:"#ffffff", marginTop:"20px"}}>
                <Typography style={{fontFamily:"Noto Serif, serif"}}>CopyRight<sup>©️</sup> by Muhammad Faizan </Typography>
            </div>
        </>
    )
}

export default Footer
