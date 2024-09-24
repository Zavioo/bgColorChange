import './App.css'
import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const changeColor = (color) => {
    setBgColor(color);
  }

  return (
    <>
      <div id="changeColor" style={{backgroundColor: bgColor}}>
        <h1>CLICK TO CHANGE BACKGROUND COLOR</h1>
        <div>
          <button className="btn" onClick={() => changeColor('#b6aaea')} style={{backgroundColor:"#b6aaea"}}></button>
          <button className="btn" onClick={() => changeColor('#ffe0e9')} style={{backgroundColor:"#ffe0e9"}}></button>
          <button className="btn" onClick={() => changeColor('#c4d7f1')} style={{backgroundColor:"#c4d7f1"}}></button>
          <button className="btn" onClick={() => changeColor('#faebd7')} style={{backgroundColor:"#faebd7"}}></button>
          <button className="btn" onClick={() => changeColor('#eeece5')} style={{backgroundColor:"#eeece5"}}></button>
        </div>
      </div>
    </>
  )
}

export default App
