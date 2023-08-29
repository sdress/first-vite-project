import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Project from './components/ImgSlider';
import Header from './components/Header';
import ImgSlider from './components/ImgSlider';
import Contact from './components/Contact';

function App() {

  return (
    <div className='App'>
      <Header />

      <h1>Project Examples:</h1>
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
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

      <Contact />
    </div>
  );
}

export default App;
