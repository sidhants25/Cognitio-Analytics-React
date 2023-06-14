import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/CA.png'
import './App.css'
import React from 'react';
import Question from './Question';
import TextArea from './TextArea';
import Checkbox from './Checkbox';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/submitted" element ={<div>Successfully Submitted</div>} />
    </Routes>
  );
}


export default App;

