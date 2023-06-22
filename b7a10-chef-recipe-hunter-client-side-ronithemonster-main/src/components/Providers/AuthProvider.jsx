import React, { createContext, useEffect, useState } from "react";
import app from "../FireBase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading,setLoading] = useState(true);

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googlePopUp = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const gitPopUp = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };
  const updateUrl = ()=>{

    return updateProfile (auth.currentUser, {
      displayName: "Mr.. User", photoURL: "https://lh3.googleusercontent.com/a/AGNmyxYoZpZr3z629at42vhbr5aWTk9mhTWhyajofPABXQ=s96-c"})



  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUSer) => {
      console.log(loggedUSer);
      setUser(loggedUSer);
      setLoading(false)
      //   setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    signIn,
    createUser,
    googlePopUp,
    gitPopUp,
    logOut,
    loading,
    updateUrl
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;