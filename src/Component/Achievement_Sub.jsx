import React from 'react'
import "../Styles/Achievements.css";
import {ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Achievement_Sub = ({ach}) => {
    return (
        <>
            <ListItem>
                <ListItemIcon>
                    <ArrowForwardIcon color="secondary"/>
                </ListItemIcon>
                <ListItemText className="achListItemText" primary={<Typography variant="body1">{ach}</Typography>}/>
            </ListItem>              
        </>
    )
}

export default Achievement_Sub
