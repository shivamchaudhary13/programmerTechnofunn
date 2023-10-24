import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import { Login } from './Login/Login'
import { Register } from './Register/Register'
import { Main } from './Main/Main'
import { Splash } from './Splash/Splash'
import { htmlTutorials } from './Tutorials/Tutorials'
import { cssTutorials } from './Tutorials/Tutorials'
import { javascriptTutorials } from './Tutorials/Tutorials'
import { angularTutorials } from './Tutorials/Tutorials'
import { reactTutorials } from './Tutorials/Tutorials'

export const Navigation = () => {
  return (
        <Router>
            <Routes>
                <Route exact path='/' Component={Splash}></Route>
                <Route exact path='/Home' Component={Main}></Route>
                <Route path='/login' Component={Login}></Route>
                <Route path='/register' Component={Register}></Route>
                <Route path='/html' Component={htmlTutorials}></Route>
                <Route path='/css' Component={cssTutorials}></Route>
                <Route path='/javascript' Component={javascriptTutorials}></Route>
                <Route path='/angular' Component={angularTutorials}></Route>
                <Route path='/react' Component={reactTutorials}></Route>
            </Routes>
        </Router>
  )
}
