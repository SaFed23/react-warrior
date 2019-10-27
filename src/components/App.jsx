import React from "react";
import LoginForm from "./LoginForm";
import MoviePage from "./MoviesPage";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isAuth: true
        }
    }

    render() {
        return (
            this.state.isAuth ? 
            <MoviePage/> : <LoginForm/>
        );
    }
}

// function App() {
//     return <div>{moviesData[0].title}</div>;
// }

export default App;