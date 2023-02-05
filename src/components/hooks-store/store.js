import { useEffect, useState } from "react";

// these variables are meant to be outside of the function to avoid getting re-rendered for it to be use by other components and sharing the same values.

let globalState = {};
let listeners = [];
let actions = {};

// inside of useStore will re-render the value and each components have independent render or functions. and this is where we going to manage all of the outside value

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];
  console.log(setState);

  const dispatch = (actionIdentifier, payload) => {
    /* With this you can pass a value thru that "actions[actionIdentifier] // this >"(globalState, payload)"" */

    const newState = actions[actionIdentifier](globalState, payload);

    globalState = { ...globalState, ...newState };

    //Literally just to re-render the component who uses "useStore"

    for (const listener of listeners) {
      listener(globalState);
      console.log(listener);
      console.log(listeners);
    }
    console.log(listeners);
  };

  //Literally just to re-render the component who uses "useStore"

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    //A clean up

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((listeners) => listeners !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

//To initialize store if they have ones

export const initStore = (initialAction, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...initialAction };
};
