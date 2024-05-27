import React, { useState, useEffect } from "react";
import Auth from "./SignUp.jsx";
import SignOut from "./SignOut.jsx";
import ShowDatabaseContent from "./ShowDatabaseContent.jsx";
import CreateDatabaseContent from "./CreateDatabaseContent.jsx";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies");

  const fetchMovies = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      fetchMovies();
    }
  }, [loggedIn]);

  const addMovie = (newMovie) => {
    setMovieList((prevList) => [...prevList, newMovie]);
  };

  return (
    <div>
      {!loggedIn ? (
        <Auth loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      ) : (
        <>
          <SignOut loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <CreateDatabaseContent addMovie={addMovie} />
          <ShowDatabaseContent movieList={movieList} />
        </>
      )}
    </div>
  );
}

export default App;
