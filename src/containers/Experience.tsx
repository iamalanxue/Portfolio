import { Typography, Grid } from '@mui/material'; 
import IEEE from '../common/img/ieee.jpg';
import Relayr from '../common/img/relayr.jpg'; 
import Item from '../components/Item'; 

const Experience = () => {
  return (
    <div className="experience">
      <Typography variant="h1">
        Current Projects 
      </Typography>
      <div className="border"></div>
      <div className="container">
        <Item xs={6} md={5} xs2={6} md2={7} img={IEEE}/>
        <Item xs={6} md={5} xs2={6} md2={7} img={Relayr}/>
      </div>
    </div>
  )
}

export default Experience; 
