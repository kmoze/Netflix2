import { useState } from "react"
import Movie from "./Movie"



function Movielist() {

  const [faveMovies, setFaveMovies] = useState([]);

  return (
    <div>
      <ul>
        <li><Movie/></li>
      </ul>
    </div>
  )
}

export default Movielist