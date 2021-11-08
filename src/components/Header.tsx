import { FC } from 'react'; 
import { Typography } from "@mui/material";

type Props = {
  title: string; 
  caption: string; 
}

const Header: FC<Props> = ({
  title,
  caption, 
}) => {
  return (
    <div className="header">
      <Typography variant="h1">
        {title}
      </Typography>
      <div className="border"></div>
      <Typography variant="caption">
        {caption}
      </Typography>
    </div>
  )
};

export default Header; 