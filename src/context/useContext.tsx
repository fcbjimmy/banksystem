import { createContext, useState, useContext, useEffect, FC, ReactNode } from 'react';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';

interface props {
  children: ReactNode;
}

const userContext = createContext<void | object | null | any>(null);

const useUserContext = () => useContext(userContext);

const googleProvider = new GoogleAuthProvider();

const UserContextProvider: FC<props> = ({ children }) => {
  const [user, setUser] = useState<string | object>({});
  const [loading, setLoading] = useState<boolean | undefined>();
  const [error, setError] = useState<string>('');
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [gmail, setGmail] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (account) => {
      if (account) {
        const gmailUser = { ...account, isLogged: true };
        setUser(gmailUser);
        setGmail(true);
      }
      setError('');
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithGmail = (): void => {
    signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    signOut(auth);
  };

  const toggleModal = () => setErrorModal(!errorModal);

  return (
    <userContext.Provider
      value={{
        user,
        loading,
        error,
        errorModal,
        gmail,
        setUser,
        signOutUser,
        setError,
        signInWithGmail,
        toggleModal,
        setErrorModal,
        setGmail,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export { useUserContext, userContext, UserContextProvider };
