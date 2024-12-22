import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MiddleDiv from './components/MiddleDiv/MiddleDiv'
import Bottomdiv from './components/BottomDiv/BottomDiv'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Home />
      <MiddleDiv />
      <Bottomdiv />
      <Footer />
    </>
  )
}

export default App
