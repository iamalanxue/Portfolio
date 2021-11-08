import './App.css';
import AboutMe from './containers/AboutMe';
import HomePage from './containers/HomePage';
import { CssBaseline } from '@mui/material';
import Experience from './containers/Experience';
import Photography from './containers/Photography';

function App() {
  return (
    <div className="App">
      <div className="content">
        <CssBaseline />
        <HomePage />
        <div className="details">
          <AboutMe />
          <Experience /> 
          <Photography />
        </div>
      </div>
    </div>
  );
}

export default App;
