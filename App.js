import React, { useEffect, useState } from 'react';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {!user ? <Login setUser={setUser} /> : <Home user={user} setUser={setUser} />}
    </div>
  );
};

export default App;
