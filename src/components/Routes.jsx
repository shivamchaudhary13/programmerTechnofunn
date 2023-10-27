import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import { Login } from './Login/Login'
import { Register } from './Register/Register'
import { Main } from './Main/Main'
import { Splash } from './Splash/Splash'
import { htmlTutorials } from './CoursePage/CoursePage'
import { cssTutorials } from './CoursePage/CoursePage'
import { javascriptTutorials } from './CoursePage/CoursePage'
import { angularTutorials } from './CoursePage/CoursePage'
import { reactTutorials } from './CoursePage/CoursePage'
import { HtmlOnlineTest } from './OnlineTests/HtmlOnlineTest'
import { CssOnlineTest } from './OnlineTests/CssOnlineTest'
import { JsOnlineTest } from './OnlineTests/JsOnlineTest'
import { AngularOnlineTest } from './OnlineTests/AngularOnlineTest'
import { ReactOnlineTest } from './OnlineTests/ReactOnlineTest'
import { TutsTopics } from './TutsTopics/TutsTopics'
import { HtmlIntro } from './Tutorials/HtmlTuts'

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
                <Route path='/html-online-test' Component={HtmlOnlineTest}></Route>
                <Route path='/css-online-test' Component={CssOnlineTest}></Route>
                <Route path='/js-online-test' Component={JsOnlineTest}></Route>
                <Route path='/angular-online-test' Component={AngularOnlineTest}></Route>
                <Route path='/react-online-test' Component={ReactOnlineTest}></Route>
                <Route path='/html-tutorial' Component={TutsTopics}></Route>
                <Route path='/intoduction' Component={HtmlIntro}></Route>
                {/* <Route path='/html-tutorial' Component={TutsTopics}></Route>
                <Route path='/html-tutorial' Component={TutsTopics}></Route>
                <Route path='/html-tutorial' Component={TutsTopics}></Route>
                <Route path='/html-tutorial' Component={TutsTopics}></Route> */}
            </Routes>
        </Router>
  )
}
