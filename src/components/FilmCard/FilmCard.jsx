import React from "react";
import { useState, useEffect } from "react";
import './filmcard.css';

const FilmCard = ({film}) =>{
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"
    console.log(film)

    const sashesColor = () =>{
        let color;
        if(film.vote_average==0){
            color='grey'
        }
        else if(film.vote_average < 5){
            color='red'
        }
        else if(film.vote_average >=5 && film.vote_average <7){
            color='#f8b133';
            
        }
        else if(film.vote_average >=7){
            color='green'
        }
        return color;
    }


    return(
        <div className="film-card">
             <div className={"sashas-container"}>
            <div className={"sashas"} style={{backgroundColor: sashesColor()}}>
                {film.vote_average}
            </div>

            </div>
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
