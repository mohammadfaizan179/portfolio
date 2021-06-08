import React from 'react'
import "../Styles/Certification.css";
import {Typography, Button} from "@material-ui/core";
import {ListItemIcon, ListItemText} from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Certificate = ({primary, secondary, handleOpenDialog, name, icon}) => {
    return (
        <>
            <ListItemIcon>
                {icon ? <StarBorderIcon color="primary" /> : <ArrowForwardIcon color="secondary"/> } 
            </ListItemIcon>
            <ListItemText 
                primary={<Typography variant="body1">{primary}</Typography>}
                secondary={
                    <>
                        <Typography variant="caption" style={{ color: '#ff6f00' }}>{secondary}</Typography>
                        {secondary && <br />}
                        {name && <Typography variant="caption" style={{ color: '#ffffff' }} onClick={()=> handleOpenDialog(name)} component={Button}><VisibilityIcon color="primary" size="large"/> View Certificate </Typography>}
                    </>
                }
            />                
        </>
    )
}

export default Certificate
