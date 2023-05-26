import{ faPencil, faTrashCan }from "@fortawesome/free-solid-svg-icons";
import{ FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ Link } from "react-router-dom";
import { useGet, useDelete } from "../_Hooks/Customs";
import { URL_GENRES, URL_MOVIES, } from "../_Utils/Constants";




const MovieRow = ({movie, deleteSuccess}) => {

    const  {data: genre, error: genreError} = useGet(URL_GENRES, movie.idGenre);
    
    const deleteData = useDelete(URL_MOVIES, movie.id);

    const performDelete = () => {
        deleteData(deleteSuccess);
    }

    return(
        <tr id="rigamovie">
            <td className="align-middle">
                <Link className="btn text-info" to={"edit/" + movie.id}>
                    <FontAwesomeIcon icon={faPencil}/>
                </Link>
                <button className="btn text-danger" onClick={performDelete}>
                    <FontAwesomeIcon icon={faTrashCan}/>
                </button>
            </td>
            <td>
                <div>{movie.name}</div>
            </td>
            <td className="align-middle">{genre ? genre.name : movie.idGenre}</td>
            <td className="align-middle">{movie.duration}</td>
        </tr>
    );
}

export default MovieRow;