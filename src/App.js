import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkTheme';
import { GlobalStyles } from './styles/Globalstyle';
import { lightTheme, darkTheme } from './styles/Themes';
import { Navbar } from './components/navnbar';
import { Route, Routes } from 'react-router-dom';
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './pages/Reports';
import PageAccordion from './pages/PageAccordion';
import Home from './pages/Home';
import Slider from './pages/Slider';
import PageModal from './pages/PageModal';

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Navbar toggleTheme={themeToggler} />
          {/* <Sidebar toggleTheme={themeToggler}/> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/accordion" element={<PageAccordion />} />
            <Route path="/modal" element={<PageModal />} />
            <Route path="/overview" element={<Slider />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/reports/reports1" element={<ReportsOne />} />
            <Route path="/reports/reports2" element={<ReportsTwo />} />
            <Route path="/reports/reports3" element={<ReportsThree />} />
            <Route path="/team" element={<PageAccordion />} />
          </Routes>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
