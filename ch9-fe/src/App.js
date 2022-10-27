import './App.css';
import './landing.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import Login from './pages/login_register';
import Game from './pages/game_detail';
import Profile from './pages/profile';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/landing" element={<Landing/>}/>
      <Route path="/login_register" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/game" element={<Game/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
