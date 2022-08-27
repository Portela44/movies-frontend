import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async() => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/movies/${id}`);
        setMovie(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  },[id]);
  
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/movies/${id}`);
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {movie && <div className="movieDetails">
        <p>{movie.title}</p>
        <p>{movie.year}</p>
        <p>{movie.director}</p>
        <p>{movie.duration}</p>
        <p>{movie.synopsis}</p>
        <img src={movie.image} alt={movie.title} />
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/edit/${movie._id}`}>Edit</Link>
      </div>}
    </div>
  )
}
