import React, { useState } from "react";
const Auth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        name: "Nirdesh",
      });
      setLoading(false);
    }, 2000);
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <div>
        <h1>{user ? `Welcome ${user.name}` : "Please Login"}</h1>
      </div>
      <div>
        {loading ? (
          <div className="w-12 h-12 border rounded-full border-t-4 border-solid animate-spin"></div>
        ) : user ? (
          <button
            className="px-5 py-2 bg-green-500 text-white rounded-full"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-5 py-2 bg-green-500 text-white rounded-full"
            onClick={() => handleLogin()}
          >
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default Auth;
