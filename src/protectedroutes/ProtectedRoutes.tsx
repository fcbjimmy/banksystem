import { useUserContext } from '../context/useContext';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  const { user } = useUserContext();
  return user && user.isLogged;
};

function ProtectedRoutes() {
  const isAuth = useAuth();
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoutes;
