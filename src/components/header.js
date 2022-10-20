
import React from 'react';
import './header.scss'
import {useEffect} from "react";
import "./sidebar.scss"
import logo from '../logo/logo2.png'



const Header = ({genres, selectedGenres, setSelectedGenres, setPageNumber, setGenre}) => {
    const icon = (
        <>
            {selectedGenres && 
                    selectedGenres.map((genre) => { 
                        return <a
                                key={genre.id} 
                                style={{ color:'#FF0000'}} 
                                className = 'link'
                                onClick={() => handleAdd(genre)}
                                >{genre.name}</a>
                    })}
                {genres && 
                genres.map((genre) => { 
                    
                    return <a 
                            key={genre.id} 
                            style={{ color:'#FFFFFF'}} 
                            className = 'link'
                            onClick={() => handleAdd(genre)}
                            >{genre.name}</a>
                })}
                
            </>
      );
    const handleAdd = (genre) => {
        console.log(selectedGenres.filter((g) => g.id !== genre.id))
        setGenre([...genres.filter((g) => g.id !== genre.id) , ...selectedGenres.filter((g) => g.id !== genre.id)])
        setSelectedGenres([genre]);
        //setSelectedGenres([...selectedGenres, genre]);
        //setGenre(genres.filter((g) => g.id !== genre.id))

        setPageNumber(1);
    }

    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenre([...genres, genre])
        setPageNumber(1);
    }
    const fetchGenre = async () => { 
        const genre = [{id:1, name: 'All', url:''}, {id:2, name: 'Comic', url:'comic'},{id:3, name: 'Magazine', url:'magazine'}, {id:4, name: 'Digital comic', url:'digital%20comic'}]
        setGenre(genre)
        
    }

    useEffect(() => {
    
        fetchGenre()

    }, []);

return(
<>
    
    <div className='header'>
        <img src={logo} className='logo'></img>
        <div className='links'>
            {icon}
        </div>
        
    </div>
    
</>
)

}

export default Header