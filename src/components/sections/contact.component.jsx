import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
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

export const Contact = (params) => {
  return (
    <Section
      contact
      startEmpty
      id={params.sectionId}
      className="secondary-theme"
      title="Contact"
      symbolClasses="background-color-secondary border-color-secondary"
      symbol={
        <Hidden smDown>
          <AccountCircle
            style={{ fontSize: "150px", margin: "-5px", color: "white" }}
          />
        </Hidden>
      }
    >
      <ContactInfo Icon={<PhoneAndroid />}>+98 91 22 89 77 35</ContactInfo>
      <ContactInfo Icon={<Phone />}>+98 21 22 44 72 95</ContactInfo>
      <ContactInfo Icon={<Email />}>
        <a href="mailto:Me@KnSn.ir">Me@KnSn.ir</a>
      </ContactInfo>
      <ContactInfo Icon={<GitHub />}>
        <a href="https://github.com/kianooshsanatkar">
          github.com/kianooshsanatkar
        </a>
      </ContactInfo>
      <ContactInfo Icon={<LinkedIn />}>
        <a href="https://linkedin.com/kianooshsanatkar">
          linkedin.com/kianooshsanatkar
        </a>
      </ContactInfo>
      <ContactInfo Icon={<Twitter />}>
        <a href="https://twitter.com/kianooshsnk">twitter.com/kianooshsnk</a>
      </ContactInfo>
      <ContactInfo Icon={<Instagram />}>
        <a href="https://instagram.com/kianooshsanatkar">
          instagram.com/kianooshsanatkar
        </a>
      </ContactInfo>
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
