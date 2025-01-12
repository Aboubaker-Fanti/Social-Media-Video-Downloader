function isAuthenticated() {
    return !!localStorage.getItem('authToken');
  }
  
  function login(authToken) {
    localStorage.setItem('authToken', authToken);
  }
  
  function logout() {
    localStorage.removeItem('authToken');
  }
  
  export { isAuthenticated, login, logout };
  