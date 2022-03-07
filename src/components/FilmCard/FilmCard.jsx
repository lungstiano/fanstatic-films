import React from "react";

const FilmCard = ({film}) =>{
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"
    console.log(film)

    return(
        <div className="film-card">
            {film.poster_path ? <img className={"film-cover"} src={`${IMAGE_PATH}${film.poster_path}`} alt=""/>
             : 
             <div className={"film-placeholder"}>
                 No Image Found
             </div>
            }

            <h5 className={"film-title"}>{film.title}</h5>
            
    
        </div>
    )
}

export default FilmCard;
