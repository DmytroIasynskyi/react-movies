import {Movie} from "./Movie";

export function Movies(props) {
    const {movies = []} = props;
    return(
        <div className={"movies"}>
            {movies.length ? movies.map(movie => {
                return <Movie key={movie.id} {...movie} />
            }) : <h4>Nothing to display</h4>}
        </div>

    )
}