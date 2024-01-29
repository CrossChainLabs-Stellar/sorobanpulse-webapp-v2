import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import { useState } from 'react';

import Header from "./components/Header";
import SorobanBox from './components/SorobanBox';
import giveTheme from './components/Theme';
import Footer from './components/Footer';

import DAppsPage from './components/DAppsPage';
import HighlightsPage from './components/HighlightsPage';
import Metrics from './components/Metrics';

import Circles from './components/Circles';

import GriSt from './assets/circles/GriSt.svg';
import GriDr from './assets/circles/GriDr.svg';
import GalbenDr from './assets/circles/GalbenDr.svg';
import GablenSt from './assets/circles/GalbenSt.svg';

function App() {
  const [mode, setMode] = useState('light');
  const [value, setValue] = useState(0);


  const theme = giveTheme(mode);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme} >
        {/* <Circles mode={mode} /> */}
        <div
          className='circles'
        >
          <CssBaseline />
          <Header />
          <SorobanBox value={value} handleChange={handleChange} />
          {value === 0 && <DAppsPage />}
          {value === 1 && <HighlightsPage />}
          {value === 2 && <Metrics />}

          <Footer />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
