const state = {
    count: 0,
    isAuthenticated: false,
  };
  
  const listeners = [];
  
  function getState() {
    return state;
  }
  
  function setState(newState) {
    Object.assign(state, newState);
    listeners.forEach(listener => listener(state));
  }
  
  function subscribe(listener) {
    listeners.push(listener);
  }
  
  export { getState, setState, subscribe };
  