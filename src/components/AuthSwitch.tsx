import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

const AuthSwitch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"signup" | "signin">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [institute, setInstitute] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(firestore, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        institute,
        createdAt: new Date(),
      });

      window.location.assign("/dashboard");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.assign("/dashboard");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <section className="m-12">
      <div className="bg-green-100 p-6 rounded-lg shadow-md">
        <div className="flex border-b border-green-300">
          <button
            className={`flex-1 py-2 text-lg font-semibold ${
              activeTab === "signup" ? "bg-green-200 text-green-800" : "text-green-600"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
          <button
            className={`flex-1 py-2 text-lg font-semibold ${
              activeTab === "signin" ? "bg-green-200 text-green-800" : "text-green-600"
            }`}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </button>
        </div>

        <div className="mt-4">
          {activeTab === "signup" && (
            <div>
              <h2 className="text-lg font-bold text-green-800 mb-4">Create an Account</h2>
              <form onSubmit={handleSignup}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-green-700">Name:</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-green-300 rounded"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="institute" className="block text-green-700">Institute:</label>
                  <input
                    type="text"
                    id="institute"
                    className="w-full p-2 border border-green-300 rounded"
                    placeholder="Enter your current institute"
                    value={institute}
                    onChange={(e) => setInstitute(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-green-700">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-green-300 rounded"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-green-700">Password:</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-2 border border-green-300 rounded"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Sign Up
                </button>
              </form>
              <p className="mt-4 text-center">
                Already have an account?{" "}
                <Link to="#" onClick={() => setActiveTab("signin")} className="text-green-600 hover:underline">
                  Sign In here
                </Link>
              </p>
            </div>
          )}

          {activeTab === "signin" && (
            <div>
              <h2 className="text-lg font-bold text-green-800 mb-4">Sign In to Your Account</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-green-700">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-green-300 rounded"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-green-700">Password:</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-2 border border-green-300 rounded"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Sign In
                </button>
              </form>
              <p className="mt-4 text-center">
                Don&apos;t have an account?{" "}
                <Link to="#" onClick={() => setActiveTab("signup")} className="text-green-600 hover:underline">
                  Sign up here
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthSwitch;
