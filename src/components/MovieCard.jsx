export default function MovieCard({ movie, handleDelete }) {
  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      {/* Keep the button commented out for now */}
      <button onClick={() => handleDelete(movie._id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}
