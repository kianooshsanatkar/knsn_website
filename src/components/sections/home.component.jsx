import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

import "./home.style.css";

import { Me } from "../me/me.component";

export const Home = (params) => {
  return (
    <Grid
      direction="row-reverse"
      className="home-section"
      container
      justify="center"
      id="section_me"
    >
      <Grid item container sm={6} justify="flex-start">
        <Intro noSpace size='large'>Hi,</Intro>
        <Intro><small>I am</small><br/>Kianoosh<br/>Sanatkar</Intro>
        <Grid item xs={12}>
          <ExpandMoreIcon fontSize="large" />
        </Grid>
      </Grid>
      <Grid item container sm={6}>
        <Me />
      </Grid>
    </Grid>
  );
};

const Intro = (params) => {
  return (
    <Grid item container>
      {params.noSpace ? null : (
        <Hidden smDown>
          <Grid item xs={2}></Grid>
        </Hidden>
      )}
      <Hidden smDown>
        <Grid item xs={12} md={10}>
          <Typography
            style={{ fontFamily: "Bungee Shade" }}
            variant={(()=>{
                console.log(params.size);
                switch (params.size) {
                    case 'small':
                        return 'h4';
                    case 'large':
                        return 'h1';
                    default:
                        return 'h2';
                }
            })()}
            align="left"
          >
            {params.children}
          </Typography>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Hidden smUp>
          <Grid item xs={3}></Grid>
        </Hidden>
        <Grid item xs={9} md={10}>
          <Typography
            style={{ fontFamily: "Bungee Shade", fontWeight: 900 }}
            variant={params.small ? "h6" : "h4"}
            align="left"
          >
            {params.children}
          </Typography>
        </Grid>
      </Hidden>
    </Grid>
  );
};
