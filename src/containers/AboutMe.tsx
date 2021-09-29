import { Typography } from '@mui/material';
import ME from '../common/img/me.jpg'; 

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="img-container">
        <img src={ME} alt="Profile Image" />
      </div>
      <div className="text">
        <Typography variant="h2">the sky, the mountain, the tree...</Typography>
        <div className="border"></div>
        <Typography variant="h3">I grew up in Chicago and recently graduated with a Degree in Mechanical Engineering at Northwestern. 
        During my time in college, I got interested in Computer Science my junior year and developed an interest for it. This interest has led me to venture towards a different career path and pursue a career as a Full-Stack Developer. I have no idea what lies ahead, but I have taken the first steps through projects and self-studying. I have recently finished my internship at Relayr as a Full-Stack Dev and grew a passion for web-dev. I decided I want to learn more about this profession, and follow my heart and intuition. After all, they somehow already know what you truly want to become 😄. Everything else is secondary. </Typography>
      </div>
    </div>
  )
}

export default AboutMe; 