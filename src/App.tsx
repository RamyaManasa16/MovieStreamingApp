import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/header/Header'
import SinglePage from './components/watch/SinglePage';
import Footer from './components/footer/Footer';
import SearchPage from './components/search/SearchPage';
import MovieDetails from './components/screens/MovieDetails';
import TrendingMovieList from './components/screens/TrendingMovieList';
import LatestMovieList from './components/screens/LatestMovieList';
import Login from './components/screens/Login';
import HomeScreen from './components/screens/HomeScreen';
import UpcommingMovieList from './components/screens/UpcommingMovieList';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path='/singlepage/:id/:path' element={<SinglePage />} />
        <Route path='/search' element={<SearchPage />} />
        {/* <Route path='/moviePage' element={<MovieDetails />} /> */}
        <Route path='/upcomming' element={<UpcommingMovieList />} />
        <Route path='/trending' element={<TrendingMovieList/>} />
        <Route path='/latest' element={<LatestMovieList />} />
        <Route path=':pathname/movieDetails/:id' element={<MovieDetails />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
