import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/Experience' element={<Experience/>}/>
        <Route path='/About us' element={<Aboutus/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Certifications' element={<Certifications/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Hobbies' element={<Hobbies/>}/>
        
      </Routes>
      
    </div>
    
  );
}

export default App;
