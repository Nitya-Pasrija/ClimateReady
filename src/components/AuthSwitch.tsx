import React, { useState } from "react";

const AuthSwitch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"signup" | "signin">("signup");

  const handleTabClick = (tab: "signup" | "signin") => {
    setActiveTab(tab);
  };

  return (
    <section className="m-12">
      <div className="bg-green-100 p-6 rounded-lg shadow-md">
        <div className="flex border-b border-green-300">
          <button
            className={`flex-1 py-2 text-lg font-semibold ${
              activeTab === "signup" ? "bg-green-200 text-green-800" : "text-green-600"
            }`}
            onClick={() => handleTabClick("signup")}
          >
            Sign Up
          </button>
          <button
            className={`flex-1 py-2 text-lg font-semibold ${
              activeTab === "signin" ? "bg-green-200 text-green-800" : "text-green-600"
            }`}
            onClick={() => handleTabClick("signin")}
          >
            Sign In
          </button>
        </div>

        <div className="mt-4">
          {activeTab === "signup" && (
            <div>
              <h2 className="text-lg font-bold text-green-800 mb-4">Create an Account</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-green-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-green-300 rounded"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="institute" className="block text-green-700">
                    Institute:
                  </label>
                  <input
                    type="text"
                    id="institute"
                    className="w-full p-2 border border-green-300 rounded"
                    placeholder="Enter your current institute"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-green-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-green-300 rounded"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-green-700">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-2 border border-green-300 rounded"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Sign Up
                </button>
              </form>
            </div>
          )}

          {activeTab === "signin" && (
            <div>
              <h2 className="text-lg font-bold text-green-800 mb-4">Sign In to Your Account</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-green-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-green-300 rounded"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-green-700">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-2 border border-green-300 rounded"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Sign In
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthSwitch;
