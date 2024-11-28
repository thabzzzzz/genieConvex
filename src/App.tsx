import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useState, useEffect } from "react";
import Home from "./views/home";
import { Login, Register } from "./components/Auth";
import "./App.css";

const convexUrl = import.meta.env.VITE_CONVEX_URL;
const convex = new ConvexReactClient(convexUrl);

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <ConvexProvider client={convex}>
      <div>
        {user ? (
          <>
            <div className="header">
              <span>Welcome, {user.name}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <Home userId={user._id} />
          </>
        ) : (
          <div className="auth-container">
            {showRegister ? (
              <>
                <Register onRegister={(user) => setUser(user)} />
                <p>
                  Already have an account?{" "}
                  <button onClick={() => setShowRegister(false)}>Login</button>
                </p>
              </>
            ) : (
              <>
                <Login onLogin={(user) => setUser(user)} />
                <p>
                  Don't have an account?{" "}
                  <button onClick={() => setShowRegister(true)}>Register</button>
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </ConvexProvider>
  );
}

export default App;
