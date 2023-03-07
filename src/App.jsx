import { useState } from 'react'
import { NavTop } from './sections/NavTop.jsx'
import { Header } from './sections/Header.jsx'
import { Cards } from './sections/Cards.jsx'
import { Activites } from './sections/Activites.jsx'
import { Logement } from './sections/Logement.jsx'
import { Access } from './sections/Access.jsx'
import { Footer } from './sections/Footer.jsx'

// 1. import `NextUIProvider` component
import { NextUIProvider, createTheme } from '@nextui-org/react';

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#154a43',
      secondary: '#b0d6a7',
    },
    space: {},
    fonts: {}
  }
})

import './App.css'

function App() {

  return (
    <NextUIProvider theme={theme}>
      <div className="App">
        <NavTop />
        <Header />
        <Cards />
        <Activites />
        <Logement />
        <Access />
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default App