import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import './App.css';
import Gallery from './GalleryComponent';

function App() {
  return (
    <div style={{backgroundColor: "#ebf8ff", height: "100vh"}}>
      <div className="row justify-content-center" style={{ backgroundColor: "#2c5282", width: "100%", position: "fixed" }}>
        <h3>Gallery</h3>
      </div>
      <Gallery />
      <div className="row justify-content-center"  style={{ backgroundColor: "#2c5282", bottom: 0, width: "100%", position: "fixed" }}>
        <h3>Fullstack Challenge - 2020</h3>
      </div>
    </div>
  );
}

export default App;
