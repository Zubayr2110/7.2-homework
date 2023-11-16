import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
import data from "./data";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
const url = "https://course-api.com/react-useReducer-cart-project";
import getStore from './getstore.jsx'

const initialState = {
  cart: [],
  loading: false,
  amount: 0,
  total: 0,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const [user, setUser] = useState("");
  const [psw, setPsw] = useState("");

  const handeSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Enter Name And Password");
    } else {
      const newItem = { name: user, psw: psw };
      setUsers([...users, newItem]);
      if (user.length > 0) {
        navigateu("/");
      }

      setUser("");
      useNavigate('/')
    }
  };
  const [users, setUsers] = useState(getStore("users"));
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };
  const add = (id) => {
    dispatch({ type: "ADD", payload: id });
  };
  const dec = (id) => {
    dispatch({ type: "DEC", payload: id });
  };
  const rem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const resp = await fetch(url);
    const data = await resp.json();
    dispatch({ type: "DISPLAY", payload: data });
  };
  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [state.cart]);
  useEffect(() => {
    fetchData();
  }, []);
  if (state.loading) {
    return <Loading />;
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        add,
        dec,
        rem,
        user,
        setUser,
        psw,
        setPsw,
        handeSubmit
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
