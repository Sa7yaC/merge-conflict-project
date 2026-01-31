import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import "./styles/Navbar.css";
import Hero from './components/Hero.jsx';
import Metrics from './components/Metrics.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Hero/>
      <Metrics/>
    </ThemeProvider>
  )
}

export default App
