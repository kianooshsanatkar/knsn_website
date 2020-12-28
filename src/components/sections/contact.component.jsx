import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden'
import {
  LinkedIn,
  Twitter,
  Instagram,
  Phone,
  PhoneAndroid,
  Email,
  AccountCircle,
  GitHub,
} from "@material-ui/icons";

import Section from "./section.component";
import {Empty} from './empty.component'


export const Contact = (params) => {
  return (
    <Section contact startEmpty
      id={params.sectionId}
      style={{ background: "#333", color: "#c4e8ff" }}
      title="Contact"
      symbolClasses="background-color-secondary border-color-secondary"
      symbol={<Hidden smDown><AccountCircle
            style={{ fontSize: "150px", margin: "-5px", color: "white" }}
          /></Hidden>
      }
    >
      <ContactInfo Icon={<PhoneAndroid />}>+98 91 22 89 77 35</ContactInfo>
      <ContactInfo Icon={<Phone />}>+98 21 22 44 72 95</ContactInfo>
      <ContactInfo Icon={<Email />}>Me@KnSn.ir</ContactInfo>
      <ContactInfo Icon={<GitHub />}>github.com/kianooshsanatkar</ContactInfo>
      <ContactInfo Icon={<LinkedIn />}>
        linkedin.com/kianooshsanatkar
      </ContactInfo>
      <ContactInfo Icon={<Twitter />}>twitter.com/kianooshsnk</ContactInfo>
      <ContactInfo Icon={<Instagram />}>
        instagram.com/kianooshsanatkar
      </ContactInfo>
      <Empty half />
    </Section>
  );
};

const ContactInfo = (params) => {
  return (
    <Grid container>
      <Grid item xs={1}>
        {params.Icon}
      </Grid>
      <Grid item xs={11}>
        <Typography variant="body1" align="left">
          {params.children}
        </Typography>
      </Grid>
    </Grid>
  );
};
