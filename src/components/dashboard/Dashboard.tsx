import { FC } from 'react';
import { useUserContext } from '../../context/useContext';
import Button from '.././UI/Button';

interface Props {}

const Dashboard: FC<Props> = () => {
  const { user, setUser, gmail, setGmail, signOutUser } = useUserContext();

  const handleLogout = () => {
    setUser({});
    localStorage.removeItem('user');
  };

  const handleLogoutForGmail = () => {
    setGmail(false);
    signOutUser();
    setUser({});
  };

  return (
    <>
      <div>Hi {user.first_name}!</div>
      <Button onClick={gmail ? handleLogoutForGmail : handleLogout}>Logout</Button>
    </>
  );
};

export default Dashboard;
