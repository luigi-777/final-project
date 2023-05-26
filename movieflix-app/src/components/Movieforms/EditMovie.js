import { useParams, useOutletContext } from "react-router-dom";
import MovieForm from "./MovieForm";
import {useGet} from "../_Hooks/Customs";


const EditMovie = () => {

    const {id} = useParams();

    const {data, error} = useGet("http://localhost:8080/movies", id);

    const {mutate} = useOutletContext(); 

    if(data) {
        return(
            <>
                <div className="m-2 p-2 border">
                    <h5>Modifica Film</h5>
                    <MovieForm data={data} mutate={mutate} />
                </div>
            </>
        );
    }
}

export default EditMovie;