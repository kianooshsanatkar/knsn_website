import React from 'react'
import Grid from '@material-ui/core/Grid'

import './common.style.css'


export const Empty = (params) => {
    return <Grid container>
        <Grid item sm={3}>
            <div className={"line " + (params.half?"line-half": "line-full")} ></div>
        </Grid>
        <Grid item sm={9}>
        </Grid>
    </Grid>
}