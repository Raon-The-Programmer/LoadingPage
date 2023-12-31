import { useEffect,useState } from 'react'
import LOGO from "./assets/LOGO.svg"
import './App.css'
import {Power3} from 'gsap'


function App() {
  const [charging,setCharging] = useState(true)
  useEffect(() => {
    const loadingPage = document.getElementById("loading-page");
    const loader = document.getElementById("loader");
    const lastray = document.getElementById("lastray");
    const body = document.body;

    setTimeout(() => {
      loadingPage.classList.add("loaded");
      loader.classList.add("opzero");
      lastray.classList.add("finalray");
      body.classList.add("whitebk");
      
    }, 6000);
  }, []);


  return (
<div>
      <div className="container">
      <h1 className='Head'>MAIN PAGE</h1>
      </div>
      <div id="loading-page">
        <div id="loader">
          <div className="particles element">
            <div className="spark1 spark element"><div className="particle1 particle element"></div></div>
            <div className="spark2 spark element"><div className="particle2 particle element"></div></div>
            <div class="spark3 spark element"><div class="particle3 particle element"></div></div>
          <div class="spark4 spark element"><div class="particle4 particle element"></div></div>
          <div class="spark5 spark element"><div class="particle5 particle element"></div></div>
          <div class="spark6 spark element"><div class="particle6 particle element"></div></div>
          <div class="spark7 spark element"><div class="particle7 particle element"></div></div>
          <div class="spark8 spark element"><div class="particle8 particle element"></div></div>
          <div class="spark9 spark element"><div class="particle9 particle element"></div></div>
          <div class="spark10 spark element"><div class="particle10 particle element"></div></div>
          <div class="spark11 spark element"><div class="particle11 particle element"></div></div>
          <div class="spark12 spark element"><div class="particle12 particle element"></div></div>
          </div>
          <div className="ray element"></div>
          <div className="sphere element">
          {charging && <div className="battery"><img src={LOGO} alt="" /></div>}
          </div>
        </div>
      </div>
      <div id="lastray" className="element"></div>
    </div>
  )
}

export default App
