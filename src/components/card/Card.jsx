import { useState } from "react";
import "./card.scss";

import Watched from "../watched/Watched";




const Card = ({movie}) => {
    //1)watch/unwatch
    //2)rate and review
 

  const [watched, setWatched]=useState(false);

  const watchedHandler=()=>{
    setWatched((prev)=>!prev);
    console.log(watched);
  }

  return (
    <div className="card">
        <div className="watched">
            <Watched watchedHandler={watchedHandler}/>
        </div>

      <img src={movie.img} alt="" className={`${watched? "done": ""}`} />

      <div className="info">
        <h1>{movie.title}</h1>
        <p>{movie.release}</p>
        <span>{movie.description}</span>
        <p>{movie.genre}</p>
      </div>
    </div>
  );
};

export default Card;
