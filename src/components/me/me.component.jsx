import React from "react";
import Grid from "@material-ui/core/Grid";

import "./me.style.css";

import Kianoosh from "../../assets/Images/Me3.png";

export const Me = (params) => {
  return (
    <Grid item container xs={12} justify="center" style={{position:'relative'}}>
      <div className='me-text'>It’s pretty shiny here,<br/> How’s it going over there!?</div>
      <div className='me-img-parent'>
        <img src={Kianoosh} alt="Kianoosh Sanatkar" className="me-image" />
      </div>
    </Grid>
  );
};
