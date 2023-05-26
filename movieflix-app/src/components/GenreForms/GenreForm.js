import { useEffect } from "react";
import { useState }  from "react";
import { FloatingLabel }  from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { usePut, usePost } from "../_Hooks/Customs";
import Alert from "../Alert/Alert";



const GenreForm = ({data = {}}) => {

    const [genre, setGenre] = useState({
        name: ""
    });

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const putData = usePut("http://localhost:8080/genres", data.id);

    const postData = usePost("http://localhost:8080/genres");

    const navigate = useNavigate();

    useEffect(() => {
        if(data.id > 0) {
            setGenre({
                name: data.name
            })
        }
    }, [data])

    const handleChange = (e) => {
        setGenre((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.id > 0) {
            putData(genre, submitSuccess);
        }
        else {
            postData(genre, submitSuccess);
        }
    }

    const submitSuccess = () => {
        setAlertMessage('Salvataggio completato');
        setAlertShow(true);
      };

    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/genres", {replace: true});
    }

    return(
        <>
            <form className="row">
                <div className="col-12">
                    <FloatingLabel controlId="txtName" label="Nome" className="my-2">
                        <input id="txtName" className="form-control" name="name" value={genre.name} onChange={handleChange} placeholder="Nome"></input>
                    </FloatingLabel>
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-sm btn-outline-success active" onClick={handleSubmit}>Salva</button>
                        <Link className="btn btn-sm btn-outline-danger active" to="/genres">Annulla</Link>
                    </div>
                </div>
            </form>
            <Alert show={alertShow} onHide={alertDismiss} message={alertMessage}/>
        </>
    );
}

export default GenreForm;