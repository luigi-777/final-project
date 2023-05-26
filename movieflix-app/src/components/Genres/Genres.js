import Alert from "../Alert/Alert";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGet } from "../_Hooks/Customs";
import GenreItem from "./GenreItem";



const Genres =() => {

    const {data, error, mutate} = useGet("http://localhost:8080/genres");

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const alertDismiss = () => {
        setAlertShow(false);
        mutate();
    }

    const deleteSuccess = () => {
        setAlertMessage("Eliminazione completata");
        setAlertShow(true);
    }

    if(data) {
        return(
            <>
                <div className="container">
                    <Link id="btnew" to="new" className="btn btn-sm">Nuovo Genere</Link>
                    <h5 id="thead" className="m-1">Generi</h5>
                    <div className="row">
                        {data.map(genre => (
                            <GenreItem key={genre.id} genre={genre} deleteSuccess={deleteSuccess}/>
                        ))}
                    </div>
                </div>
                <Alert show={alertShow} onHide={alertDismiss} message={alertMessage}/>
            </>
        );
    }
}

export default Genres;