import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { latest, trending, upcome } from '../../dummyData';
import { Dropdown, MenuButton, Menu, MenuItem } from '@mui/base';
import { styled } from '@mui/system';
import './Search.css';
import FetchApi from '../../api/Api';


interface HomeItem {
    desc: any;
    name: any;
    id: number;
}
interface SinglePageProps {
    homeData: HomeItem[];
}
const SearchPage = () => {
    const [movies, setMovies] = useState<HomeItem | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [movie, setMovie] = useState<any | null>();

    const getData = async() =>{
        const result = await FetchApi.getLatestData();
        setMovie(result);
      }
      useEffect(()=>{
        getData();
      },[])

    const searchMovies = (title: any) => {
        const filteredData = movie.find((x: any) => x.title.toLowerCase() === title.toLowerCase())
            if (filteredData) {
                setMovies(filteredData);
            }
            else{
                const filteredData = trending.find((x: any) => x.name === title)
            if (filteredData) {
                setMovies(filteredData);
            }
            else{
                const filteredData = upcome.find((x: any) => x.name === title)
                if (filteredData) {
                    setMovies(filteredData);
                }
            }
            }
    }
    return (
        <>
            <div className="MovieCardapp">
                <h1>Search Space</h1>
                {/* <div> Select the Category </div> */}
                {/* <Dropdown>
                    <MenuButton>{category}</MenuButton>
                    <Menu slots={{ listbox: Listbox }}>
                        <MenuItem onClick={createHandleMenuClick('upcome')}>upcome</MenuItem>
                        <MenuItem onClick={createHandleMenuClick('trending')}>
                        trending
                        </MenuItem>
                        <MenuItem onClick={createHandleMenuClick('latest')}>latest</MenuItem>
                    </Menu>
                </Dropdown> */}
                <div className="search">
                    <input placeholder='Search for Movies'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                    <FontAwesomeIcon icon={faSearch} className="fontIcon" onClick={() => searchMovies(searchTerm)} />
                </div>

                {movies ? (
                    <div className='container'>
                        <MovieCard movie={movies}/>

                    </div>
                ) : (<div className='empty'>
                    <h2> No movies Found</h2>
                </div>)}


            </div>
        </>
    )
}

export default SearchPage
const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#99CCF3',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E6',
    700: '#0059B3',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};
const Listbox = styled('ul')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
        };
    z-index: 1;
    `,
);