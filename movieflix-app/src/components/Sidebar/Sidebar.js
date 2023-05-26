import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
        <Navbar className='d-flex justify-content-around' expand="lg" id='nav'>
                <Navbar.Brand id='navlink' href="#">Movieflix</Navbar.Brand>
                <div className='d-flex justify-content-end'>
                 <Navbar.Brand id='navlink' href="#">
                  <Link to="movies" className="nav-link" onClick={handleClose}> Film </Link>
                 </Navbar.Brand>
                  <Navbar.Brand id='navlink' href="#">
                   <Link to="genres" className="nav-link" onClick={handleClose}> Generi </Link>
                  </Navbar.Brand>
                   <Navbar.Brand id='navlink' href="#">
                    <Link to="/" className="nav-link active" onClick={handleClose}> Home </Link>
                   </Navbar.Brand>
                   </div> 
        </Navbar>

    </>
  );
}

export default Sidebar;