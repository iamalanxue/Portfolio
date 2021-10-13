import { Typography } from "@mui/material";
import Header from '../components/Header';

const Photography = () => {
  const title = "While I am not learning about web-dev you can catch me traveling and learning photography";
  const caption = "Here are some of my shots I have taken.";
  return (
    <div className="photography">
      <Header title={title} caption={caption}/>
    </div>
  )
}

export default Photography; 
