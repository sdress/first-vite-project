import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import Project from './components/ImgSlider';
import Header from './components/Header';
import ImgSlider from './components/ImgSlider';
import Contact from './components/Contact';

function App() {

  return (
    <div className='App' id='root'>
      <Header />

      <div id='body'>


      <div id="carouselExample" className="carousel slide" data-ride="carousel">
      <h1>Project Examples:</h1>
        <div className="carousel-inner">

          <div className="carousel-item active">
            <ImgSlider image1={"src/assets/before2edited.jpg"} image2={"src/assets/after2edited.jpg"} alt="Second Before and After comparison with image slider" className="d-block w-100" />
          </div>

          <div className="carousel-item">
            <ImgSlider image1={"src/assets/before1.webp"} image2={"src/assets/after1edited.jpg"} alt="First Before and After comparison with image slider" className="d-block w-100" />
          </div>

          <div className="carousel-item">
            <ImgSlider image1={"src/assets/before2edited.jpg"} image2={"src/assets/after2edited.jpg"} alt="Second Before and After comparison with image slider" className="d-block w-100" />
          </div>

          {/* <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Third slide" />
          </div> */}
          
        </div>
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev" data-target="#carouselExample">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next" data-target="#carouselExample">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div id='contact'>
        <Contact />
      </div>

      </div>
    </div>
  );
}

export default App;
