import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Me from "../../assets/Images/Services.jpg";

export const Services = (params) => {
  return (
    <div>
      <Grid container>
        <Grid item sm={3} className="second-left-side">
          <Typography variant="h3" className="left-side-text">
            <span>____ </span> I'm into
          </Typography>
        </Grid>
        <Grid item sm={1}>
          <div className="middle-circle">
            <img src={Me} alt="Kianoosh Sanatkar" />
          </div>
        </Grid>
        <Grid item sm={6}>
          
          {/* *************** Items *************** */}
          <InLineList title='Languages:' items={["*Python3", "Java", "GoLang", "C#"]} />

          <InLineList title='DataBases'
            items={["*PostgreSQL", "MySQL", "*MongoDB", "Redis", "GraphDBs"]}
          />

          <InLineList title='Architectures:'
            items={[
              "*Microservices",
              "*Domain-Driven-Design",
              "*Repository-Patterns",
              "*CQRS",
              "*Test-Driven-Development",
              "Event-Driven Architecture",
            ]}
          />

          <InLineList title='Back-end Frameworks:' items={["*Flask", "Django", "*Fast-API", "Spring(java)"]} />
          
          <InLineList title='Front-end frameworks:' items={["*React", "Flutter", "Angular"]} />
          
          <InLineList title='Version Controls:' items={["*Git", "TFS"]} />
          
          <InLineList title='DevOps Tools:' items={["Docker", "Kubernetes"]} />

          <InLineList title='Other Technologies:' items={["GraphQL",]} />

          <br/>
          <br/>
          
          <Typography variant="body1" align="left">
            I just mentioned some technologies and tools that I
            like most to work on, but it doesn’t mean that I would not work on any
            other stuff, please feel free to ask me about any idea or job you
            would like to be done.
          </Typography>

        </Grid>
        <Grid item sm={2}></Grid>
      </Grid>
    </div>
  );
};

const InLineList = (params) => {
  return (
    <div>
      <Typography variant="body2" align="left"><strong>{params.title}</strong></Typography>
      <ul className="my-inline-list">
        {params.items.map((item) => (
          <li key={item}>
            {
              item.startsWith('*')?
              <strong>{item.substr(1)}</strong>:
              item
            }
            </li>
        ))}
      </ul>
      <br/>
    </div>
  );
};
