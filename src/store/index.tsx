import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

import reducer, { initialState, StateType } from "./reducer";

const StateContext = createContext<
  [StateType, Dispatch<{ type: string; payload: any }>]
>([initialState, () => {}]);

export const StateProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
