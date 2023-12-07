import React, { useState } from 'react';
import { Navbar, Nav, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoDark from '../images/logo_black.png';
import '../styles/Navbar.css';

function NavigationBar() {
    const [expanded, setExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const handleModalShow = () => {
        setShowModal(true);
        setExpanded(false);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Navbar className='navbar_bg' expand="lg" expanded={expanded}>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={LogoDark}
                        alt="Logo"
                        height="70"
                        className="navbar-logo d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" onClick={handleModalShow} />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="navbar-links">
                        <Nav.Link className='navbar-link' as={Link} to="/" activeClassName="active">
                            Home
                        </Nav.Link>
                        <Nav.Link className='navbar-link' as={Link} to="/about" activeClassName="active">
                            About
                        </Nav.Link>
                        <Nav.Link className='navbar-link' as={Link} to="/services" activeClassName="active">
                            Services
                        </Nav.Link>
                        <Nav.Link className='navbar-link' as={Link} to="/products" activeClassName="active" >
                            Products
                        </Nav.Link>
                        <Nav.Link className='navbar-link' as={Link} to="/blogs" activeClassName="active">
                            Blogs
                        </Nav.Link>
                    </Nav>
                    <Nav.Link className='navbar-link navbar-big-btn' as={Link} to="/contact" activeClassName="active">
                        Contact Us
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>

            <Modal className='modal' show={showModal} onHide={handleModalClose} centered>
                <Modal.Body className='modal-bdy'>
                    <Nav className="modal-navbar-links">
                        <Nav.Link as={Link} to="/" className='modal-link' activeClassName="active">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className='modal-link' activeClassName="active">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/services" className='modal-link' activeClassName="active">
                            Services
                        </Nav.Link>
                        <Nav.Link as={Link} to="/products" className='modal-link' activeClassName="active" >
                            Products
                        </Nav.Link>
                        <Nav.Link as={Link} to="/blogs" className='modal-link' activeClassName="active">
                            Blogs
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className='modal-link' activeClassName="active">
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default NavigationBar;