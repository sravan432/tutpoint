import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// add this import to add bootstrap to your project
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PythonHomePage from './PythonComponent/Layout/PythonLayout';
import JavaHomePage from './JavaComponent/Layout/JavaHomePage';
import WpfHomePage from './CSharpComponents/WPFComponent/layout/WpfHomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path='/*' element={<App />}></Route>
      <Route path="/java/*" element={<JavaHomePage />} ></Route>
      <Route path="/python/*" element={<PythonHomePage />}></Route>
      <Route path="/wpf/*" element={<WpfHomePage />}></Route>
    </Routes>
    
  </BrowserRouter>
);

reportWebVitals();
