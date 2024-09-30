import React, { useEffect, useState } from 'react';
import Container from "./common/container";

//import { db } from './firebase'

function App() {

  //로그인 정보
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
      const token = JSON.parse(localStorage.getItem('logged'));
      if (token) {
          setIsLoggedIn(token);
      }
  }, []);

  const handleLoginData = (data) => {
    setIsLoggedIn(data);
  };

  return (
    <div className="App">
      <Container sendLoginData={handleLoginData} loginState={isLoggedIn}></Container>
    </div>
  );
}

export default App;
