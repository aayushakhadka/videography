import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Intro } from "./components/Intro";
import { Project } from "./components/projects/Project";
import { Peoplesays } from "./components/Peoplesays";
import { Hireme } from "./components/Hireme/Hireme";
import {Faqs} from './components/Faqs'


function App() {
  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <Intro/>
      <Project/>
      <Peoplesays/>
      <Faqs/>
      <Hireme/>
    </div>
  );
}

export default App;
