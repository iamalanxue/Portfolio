import { FC } from 'react'; 
import { Grid, GridSpacing, Paper, Typography } from '@mui/material'; 
import { GridSize } from '../common/types';

type Props = {
  xs: GridSize; 
  md: GridSize;
  xs2: GridSize; 
  md2: GridSize; 
  img: string; 
  text?: string; 
}; 

const Item: FC<Props> = ({ xs, md, xs2, md2, img, text }) => {
  return(
    <Grid container spacing={2}>
      <Grid item xs={xs} md={md}>
        <img src={img} alt="Relayr" />
      </Grid>
      <Grid item xs={xs2} md={md2}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem explicabo beatae perferendis quis corrupti animi ipsa at! Nulla nihil modi dignissimos ipsa explicabo, eum, magnam quos quidem quisquam quasi nemo.
        </Typography>
      </Grid>
    </Grid>
  )
};

export default Item; 
