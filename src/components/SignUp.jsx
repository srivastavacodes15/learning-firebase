import React, { useState } from "react";
import { auth } from "../config/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import GoogleSignIn from "./GoogleSignIn.jsx";
import SignOut from "./SignOut.jsx";

function SignUp({ loggedIn, setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  loggedIn && console.log(auth?.currentUser?.email);

  // to get the photo of that google account
  // console.log(auth?.currentUser?.photoURL);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
      console.log("signed in");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-xs rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Sign Up
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="mb-4 w-full rounded-lg border px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="mb-4 w-full rounded-lg border px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSignUp}
          className="w-full rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-blue-700 focus:outline-none"
        >
          Sign Up
        </button>
        <GoogleSignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>
    </div>
  );
}

export default SignUp;
