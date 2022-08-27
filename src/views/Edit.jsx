import React, {useState, useEffect, useNavigate} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [movie, setMovie] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.put(`http://localhost:8000/api/v1/movies/${id}`);
      
    } catch (error) {
      console.error(error)
    }
  }
  
  const handleChange = (e) => {
    setMovie(prev => {
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

  return (
    <div>
      <h2>Edit movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={movie.title} onChange={handleChange}/>
      </form>
    </div>
  )
}
