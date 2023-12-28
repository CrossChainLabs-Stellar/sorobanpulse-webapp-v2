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
        <CssBaseline />
        <Header />
        <SorobanBox value={value} handleChange={handleChange} />
        {value === 0 && <DAppsPage />}
        {value === 1 && <HighlightsPage />}
        {value === 2 && <Metrics />}

        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
