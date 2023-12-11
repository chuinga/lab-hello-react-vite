import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ironhackLogoXs from './assets/ironhack-logo-xs.png'
import menuTopXs from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='upperContainer'>
        <div className='Navbar'>
          <img src={ironhackLogoXs} alt="IronhackLogoXs" />
          <img src={menuTopXs} alt="menuTopXs" />
        </div>
        <div className='mainText'>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and become a super Ninja developer.
          </p>
          <button>Awesome!</button>
          </div>
      </div>
      <div className='mainContainer'>
        <div className='declarative'>
          <img src={icon1} alt="icon1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='components'>
          <img src={icon2} alt="icon2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className='single-way'>
          <img src={icon3} alt="icon3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values aree passed to the components.</p>
        </div>
        <div className='jsx'>
          <img src={icon4} alt="icon4" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
          
    </div>    
  );
}

export default App
