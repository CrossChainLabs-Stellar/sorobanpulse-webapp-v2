import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
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
          <Box
            sx={{
              paddingX: {
                xxl: '4.5rem',
                xl: '8rem',
                lg_xl: '8rem',
                lg: '4rem',
                md: '4rem',
                sm: '2rem',
                xs: '2rem'
              },
            }}
          >
            {value === 0 && <HighlightsPage />}
            {value === 1 && <DAppsPage />}
            {value === 2 && <Metrics />}
          </Box>
          <Footer />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
