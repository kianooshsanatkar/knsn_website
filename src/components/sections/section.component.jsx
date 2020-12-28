/* eslint-disable import/no-anonymous-default-export */
import { Grid } from "@material-ui/core";
import React from "react";
import {Empty} from './empty.component'

import "./common.style.css";


export default (params) => {
  return (
    <section>
      <Grid container>
        <Grid item sm={3} className="second-left-side">{params.title}</Grid>
        <Grid item sm={1}>
          <div className="middle-circle">{params.symbol}</div>
        </Grid>
        <Grid item sm={8}>{params.children}</Grid>
        <Empty />
      </Grid>
    </section>
  );
};
