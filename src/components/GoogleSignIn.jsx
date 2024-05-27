import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase.js";

function GoogleSignIn({ loggedIn, setLoggedIn }) {
  const handleSignInUsingGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setLoggedIn(true);
      loggedIn === false && console.log("signed in using google");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={handleSignInUsingGoogle}
        className="w-full rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-blue-700 focus:outline-none"
      >
        Sign In using Google
      </button>
    </div>
  );
}

export default GoogleSignIn;
