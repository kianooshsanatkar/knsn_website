import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

export const Experiences = (params) => {
  return (
    <Grid container>
      <Grid item sm={3} className="second-left-side">
        <Typography variant="h3" className="left-side-text">
          <span>____ </span> Experiences
        </Typography>
      </Grid>
      <Grid item sm={1}>
        <div className="middle-circle">
          <AssignmentTurnedInIcon
            style={{ fontSize: "100px", marginTop: "20px" }}
          />
        </div>
      </Grid>
      <Grid item sm={8}>
        <Typography variant="body1" align="left">
          <strong>Study:</strong> Architectures patterns and practices, Java, Haskell, Python,
          Python frameworks, and patterns, review some fundamental concepts, etc. 
          <br/>
          <br/>
          <strong>Inner-Journey:</strong> traveling, reading, thinking, moving to another
          city, solidarity, etc. 
          <br/>
          <br/>
          <strong>* Barid Soft:</strong> Developing H.R.M. and Office
          Automation Software as a full stack developer. <br/>
          Service-oriented domain-driven-design based on MSMQ. CQRS and
          Asynchronous Rest APIs, Unit of Work and Repository pattern, TDD, 
          Angularjs, .net C# NHibernate and Oracle.<br/> 
          Customers of the company were the Presidential
          Administration, the Ministry of Urban and Road Development, Ministry
          of Education, and about 1200 other institutions and departments all
          over the country. 
          <br/>
          <br/>
          <strong>Parmis:</strong> developing accounting software as a
          full-stack developer. Technology and patterns and practices that used:
          domain driven design, TDD, Entity Framework, .net C#, Angular,
          TypeScript 
          <br/>
          <br/>
          <strong>My Start-up:</strong> A web base B2B and B2C business model,
          technologies: C# .net webforms, HTML5, CSS3, MSSQL, 
          <br/>
          <br/>
          <strong>Ministry of Energy:</strong> front-end UI and UX developer, working with Flash, Action
          Scripts, and HTML 
          <br/>
          <br/>
          <strong>Arya Electronic:</strong> Start working as an office
          assistant and end up working as an office manager.
        </Typography>
      </Grid>
    </Grid>
  );
};
