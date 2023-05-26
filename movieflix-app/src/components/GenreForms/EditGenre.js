import { useParams } from "react-router-dom"
import GenreForm from "./GenreForm";
import { useGet } from "../_Hooks/Customs";



const EditGenre = () => {

    const {id} = useParams();

    const {data, error} = useGet("http://localhost:8080/genres", id)

    if(data) {
        return(
            <div className="container">
                <h5>Modifica Genere</h5>
                <GenreForm data={data} />
            </div>
        );
    }
}

export default EditGenre;