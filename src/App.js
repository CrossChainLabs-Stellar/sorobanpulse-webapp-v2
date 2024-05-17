import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useState } from 'react';

import Header from "./components/Header";
import SorobanBox from './components/SorobanBox';
import giveTheme from './components/Theme';
import Footer from './components/Footer';

import DAppsPage from './components/DAppsPage';
import HighlightsPage from './components/HighlightsPage';
import Metrics from './components/Metrics';


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
        <div
          className={mode === 'light' ? 'circles_light' : 'circles_dark'}
        >
          <CssBaseline />
          <Header />
          <SorobanBox value={value} handleChange={handleChange} mode={mode} setMode={setMode} />
          {value === 0 && <HighlightsPage />}
          {value === 1 && <Metrics />}
          {value === 2 && <DAppsPage />}

          <Footer />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
