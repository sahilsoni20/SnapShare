import { useState } from "react";
import { useUserStore } from "../../hooks/useUserStore";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import type {AuthProvider} from "firebase/auth"
import { firebaseAuth } from "../../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { ButtonWrapper, Container, TextWrapper, Wrapper } from "./Style";
import { Navigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

export default function Signin() {
  const { currentUser } = useUserStore();
  const [loading, setLoading] = useState(false);

  const handleSignIn = (provider: AuthProvider) => {
    setLoading(true);
    signInWithPopup(firebaseAuth, provider)
      .then(() => {
        console.log("User signed in");
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
      <img src="/logo.jpeg" alt="Snap pic" />
      <Wrapper>
        <TextWrapper>
          <h1>Snap Share</h1>
          <h2>Welcome to Snap Share <br /> Where you can upload or recieve the images</h2>
        </TextWrapper>
        <ButtonWrapper>
          <button
            disabled={loading}
            onClick={() => handleSignIn(new GoogleAuthProvider())}
          >
           Sign in with <FaGoogle />oogle
          </button>
          <a href="https://github.com/sahilsoni20" target="_blank">Built & Design by Sahil</a>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}
