import React from 'react'
import { Footer, Blog, Possibility, WhatGPT3, Header, Features } from './containers';
import { CTA, Brand, Navbar, Feature } from './components';
import './App.css';

const App = () => {
  return (
    <div>
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    </div>
  )
}

export default App