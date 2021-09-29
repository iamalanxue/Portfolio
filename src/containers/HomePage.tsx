import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
})

const HomePage = () => {
	const classes = useStyles(); 

	return(
		<div className="landing-page">
			<div className="introduction">
				<Typography variant="caption">Green is the Prime Color of the World</Typography>
				<div className="caption">
					<Typography variant="body1">Hello!</Typography>
					 <Typography variant="body1">I'm Alan Xue</Typography>{/*, a Full Stack Developer interested in web-dev and AI */}
				</div> 
			</div>
		</div>    
	)
}

export default HomePage; 