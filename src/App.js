import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { useState } from 'react';

import Header from "./components/Header";
// import SorobanBox from './components/SorobanBox';
import giveTheme from './components/Theme';
import Footer from './components/Footer';

import DAppsPage from './components/DAppsPage';
import HighlightsPage from './components/HighlightsPage';
import Metrics from './components/Metrics';
import StellarPage from './components/StellarPage';


function App() {
  const [mode, setMode] = useState('light');
  const [value, setValue] = useState(0);


  const theme = giveTheme(mode);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.scrollTo(0, 0);
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme} >
        <div
          className={mode === 'light' ? 'circles_light' : 'circles_dark'}
        >
          <CssBaseline />
          <Header value={value} handleChange={handleChange} mode={mode} setMode={setMode} />
          {/* <SorobanBox value={value} handleChange={handleChange} mode={mode} setMode={setMode} /> */}
          <Box
            sx={{
              paddingX: {
                xxl: '24rem',
                xl: '24rem',
                lg_xl: '24rem',
                lg: '4rem',
                md: '4rem',
                sm: '2rem',
                xs: '2rem'
              },
            }}
          >
            {value === 0 && <DAppsPage />}
            {value === 1 && <Metrics />}
            {value === 2 && <StellarPage />}
            {value === 3 && <HighlightsPage />}
          </Box>
          <Footer />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
