import React, { createContext, useContext, useReducer } from 'react';

//prepare data layer
export const StateContext = createContext();

// idk
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull inf from data layer
export const useStateValue = () => useContext(StateContext);
