//Navbar with links to different components
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
//import { useAuth } from '../../contexts/AuthContext';
//import { useHistory } from 'react-router-dom';

export default function NavigationBar({ signOut }) {
    // const { currentUser, logout } = useAuth();
    //const history = useHistory();
    
    // async function handleLogout() {
    //     try {
    //     await logout();
    //     history.push('/login');
    //     } catch {
    //     console.log('Failed to log out');
    //     }
    // }
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/* <Navbar.Brand as={Link} to="/">
            GestEvents
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            {/* <NavDropdown title="Clientes" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/createCustomer">
                Nuevo Cliente
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/allCustomers">
                Listado de Clientes
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reservas" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/createEvent">
                Nueva Reserva
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/allEvents">
                Listado de Reservas
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cuenta" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/update-profile">
                Actualizar Información
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={signOut}>Log Out</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
    }
    