import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  LinkedIn,
  Twitter,
  Instagram,
  Phone,
  PhoneAndroid,
  Email,
  AccountCircle,
} from "@material-ui/icons";

export const Contact = (params) => {
  return (
    <Grid container style={{ color: "#c4e8ff" }}>
      <Grid item sm={3} className="second-left-side">
        <Typography variant="h3" className="left-side-text">
          <span>____ </span> Contact
        </Typography>
      </Grid>
      <Grid item sm={1}>
        <div className="middle-circle background-color-secondary border-color-secondary">
            <AccountCircle style={{fontSize:'150px', margin:'-5px', color:"white"}} />
        </div>
      </Grid>
      <Grid item sm={8}>
          <ContactInfo Icon={<PhoneAndroid/>}>+98 91 22 89 77 35</ContactInfo>
          <ContactInfo Icon={<Phone/>}>+98 21 22 44 72 95</ContactInfo>
          <ContactInfo Icon={<Email/>}>Me@KnSn.ir</ContactInfo>
          <ContactInfo Icon={<LinkedIn/>}>linkedin.com/kianooshsanatkar</ContactInfo>
          <ContactInfo Icon={<Twitter/>}>twitter.com/kianooshsnk</ContactInfo>
          <ContactInfo Icon={<Instagram/>}>instagram.com/kianooshsanatkar</ContactInfo>
      </Grid>
    </Grid>
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
