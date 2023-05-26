import { Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useDelete, useGet} from "../_Hooks/Customs";



const GenreItem = ({ genre, deleteSuccess}) => {

    const [showDelete, setShowDelete] = useState(false);

    const {data: movies, error} =useGet("http://localhost:8080/genres/" + genre.id + "/movies")

    const deleteData = useDelete("http://localhost:8080/genres", genre.id)

    const performDelete = () => {
        deleteData(deleteSuccess);
    };

    return (
        <article className="col-12">
            <div className="m-2 p-2" id="riga">
                <div className="row">
                    <div className="col-12" id="genere">
                        {genre.name}
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-around">
                            <Link className="btn btn-outline-info active" to={"edit/" + genre.id}>
                                Modifica
                            </Link>
                            <button className="btn btn-outline-danger active" onClick={() =>{setShowDelete(true)}}>
                                Elimina
                            </button>
                        </div>
                    </div>
                    <div className="col-12">
                        <Alert className="mt-2" show={showDelete} variant="danger">
                            <Alert.Heading>Eliminare {genre.name} ? </Alert.Heading>
                            {movies && genre.length > 0 ?
                            (
                                <p>
                                    Verranno eliminate anche: {movies.length} film . Vuoi Procedere?
                                </p>
                            )
                            : ""}

                            <div className="d-flex justify-content-end">
                                <button className="btn btn-outline-success btn-sm me-2" onClick={performDelete}>
                                    Conferma
                                </button>
                                <button className="btn btn-outline-danger btn-sm me-2" onClick={() => setShowDelete(false)}>
                                    Annulla
                                </button>
                            </div>
                        </Alert>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default GenreItem;