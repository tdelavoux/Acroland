import { useState } from 'react'
import { NavTop } from '/src/sections/Index/NavTop.jsx'
import { Header } from '/src/sections/Index/Header.jsx'
import { Cards } from '/src/sections/Index/Cards.jsx'
import { Activites } from '/src/sections/Index/Activites.jsx'
import { Logement } from '/src/sections/Index/Logement.jsx'
import { Access } from '/src/sections/Index/Access.jsx'
import { Footer } from '/src/sections/Index/Footer.jsx'

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

function Index() {

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

export default Index