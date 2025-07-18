import React, { createContext,  useEffect, useState } from "react";

const Maincontext = createContext();

const Context = (props) => {
  const [user, Setuser] = useState();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user != null) {
      Setuser(JSON.parse(user));
    }
  }, []);

  const userHandler = (data) => {
    Setuser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  function logout() {
    Setuser(null);
    localStorage.removeItem(user);
  }
  return (
    <Maincontext.Provider value={{ user, userHandler, logout }}>
      {props.children}
    </Maincontext.Provider>
  );
};

export default Context;

export { Maincontext };
