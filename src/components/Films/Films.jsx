import React from "react";
import axios from "axios";
import InfinateScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from "react";
import "./films.css";

//import FilmCard from "../FilmCard/FilmCard";

import FilmCard from "../FilmCard/FilmCard";

const Films = () =>{

    const API_URL = "https://api.themoviedb.org/3"

    const [films, setFilms] = useState([])

    const fetchFilms = async () => {
        const {data: {results}}  = await axios.get(`${API_URL}/discover/movie?api_key=d4f7b87d7cedfdfbbb297f46aa3e8779&language=en-US`, {
            // params:{
            //      api_key: process.env.REACT_APP_MOVIE_API_KEY
        
            // }
        })
        setFilms(results)
    }


    useEffect(() =>{
        fetchFilms()
    }, [])

   
    const renderFilms = () =>(
        films.map(film =>(
            <FilmCard
             key={film.id}
             film={film}
            
            />
        ))
        
    )
    
            

    return(
        // <InfinateScroll 
        //     dataLength={films.length}
        //     next={fetchFilms}
        //     hasMore={true}
        //     loader={<h4>Loading...</h4>}
        // >
            <div className="movieContainer">
                {renderFilms()}
            </div>

        //</InfinateScroll>        
    );

}



export default Films;