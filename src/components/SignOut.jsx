import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../config/firebase.js";

function SignOut({ loggedIn, setLoggedIn }) {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      loggedIn === true && console.log("signed out");
      setLoggedIn(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={handleSignOut}
        className="w-full max-w-xs rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none"
      >
        Sign Out
      </button>
    </div>
  );
}

export default SignOut;
