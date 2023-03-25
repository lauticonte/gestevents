//Navbar with links to different components
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Amplify, API } from 'aws-amplify';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import aws_exports from '../../aws-exports';
Amplify.configure(aws_exports);


export default function NavigationBar({ signOut, user }) {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
            GestEvents
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Clientes" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/createCustomer"}>
                Nuevo Cliente
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/allCustomers">
                Listado de Clientes
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Eventos" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/createEvent">
                Nuevo Evento
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/allEvents">
                Listado de Eventos
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cuenta" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/update-profile">
                Actualizar Información
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={signOut}>Log Out</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
    }
    