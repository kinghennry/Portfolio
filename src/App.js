import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Contact, Projects, Hero, Nav, Skills } from './components'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <Switch>
          <Route path='/contact' element={<Contact />} />
        </Switch>
        <Contact />
        <Footer />
      </Router>
    </>
  )
}

export default App
