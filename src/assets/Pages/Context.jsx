import React, { createContext, useEffect, useState } from 'react';

const Maincontext = createContext();

const Context = (props) => {
  const [user, Setuser] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
  
    if (storedUser) {
  try {
    Setuser(JSON.parse(storedUser));  // Parse the stored JSON
  } catch (error) {
    console.error(error);
  }
}
  }, []);

  const userHandler = (data) => {
    Setuser(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  function logout() {
    Setuser(null);
    localStorage.removeItem('user');

    window.location.href = '/';
  }

  return (
    <Maincontext.Provider value={{ user, userHandler, logout }}>
      {props.children}
    </Maincontext.Provider>
  );
};

export default Context;

export { Maincontext };
