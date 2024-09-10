import { useState } from 'react';
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, styled } from '@mui/material';
import './MoviesList.css'

interface HomeItem {
    id: number;
    name: string;
    rating: number;
    time: string;
    desc: string;
    starring: string;
    genres: string;
    tags: string;
    cover: string;
    video: string;
    date: string;
}
interface props {
    title: string;
    listData: any
}

interface SinglePageProps {
    homeData: HomeItem[];
}

const MoviesList = ({ title, listData }: props) => {

    const [data, setData] = useState(listData);
    const [filter, setFilter] = useState(listData);
    const myLoc = window.location.pathname;
    const history = useNavigate();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#edc9c9',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        height: 320,
        width: 300,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const filterProduct = (cat: any) => {
        const updatedList = data.filter((x: { genres: any; }) => x.genres === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="searchButtons">
                    <button onClick={() => setFilter(data)}>All</button>
                    <button onClick={() => filterProduct("Action")} >Action</button>
                    <button onClick={() => filterProduct("Adventures")}>Adventures</button>
                </div>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {filter.map((movie: HomeItem, index: any) => {
                        return (
                            <Grid item xs={3} id={index}>
                                <Item onClick={() => history(`${myLoc}/movieDetails/${movie.id}`)}>
                                    <img src={movie.cover} className="card-img-top" height="280px" width="280px" />
                                    <h3>{movie.name}</h3>
                                </Item>
                            </Grid>
                        )
                    })}
                </Grid>
            </>
        )
    }

    return (
        <div>
            <div className="mainContainer">
                <div className="subContainer">
                    <h1 >{title}</h1>
                    <hr />
                </div>
                <div className="myData">
                    <ShowProducts />
                </div>
            </div>
        </div>
    )
}
export default MoviesList;