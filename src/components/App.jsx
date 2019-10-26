import React from "react";
// import {moviesData} from "../moviesData";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import { API_URL, API_KEY_3 } from "../utils/api";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            moviesWillWatch: [],
            sort_by: "revenue.desc",
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.sort_by !== this.state.sort_by) {
            this.getMovies();
        }
    }

    getMovies = () => {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                movies: data.results
            });
        });
    }

    removeMovie = movie => {
        const updateMovies = this.state.movies.filter(function(item) {
            return item.id !== movie.id;
        });
        this.setState({
            movies: updateMovies,
        });
    }

    addMovieToWillWatch = movie => {
        const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
        this.setState({
            moviesWillWatch: updateMoviesWillWatch
        })
    }

    removeMovieFromWillWatch = movie => {
        const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
            return item.id !== movie.id;
        });
        this.setState({
            moviesWillWatch: updateMoviesWillWatch,
        });
    }

    updateSortBy = value => {
        this.setState({
            sort_by: value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row mb-4">
                            <div className="col-12">
                                <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy} />
                            </div>
                        </div>
                        <div className="row">
                            {this.state.movies.map(movie => {
                                return (
                                    <div className="col-6 mb-4" key={movie.id}>
                                        <MovieItem movie={movie}
                                        removeMovie={this.removeMovie}
                                        addMovieToWillWatch={this.addMovieToWillWatch}
                                        removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        {this.state.moviesWillWatch.length === 0 ? (
                            <ul className="list-group">
                                <li className="list-group-item active">Will Watch</li>
                            </ul>
                         ) :
                            <ul className="list-group">
                                <li className="list-group-item active">Will Watch</li>
                                {this.state.moviesWillWatch.map(movie => {
                                    return (
                                        <li className="list-group-item">
                                            {movie.title} {movie.vote_average}
                                        </li>
                                    );
                                })}
                            </ul>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

// function App() {
//     return <div>{moviesData[0].title}</div>;
// }

export default App;