import React from 'react'
import './App.scss';
import { Header, About, Skills, Works, Footer } from './container';
import {Navbar} from './components'

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Works />
        <Footer />
    </div>
  )
}

export default App