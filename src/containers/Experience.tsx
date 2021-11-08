import { Typography, Grid, Link } from '@mui/material'; 
import IEEE from '../common/img/ieee.jpg';
import Relayr from '../common/img/relayr.jpg'; 
import Header from '../components/Header'; 

const Experience = () => {
  const title = "Current Projects"; 
  const caption = "My journey to transition from an Engineer to a Software Developer 😄. More to come!";
  return (
    <div className="experience">
      <Header title={title} caption={caption} />
      <div id="experience-container">
      <Grid container spacing={3} wrap="wrap">
        <Grid item xs={6} md={4}>
          <div className="item-img"> 
            <img src={Relayr} alt="Relayr Logo" />
          </div>
        </Grid>
        <Grid item xs={6} md={7}>
          <Link href="https://relayr.io/" underline="none" target="_blank" rel="noopener">Relayr Inc. </Link>
          <br />
          <Typography>Full Stack Developer Intern, Jun 2021 - Sep 2021</Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur quibusdam provident doloribus recusandae porro nulla est ratione? Consequatur corporis at quia sint suscipit, totam eius fuga recusandae quidem veniam!
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <div className="item-img">
            <img src={IEEE} alt="IEEE Logo" />
          </div>
        </Grid>
        <Grid item xs={6} md={7}>
          <Link href="https://ieee.northwestern.edu/" underline="none" target="_blank"    rel="noopener">Institute of Electrical and Electronics Engineers</Link>
          <br />
          <Typography>Machine Learning BackEnd Lead Member, Dec 2021 - Jun 2021</Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur quibusdam provident doloribus recusandae porro nulla est ratione? Consequatur corporis at quia sint suscipit, totam eius fuga recusandae quidem veniam!
          </Typography>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default Experience; 
