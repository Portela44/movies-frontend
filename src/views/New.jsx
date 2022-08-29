import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function New() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
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
      const response = await axios.post(`http://localhost:8000/api/v1/movies`, movie);
      navigate(`/movie/${response.data.data._id}`);      
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" onChange={handleChange}/>
          <input type="number" name="year" placeholder="Year" onChange={handleChange}/>
          <input type="text" name="director" placeholder="Director" onChange={handleChange}/>
          <input type="number" name="duration" placeholder="Duration" onChange={handleChange}/>
          <input type="text" name="synopsis" placeholder="Synopsis" onChange={handleChange}/>
          <input type="text" name="image" placeholder="Image" onChange={handleChange}/>
          <button type="submit">Save changes</button>
        </form>
    </div>
  )
}
