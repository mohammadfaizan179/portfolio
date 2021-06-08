import React from 'react'
import "../Styles/Achievements.css";
import {List, Grid, Typography} from "@material-ui/core";
import Achievement_Sub from "./Achievement_Sub";

const Achievement = ({title, ach_1, ach_2, ach_3, ach_4}) => {
    return (
        <>
        <Grid item xs={12} md={6}>
            <div className="achGridItem">
                <Typography className="achGridItemHead" variant="h5">{title}</Typography>
                <List>
                    <Achievement_Sub ach={ach_1} />
                    <Achievement_Sub ach={ach_2} />
                    <Achievement_Sub ach={ach_3} />
                    <Achievement_Sub ach={ach_4} />         
                </List>
            </div>
        </Grid>
        </>
    )
}

export default Achievement
