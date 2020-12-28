/* eslint-disable import/no-anonymous-default-export */
import { Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import {Empty} from './empty.component'

import "./common.style.css";


export default (params) => {
  return (
    <section style={params.style} id={params.id}>
        {params.startEmpty?<Empty className={params.contact?'border-color-secondary ':''} />:null}
      <Grid container className= 'section-container'>
        <Grid item xs={12} md={3} className={(params.contact?'border-color-secondary ':' ') + " second-left-side"}>
            <Typography variant="h3" className="left-side-text">
                <Hidden smDown><span style={{padding:'0 .5em', marginLeft:'1em', verticalAlign:'super'}}> __ </span></Hidden>  { params.title}
            </Typography>
        </Grid>
        <Grid item className='small-icon-image' xs={12} md={1}>
          <div className={params.symbolClasses+" middle-circle"}>{params.symbol}</div>
        </Grid>
        <Grid item xs={12} md={8}>{params.children}</Grid>
        {!params.startEmpty?<Empty className={params.contact?'border-color-secondary ':''} />:null}
      </Grid>
    </section>
  );
};
