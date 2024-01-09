import React from 'react';
import { Button } from "@mui/material";
import "./Login.css";
import { signOut, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

const Login = ({ setUser }) => {
  const signInWithGoogle = async () => {
    try {
      // Sign out the current user (if any)
      await signOut(auth);

      // Sign in with Google
      const result = await signInWithPopup(auth, provider);
      
      // Set user when sign-in is successful
      setUser(result.user);
    } catch (error) {
      // Handle errors, such as user cancellation
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="Login">
      <div className="Login_logo">
        <img
          src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2022/03/Spotify-Logo-Font-1.jpg?w=1600&ssl=1"
          alt=""
        />
       
      </div>
      <Button variant="contained" color="primary" onClick={signInWithGoogle}>
        Sign In 
      </Button>
    </div>
  );
};

export default Login;
