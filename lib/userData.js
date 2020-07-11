import React, { useReducer, useContext, useEffect } from "react";
import { useRouter } from "next/router";
const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

export const UserProvider = ({ children }) => {
  const router = useRouter();
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        if (action.payload["id"]) {
          if (action.payload.user.role.name == "Donor") {
            router.push("/account");
          } else {
            router.push("/account_o");
          }
        }
        return action.payload;
      case "LOGOUT":
        return action.payload;
      case "UPDATE":
        return action.payload;
      default:
        throw new Error(`Unknown action: ${action.type}`);
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);
  //  useEffect(()=>{

  //   },[state])
  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export const useData = () => useContext(UserStateContext);
export const useDispatchUser = () => useContext(UserDispatchContext);
