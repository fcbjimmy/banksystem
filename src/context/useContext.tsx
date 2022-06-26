import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  FC,
  ReactNode,
} from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

interface props {
  children: ReactNode;
}

const userContext = createContext<object | null>(null);

const useUserContext = () => useContext(userContext);

const googleProvider = new GoogleAuthProvider();

const UserContextProvider: FC<props> = ({ children }) => {
  const [user, setUser] = useState<null | object>(null);
  const [loading, setLoading] = useState<boolean | undefined>();
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (account) => {
      account ? setUser(account) : setUser(null);
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, [user]);

  const signInWithGmail = () => {
    signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    signOut(auth);
  };

  const contextValue = {
    user,
    loading,
    error,
    signOutUser,
    setError,
    signInWithGmail,
  };

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
};

export { useUserContext, userContext, UserContextProvider };
