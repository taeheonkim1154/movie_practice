import React from "react";
import axios from "axios";
import Movie from "../components/Movie";

class Home extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };
    async componentDidMount(){
        const {data: {data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies:movies, isLoading:false});
    }
    render(){
        const {isLoading, movies} = this.state;
        return (
            <section>
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading now...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(arg => {
                            return <Movie key={arg.id} id={arg.id} year={arg.year} title={arg.title_long} summary={arg.summary} poster={arg.medium_cover_image} genres={arg.genres}/>
                        })}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;