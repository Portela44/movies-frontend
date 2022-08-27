import React from 'react'
import {Link} from "react-router-dom"

export default function Card(props) {
  const {movie} = props;
  return (
    <div>
      <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
      <img src={movie.image} alt={movie.title} />
    </div>
  )
}
