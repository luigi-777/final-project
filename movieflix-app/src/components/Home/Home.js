import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
    <div className="container">
        <div className="d-flex justify-content-center text-sm-center">
        <h2 id="homepage">Home page <br></br>I migliori film a disposizione</h2>
        </div>
        <div className='col-12'>
        <div className='container d-flex justify-content-between' id='card'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91hHcbk5XbL._SL1500_.jpg" height="320px" width="200px" />
      <Card.Body>
        <Card.Title>Jumanji</Card.Title>
        <Card.Text>
          Immergiti nella natura insieme al dott.Smolder sequel rivisionato del primo film degli anni 90 
        </Card.Text>
        <Button variant="primary">
            <a id='trail' href='https://www.youtube.com/watch?v=L7B1OYlD9q8&t=3s&pp=ygURanVtYW5qaSBhbnRlcHJpbWE%3D' target="_blank">Guarda il trailer</a>
        </Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://pad.mymovies.it/filmclub/2009/04/029/locandina.jpg"  height="320px" width="200rem"  />

      <Card.Body>
        <Card.Title>IT</Card.Title>
        <Card.Text>
        IT il pagliaccio : in arrivo una Director's Cut con 15 minuti in più - Best Movie horror negli anni 2000
        </Card.Text>
         <Button variant="primary">
            <a id='trail' href='https://www.youtube.com/watch?v=A1x1s__vlKU&pp=ygUOaXQgdHJhaWxlciBpdGE%3D' target="_blank">Guarda il trailer</a>
        </Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn1.thespacecinema.it/-/media/tsc/2023/05/fast-x/locandina_fastx_top.jpg" height="320px" width="200rem" />
      <Card.Body>
        <Card.Title>Fast X</Card.Title>
        <Card.Text>
        È la decima pellicola della saga di Fast & Furious, sequel di Fast & Furious 9 - The Fast Saga.
        </Card.Text>
        <Button variant="primary">
           <a id='trail' href='https://www.youtube.com/watch?v=1rUyJtfOgwE&pp=ygUTZmFzdCBhbmQgZnVyaW91cyAxMA%3D%3D' target="_blank">Guarda il trailer</a>
        </Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" height="320px" width="200rem"  />
      <Card.Body>
        <Card.Title>John Wick 4</Card.Title>
        <Card.Text>
        La pellicola, con protagonista Keanu Reeves, è il sequel del film del 2019 John Wick 3 - Parabellum.
        </Card.Text>
        <Button variant="primary">
            <a id='trail' href='https://www.youtube.com/watch?v=1-E33mUItH0&pp=ygULam9obiB3aWNrIDQ%3D' target="_blank">Guarda il trailer</a>
        </Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://pad.mymovies.it/filmclub/2009/03/053/locandina.jpg" height="320px" width="200rem"  />
      <Card.Body>
        <Card.Title>Hangover</Card.Title>
        <Card.Text>
        Una notte da leoni è un film statunitense del 2009 diretto da Todd Phillips, con Bradley Cooper
        </Card.Text>
        <Button variant="primary">
            <a id='trail' href='https://www.youtube.com/watch?v=Y3Wv824Ndv4&pp=ygUedW5hIG5vdHRlIGRhIGxlb25pIHRyYWlsZXIgaXRh' target="_blank">Guarda il trailer</a>
        </Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>    
    );
}

export default Home;