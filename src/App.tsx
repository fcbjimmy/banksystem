import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Errorpage } from './pages/Errorpage';
import Modal from './components/UI/Modal';
import { useUserContext } from './context/useContext';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  // const [loginError, setLoginError] = useState<string>('');

  const { error, user, toggleModal, errorModal } = useUserContext();

  useEffect(() => {}, [error, errorModal, user]);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
      </Router>
      <button onClick={toggleModal}>open</button>
      {errorModal && <Modal />}
      {user && Dashboard}
    </div>
  );
}

export default App;
