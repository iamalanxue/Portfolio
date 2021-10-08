import './App.css';
import AboutMe from './containers/AboutMe';
import HomePage from './containers/HomePage';
import { CssBaseline } from '@mui/material';
import Experience from './containers/Experience';

function App() {
  return (
    <div className="App">
      <div className="content">
        <CssBaseline />
        <HomePage />
        <div className="details">
          <AboutMe />
          <Experience /> 
        </div>
      </div>
    </div>
  );
}

export default App;
