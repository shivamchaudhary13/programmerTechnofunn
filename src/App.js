import logo from './logo.svg';
import './App.css';
import { Splash } from './components/Splash/Splash';
import { NavbarScreen } from './components/Navbar/Navbar';
import { ImageSlider } from './components/Carousal/Carousal';
import { Purpose } from './components/Purpose/Purpose';
import { Courses } from './components/Courses/Courses';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import {Navigation } from '../src/components/Routes';
import { Main } from './components/Main/Main';

function App() {
  return (
    <>
    {/* <Main></Main> */}
      {/* <Splash></Splash> */}
      <Navigation></Navigation>
    </>
  );
}

export default App;
