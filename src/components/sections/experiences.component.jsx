import React from 'react'
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'


export const Experiences = (params) => {
    return (
        <Grid container>
          <Grid item sm={3} className="second-left-side">
            <Typography variant="h3" className="left-side-text">
              <span>____ </span> Experiences
            </Typography>
          </Grid>
          <Grid item sm={1}>
              <div className='middle-circle'>
                <AssignmentTurnedInIcon style={{fontSize:"100px", marginTop:'20px'}} />
              </div>
          </Grid>
          <Grid item sm={8}>
            <Typography variant='body1' align='left'>
              <strong>Services:</strong>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
              ipsa veniam eveniet consectetur, laudantium accusantium voluptas
              corrupti enim, autem doloribus iusto inventore maxime rerum magnam in
              pariatur laborum ea optio. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Architecto ipsa veniam eveniet consectetur,
              laudantium accusantium voluptas corrupti enim, autem doloribus iusto
              inventore maxime rerum magnam in pariatur laborum ea optio.
            </Typography>
          </Grid>
        </Grid>
      );
}
