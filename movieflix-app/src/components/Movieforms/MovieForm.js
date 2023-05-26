import Alert from "../Alert/Alert";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { usePost, usePut } from "../_Hooks/Customs";
import FetchSelect from "../FetchSelect/FetchSelect";




const MovieForm = ({data = {}, mutate}) => {
     const [movie, setMovie] = useState({
        name: "",
        duration: 0,
        publishDate: "",
        idGenre: 0
     })

     const [alertShow, setAlertShow] = useState(false);
     const [alertMessage, setAlertMessage] = useState("");

     const putData = usePut("http://localhost:8080/movies", data.id);

     const postData = usePost("http://localhost:8080/movies");

     const navigate = useNavigate();

     useEffect(() => {
        if(data.id > 0){
            setMovie({
                name: data.name,
                duration: data.duration,
                publishDate: data.publishDate ? data.publishDate : "",
                idGenre: data.idGenre
            });
        }
     }, [data.id, data.name, data.duration, data.publishDate, data.idGenre])

     const handleChange = (e) => {
        setMovie((prevValues) => {
            return{
                ...prevValues,
                [e.target.name] : e.target.value
            }
        });
     }

     const handleSubmit = (e) => {
        e.preventDefault();
        if(data.id > 0) {
            putData(movie, submitSuccess);
        }
        else {
            postData(movie, submitSuccess);
        }
     }

     const submitSuccess = () => {
        setAlertMessage("Salvataggio Completato")
        setAlertShow(true);
     }

     const alertDismiss = () => {
        setAlertShow(false);
        navigate("/movies", {replace: true});
        mutate();
     }

     return(
        <>
            <form id="form" className="row" onSubmit={handleSubmit}>
                <div className="col-6">
                    <label className="form-lable">Titolo</label>
                    <input className="form-control form-control-sm" name="name" value={movie.name} onChange={handleChange}/>
                </div>
                <div className="col-6">
                    <label className="form-lable">Genere</label>
                    <FetchSelect className="form-control form-control-sm" name="idGenre" value={movie.idGenre} onChange={handleChange} url={"http://localhost:8080/genres"}/> 
                </div>
                <div className="col-4">
                    <label className="form-lable">Data</label>
                    <input className="form-control form-control-sm" name="publishDate" value={movie.publishDate.substring(0,10)} onChange={handleChange}/>
                </div>
                <div className="col-2">
                    <label className="form-lable">Durata</label>
                    <input className="form-control form-control-sm" name="duration" value={movie.duration} onChange={handleChange}/>
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-around mt-3">
                        <button className="btn btn-success active" type="submit">Salva</button>
                        <Link className="btn btn-outline-danger active" to="/movies">Annulla</Link>
                    </div>
                </div>
            </form>
            <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />
        </>
     );
}

export default MovieForm;