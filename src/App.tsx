import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Errorpage } from './pages/Errorpage';
import Modal from './components/UI/Modal';
import { useUserContext } from './context/useContext';
import Dashboard from './components/dashboard/Dashboard';
import ProtectedRoutes from './protectedroutes/ProtectedRoutes';
import { json } from 'stream/consumers';

function App() {
  const { user, error, toggleModal, errorModal, setUser, signOutUser } = useUserContext();

  useEffect(() => {}, [user]);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={user?.isLogged ? <Navigate to='/dashboard' /> : <Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Errorpage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
      {errorModal && <Modal />}
    </div>
  );
}

export default App;
