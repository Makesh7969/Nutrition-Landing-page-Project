import React from 'react'
import { BrowserRouter as Router,Route, Routes }
    from 'react-router-dom';
import './App.css';
import { HomePage } from './views/HomePage';
import { ImagePage } from './views/ImagePage';
import { PostImage } from './views/PosterImage';
  
function App() {
  return (
  
     <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/image' element={<ImagePage />}/>
        <Route path='/poster' element={<PostImage/>}/>
      </Routes>
    </Router>
);
  
}
  
export default App;