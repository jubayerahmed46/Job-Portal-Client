/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageLoader, setPageLoader] = useState(true);

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      if (currentUser?.email) {
        const payload = {
          username: currentUser.displayName,
          email: currentUser.email,
        };
        try {
          axios.post(
            `https://job-portal-server-blond.vercel.app/jwt`,
            payload,
            {
              withCredentials: true,
            }
          );
        } catch (error) {
          console.error("Error creating token:", error);
        }
      } else {
        // logout the user if the token is not availible
        axios.post(
          "https://job-portal-server-blond.vercel.app/logout",
          {},
          {
            withCredentials: true,
          }
        );
      }
      setUser(currentUser);
      setLoading(false);
      setPageLoader(false);
    });

    return () => unSubs();
  }, []);

  const singupUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const loginUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const singinWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider);
    // await signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          // The signed-in user info
          const user = result.user;
          console.log("User Info:", user);
        }
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  }, []);

  const signOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    singupUser,
    user,
    setUser,
    loginUser,
    singinWithGoogle,
    signOutUser,
    loading,
    pageLoader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
