import { useOutletContext } from "react-router-dom";
import MovieForm from "./MovieForm";


const NewMovie = () => {
    
    const {mutate} = useOutletContext();

    return(
        <>
            <div id="bord" className="m-3 p-3 border">
                <h5>Nuovo Film</h5>
                <MovieForm mutate={mutate} />
            </div>
        </>
    )
}

export default NewMovie;