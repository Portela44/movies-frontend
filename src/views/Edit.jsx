import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/movies/${id}`);
        setMovie(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [id])

  const handleChange = (e) => {
    setMovie(prev => {
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/api/v1/movies/${id}`, movie);
      navigate(`/movie/${response.data.data._id}`);      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h2>Edit movie</h2>
      {!movie && <p>Loading</p> }
      {movie && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={movie.title} onChange={handleChange}/>
          <input type="number" name="year" placeholder="Year" value={movie.year} onChange={handleChange}/>
          <input type="text" name="director" placeholder="Director" value={movie.director} onChange={handleChange}/>
          <input type="number" name="duration" placeholder="Duration" value={movie.duration} onChange={handleChange}/>
          <input type="text" name="synopsis" placeholder="Synopsis" value={movie.synopsis} onChange={handleChange}/>
          <input type="text" name="image" placeholder="Image" value={movie.image} onChange={handleChange}/>
          <button type="submit">Save changes</button>
        </form>
      )}
    </div>
  )
}
