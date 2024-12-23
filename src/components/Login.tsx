"use client";
import { useState, useEffect } from "react";

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      setSuccess(true);
      onLoginSuccess();
    }
  }, [onLoginSuccess]);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      user === process.env.NEXT_PUBLIC_USERNAME &&
      pwd === process.env.NEXT_PUBLIC_PWD
    ) {
      setUser("");
      setPwd("");
      setSuccess(true);
      localStorage.setItem("loggedIn", "true");
      onLoginSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {success ? (
        <section>
        </section>
      ) : (
        <div className="flex justify-center items-center h-[100vh]">
          <form onSubmit={handleSubmit}>
            {error ? <p>Failed Login</p> : <></>}
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={user}
                className="border border-black rounded-md"
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={pwd}
                className="border border-black rounded-md"
                onChange={(e) => setPwd(e.target.value)}
                required
              />
            </div>
            <div className="flex w-full justify-center p-2">
              <button className="rounded bg-black pl-2 pr-2 text-white self-center">
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
