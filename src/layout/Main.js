import React from 'react'
import {Movies} from "../components/Movies";
import Preloader from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

export class Main extends React.Component{
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        console.log(process.env)
        this.getMovies('terminator')
    }

    getMovies = (movieName, movieType = 'all') => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}${movieType !== 'all' ? `&type=${movieType}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        const {movies, loading} = this.state;
        return(
            <main className={'content container'}>
                <Search getMovie={this.getMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        )
    }
}