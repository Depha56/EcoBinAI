
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import Sidebar from './components/Sidebar';
import Dashboard from './screens/dashboard/Dashboard';
import Report from "./screens/dashboard/report/Report";
import BinLevels from "./screens/dashboard/bin-levels/BinLevels";
import Settings from "./screens/dashboard/settings/Settings";

function App() {
  return (
    <Routes>
      <Route path='/' index element={<LandingPage />}/>
      {/* ELEMENT WITH THE SAME HEADER */}
      <Route path="/dashboard" element={<Sidebar />}>
        <Route index element={<Dashboard />}/>
        <Route path='report' element={<Report />}/>  {/* Accessed at: /dashboard/report  */}
        <Route path='bin-levels' element={<BinLevels />}/>
        <Route path='settings' element={<Settings />}/>
      </Route>
    </Routes>
  );
}

export default App;


