import React from 'react'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToDosPage } from './pages/ToDosPage'
import { AboutPage } from './pages/AboutPage'

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route component={ToDosPage} path='/' exact />
          <Route component={AboutPage} path='/about' />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
