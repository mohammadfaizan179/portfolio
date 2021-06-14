import React from 'react'
import {Typography} from "@material-ui/core";

const Footer = () => {
    return (
        <>
            <div style={{display: "flex", textAlign:"center", justifyContent:"center", backgroundColor:"#222023", color:"#ffffff", backgroundImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(33, 150, 243))"}}>
                <Typography style={{fontFamily:"Noto Serif, serif"}}>CopyRight<sup>©️</sup> by Muhammad Faizan </Typography>
            </div>
        </>
    )
}

export default Footer
