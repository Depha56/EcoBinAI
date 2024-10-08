
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<LandingPage />}/>
      {/* ELEMENT WITH THE SAME HEADER */}
      <Route element={<Sidebar />}>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Route>
    </Routes>
  );
}

export default App;


