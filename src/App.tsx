import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Errorpage } from './pages/Errorpage';
import Modal from './components/UI/Modal';

function App() {
  const [error, setError] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {}, [loginError, error]);

  const toggleModal = () => setError(!error);

  const handleLoginError = (error: string): void => {
    setLoginError(error);
  };

  const handleError = (error: boolean): void => {
    setError(error);
  };

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Login onLoginError={handleLoginError} onSetError={handleError} />}
          />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
      </Router>
      <button onClick={toggleModal}>open</button>
      {error && <Modal onToggleModal={toggleModal} loginError={loginError} />}
    </div>
  );
}

export default App;
