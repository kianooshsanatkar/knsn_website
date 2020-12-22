import React from 'react'
import Grid from '@material-ui/core/Grid'

import './common.style.css'


export const Empty = (params) => {
    return <Grid container>
        <Grid item sm={3} className={'second-left-side '+ (params.half?'empty-left-side-half ':'empty-left-side ')+ params.className}>
        </Grid>
        <Grid item sm={9}>
        </Grid>
    </Grid>
}