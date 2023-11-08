// Import React and necessary hooks from react-router-dom
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

// List of admin wallets
const adminWallets = ["0x70a792ad975aa0977c6e9d55a14f5f2228bbc685"];

// Create a context for authentication
const AuthContext = React.createContext();

// AuthProvider component manages authentication state
export function AuthProvider({ children }) {
  const navigate = useNavigate();

  // Get user information from localStorage or set default state
  const initialState = JSON.parse(localStorage.getItem("wallet")) || {
    walletAddress: "CONNECT WALLET",
  };
  const [user, setUser] = React.useState(initialState);

  // Function to handle user login
  const login = ({ walletAddress }) => {
    let isAdmin = false;
    try {
      // Check if the user's wallet is in the admin list
      const adminWallet = adminWallets.find(
        (wallet) => wallet.toLowerCase() === walletAddress.toLowerCase()
      );
      if (adminWallet) isAdmin = true;

      // Save user information to localStorage
      const stringifiedUser = JSON.stringify({ walletAddress, isAdmin });
      localStorage.setItem("wallet", stringifiedUser);
      setUser({ walletAddress, isAdmin });
    } catch {
      // Handle errors while setting user information
      const stringifiedUser = JSON.stringify({ walletAddress, isAdmin });
      localStorage.setItem("wallet", stringifiedUser);
      setUser({ walletAddress, isAdmin });
    }
  };

  // Function to handle user logout
  const logout = () => {
    // Clear localStorage and navigate to the home page
    localStorage.clear();
    setUser({ walletAddress: "CONNECT WALLET" });
    navigate("/");
  };

  // Create authentication context value
  const auth = { user, login, logout };

  // Provide authentication context to the children components
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// AuthRoute component ensures that the user is authenticated before rendering children
export function AuthRoute(props) {
  const auth = useAuth();

  // Redirect to home page if the user is not authenticated
  if (auth.user.walletAddress === "CONNECT WALLET") {
    return <Navigate to="/" />;
  }

  return props.children;
}

// useAuth hook provides access to the authentication context
export function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}
