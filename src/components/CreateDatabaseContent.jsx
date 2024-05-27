import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../config/firebase.js";

function CreateDatabaseContent({ addMovie }) {
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState();
  const [isNewMovieReceivedOscar, setIsNewMovieReceivedOscar] = useState(false);

  const moviesCollectionRef = collection(db, "movies");

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        receivedAnOscar: isNewMovieReceivedOscar,
      });
      addMovie({
        id: docRef.id,
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        receivedAnOscar: isNewMovieReceivedOscar,
      });
      event.target.reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mx-auto max-w-md space-y-4 rounded bg-white p-4 shadow-md"
    >
      <div>
        <input
          onChange={(e) => setNewMovieTitle(e.target.value)}
          value={newMovieTitle}
          type="text"
          placeholder="Movie title..."
          required
          className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <input
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
          value={newReleaseDate}
          type="number"
          placeholder="Release date..."
          required
          className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div className="flex items-center">
        <input
          onChange={(e) => setIsNewMovieReceivedOscar(e.target.checked)}
          checked={isNewMovieReceivedOscar}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label className="ml-2 block text-sm text-gray-900">
          Received an Oscar
        </label>
      </div>
      <button
        type="submit"
        className="w-full rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
      >
        Create Movie
      </button>
    </form>
  );
}

export default CreateDatabaseContent;
