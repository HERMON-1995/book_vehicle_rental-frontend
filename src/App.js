import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage';
// import Error from './pages/Error';
import HomePage from './pages/HomePage';
import ProtectedRoute from './pages/ProtectedRoute';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Vehicles from './pages/Vehicles';
import ReserveForm from './pages/ReserveForm';
import Reservations from './pages/Reservations';
import AddVehicle from './pages/AddVehicle';
import RemoveVehicle from './pages/RemoveVehicle';

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            )}
          />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/reseve-form" element={<ReserveForm />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/remove-vehicle" element={<RemoveVehicle />} />
          <Route path="/register" element={<LoginPage />} />
          {/* <Route path="/*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
