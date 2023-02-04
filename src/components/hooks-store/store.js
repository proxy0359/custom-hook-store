import { useEffect, useState } from "react";

// these variables are meant to be outside of the function to avoid getting re-rendered for it to be use by other components and sharing the same values.

let globalState = {};
let listeners = [];
let actions = {};

// inside of useStore will re-render the value and each components have independent render or functions. and this is where we going to manage all of the outside value

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);

    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((listeners) => listeners !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (initialAction, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...initialAction };
};
