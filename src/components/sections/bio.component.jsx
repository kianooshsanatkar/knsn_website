import React from "react";
import Typography from "@material-ui/core/Typography";
import MeOrigin from "../../assets/Images/Me-Origin.jpg";
import Section from "./section.component";

import "./common.style.css";

export const Bio = (params) => {
  return (
    <Section
      id={params.sectionId}
      title="A bit About Me"
      symbol={<img src={MeOrigin} alt="Kianoosh Sanatkar" />}
    >
      <Typography variant="body1" align="left">
        I can clearly remember, when I was a little boy I believed that
        computers could answer all the questions that we ever needed to know but
        the catch was how to ask the right question. and my very first question
        was “how dinosaurs became extinct” for hours and hours each day while I
        playing with my old man stuffs (my father was an electronic technician)
        and trying to tear down things and make something up I dreamed that one
        day I will find the answer :))
        <br />
        Finally I aware of the hypothetical answers but I had forgotten my dream
        "The Computer". Luckily the dream didn’t forget me, it came to me again
        and again till it led my path to the software industry. For sure the
        software industry isn’t quite like the dream I had (it’s hell of a
        hard work :D) but well it’s somehow my dreamy job. And for finding our
        answers!! well as people says “Try google” :))
        <br />
        So yes I develop software and as I hold my hands on software engineering
        I try to learn data science and machine learning to do some cool stuff.
        <br/>
        <br />I was born at dawn on a hot sunny day on 17th august 1988, for
        sure I wasn’t born a software developer but hell yeah I was born as an
        enthusiastic geek.
      </Typography>
    </Section>
  );
};
