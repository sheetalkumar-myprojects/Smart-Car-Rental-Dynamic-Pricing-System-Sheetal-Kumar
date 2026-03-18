
import './App.css'
import { Routes, Route } from 'react-router-dom';


import Homepage from './components/homepage';
import ViewVehiclesPage from './components/viewvehiclespage';
import ReservePage from './components/reservepage';
import Insurance from './components/Insurance';

export default function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Homepage />} /> 
     <Route path="/vehicles" element={<ViewVehiclesPage />} />
     <Route path="/reserve/:id" element={<ReservePage/>} />
     <Route path="/insurance" element={<Insurance/>} />
    </Routes>
    </div>
  );
}