import { useState } from "react";
import { useGet } from "../_Hooks/Customs";
import { Link, Outlet } from "react-router-dom";
import { Table } from "react-bootstrap";
import MovieRow from "./MovieRow";
import { URL_MOVIES } from "../_Utils/Constants";
import Alert from "../Alert/Alert";


const Movies = () => {
    const {data, mutate} = useGet(URL_MOVIES);

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const alertDismiss = () => {
        setAlertShow(false);
        mutate();
    }

    const deleteSuccess = () => {
        setAlertMessage("Film eliminato");
        setAlertShow(true);
    }

    if(data) {
        return(
            <div className="container">
                <Link id="btnew" className="btn btn-sm" to="new"> Nuovo Film </Link>
                <Outlet context={{mutate}} />
                <h4 id="elenco">Elenco Film</h4>
                <div className="container" id="cd">
                <Table responsive>
                    <thead id="thead">
                        <tr>
                            <th></th>
                            <th>Titolo</th>
                            <th>Genere</th>
                            <th>Durata</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {data.map(movie => (
                            <MovieRow key={movie.id} movie={movie} deleteSuccess={deleteSuccess} />
                        ))}
                    </tbody>
                </Table>
                </div>
                <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />
            </div>
        );
    }
}

export default Movies;