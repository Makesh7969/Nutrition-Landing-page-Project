import React from 'react'
import { BrowserRouter as Router,Route, Routes }
    from 'react-router-dom';
import './App.css';
import { Contact } from './views/Contact';
import { Feedback } from './views/Feedback';
import { HomePage } from './views/HomePage';
import { ImagePage } from './views/ImagePage';
import { PostImage } from './views/PosterImage';
import { PowerPoint } from './views/PowerPoint';
  
function App() {
  return (
  
     <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/image' element={<ImagePage />}/>
        <Route path='/poster' element={<PostImage/>}/>
        <Route path='/ppt' element={<PowerPoint/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </Router>
);
  
}
  
export default App;