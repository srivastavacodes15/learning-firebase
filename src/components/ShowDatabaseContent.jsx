import React from "react";

function ShowDatabaseContent({ movieList }) {
  return (
    <div className="space-y-4 p-4">
      {movieList.map((movie) => (
        <div
          key={movie.id}
          className="rounded border border-gray-200 bg-white p-4 shadow-md"
        >
          <h1
            className={`text-xl font-bold ${
              movie.receivedAnOscar ? "text-green-600" : "text-red-600"
            }`}
          >
            {movie.title}
          </h1>
          <p className="text-gray-700">Date: {movie.releaseDate}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowDatabaseContent;
