import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage';
// import Error from './pages/Error';
import HomePage from './pages/HomePage';
import ProtectedRoute from './pages/ProtectedRoute';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
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
          <Route path="/register" element={<LoginPage />} />
          {/* <Route path="/*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
