import './App.css'
import Header from './Components/Header'
import { Link, Routes, Route } from 'react-router-dom'
import Hero from './Components/Hero'
import Companies from './assets/companies.png'
import Grid from './Components/Grid'
import Users from './Components/Users'
import Blog from './Blog'
import Footer from './Components/Footer'
import Features from './Features'
import Payments from './Components/Payments'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Hero/>
            <div className="next">
              <br />
              <br />
              <br />
              <br />
              <br />
              <p style={{textAlign: 'center', color: '#5E5E5E', fontWeight: '700'}}>TRUSTED BY THE BEST IN THE INDUSTRY</p>
              <br />
              <div className="pics">
                <img src={Companies} style={{width: '100%'}} alt="" />
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <button id='fea'>Features</button>
              <br />
              <h1 id='h'>Manage Everything Like a Pro</h1>
              <br />
              <p id='ph'>Team 1 is a powerful managment tool that helps you <br /> test, create and organize all your required things in one place.</p>
              <br />
              <br />
              <br />
              <br />
              <Grid/>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <button id='fea'>Costumers</button>
              <br />
              <h1 id='h' style={{textAlign: 'center', fontWeight: '600'}}>What our users are saying</h1>
              <br />
              <p id='ph'>Here's what some of our users have to say about Team 1</p>
              <br />
              <br />
              <br />
              <Users/>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Footer/>
            </div>
          </>
        } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/features" element={<Features />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </>
  )
}

export default App
