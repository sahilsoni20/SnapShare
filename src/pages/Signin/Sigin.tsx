import { useEffect, useState } from "react";
import { useUserStore } from "../../hooks/useUserStore";
import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import type { AuthProvider, User } from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { ButtonWrapper, Container, TextWrapper, Wrapper } from "./Style";
import { Navigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

export default function Signin() {
  const { currentUser, setCurrentUser } = useUserStore();
  const [loading, setLoading] = useState(false);

  // Persist authentication state across reloads
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("User is signed in: ", user);
        setCurrentUser(user);
      } else {
        console.log("User is signed out");
        setCurrentUser(null);
      }
    });
  
    return () => unsubscribe();
  }, [setCurrentUser]);
  

  const handleSignIn = (provider: AuthProvider) => {
    setLoading(true);

    // Set the persistence mode to 'local' to persist user session across reloads
    setPersistence(firebaseAuth, browserLocalPersistence)
      .then(() => {
        return signInWithPopup(firebaseAuth, provider);
      })
      .then((result) => {
        const user = result.user as User;
        setCurrentUser(user);
        console.log("User signed in");
        toast.success(`Welcome ${user.displayName}!`);
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };

if (currentUser) return <Navigate to="/" />;

  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <h1>Snap Share</h1>
          <h2>Welcome to Snap Share <br /> Where you can upload or receive images</h2>
        </TextWrapper>
        <ButtonWrapper>
          <button
            disabled={loading}
            onClick={() => handleSignIn(new GoogleAuthProvider())}
          >
           Sign in with <FaGoogle />oogle
          </button>
          <a href="https://github.com/sahilsoni20" target="_blank">Built & Designed by Sahil</a>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}
