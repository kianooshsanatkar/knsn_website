import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MeChildish from "../../assets/Images/Me-Child.jpg";

import "./common.style.css";

export const Bio = (params) => {
  return (
    <section id="section_abou">
      <Grid container>
        <Grid item sm={3} className="second-left-side">
          <Typography variant="h3" className="left-side-text">
            <span>____ </span> A bit About Me
          </Typography>
        </Grid>
        <Grid item sm={1}>
          <div className="middle-circle">
            <img src={MeChildish} alt="Kianoosh Sanatkar" />
          </div>
        </Grid>
        <Grid item sm={8}>
          <Typography variant="body1" align="left">
            I clearly remember that when I was a little boy I believed that
            computers could answer all the questions that we ever needed to know
            but the catch was how to ask the right question. and my very first
            question was “how dinosaurs became extinct” for hours and hours each
            day while I playing with my old man stuffs (my father was an
            electronic technician) and trying to tear down things and make
            something else I dreamed that one day I will find the answer :))
            <br />
            Finally I got the answer but I had forgotten my dream. Luckily the
            dream didn’t forget me, it came to me again and again till it led my
            path to the software industry. For sure the software industry isn’t
            quite like the dream that I had (it’s hell of a hard job :D) but
            well it’s somehow my dreamy job. And for finding our answers!! well
            as people says “Try google” :))
            <br />
            So yes I develop software and as I put my hands on software
            architecting I try to learn data science and machine learning to do
            some cool stuff.
            <br />I was born at dawn on a hot sunny day on august 17th 1988, for
            sure I wasn’t born a software developer but hell yeah I was born as
            an enthusiastic geek.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};
