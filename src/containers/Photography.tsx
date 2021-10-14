import { Typography } from "@mui/material";
import Header from '../components/Header';
import Gallery from "react-photo-gallery";
import { photos } from "../common/constants";

const Photography = () => {
  const title = "While I am not learning about web-dev you can catch me traveling and learning photography";
  const caption = "Here are some of my shots I have taken.";
  return (
    <div className="photography">
      <Header title={title} caption={caption}/>
      <Gallery photos={photos} direction={"column"} />
    </div>
  )
}

export default Photography; 
