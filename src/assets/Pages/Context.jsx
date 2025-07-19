import React, { createContext, useEffect, useState } from 'react';

const Maincontext = createContext();

const Context = (props) => {
  const [user, Setuser] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser != null) {
      Setuser(JSON.parse(storedUser));
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
