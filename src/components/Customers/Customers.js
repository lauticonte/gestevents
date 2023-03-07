//Form for new client
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { API } from 'aws-amplify';
//A client has a name, lastname, email, phone, address, city, province, country, postal code, and a comment

export default class CreateCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            province: '',
            country: '',
            postalcode: '',
            comment: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const customer = {
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            city: this.state.city,
            province: this.state.province,
            country: this.state.country,
            postalcode: this.state.postalcode,
            comment: this.state.comment,
            company: this.props.company
        };
        //Create customer in graphql
        API.graphql({
            query: createCustomer,
            variables: { input: {
                name: this.state.name,
                lastname: this.state.lastname,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address,
                city: this.state.city,
                province: this.state.province,
                country: this.state.country,
                postalcode: this.state.postalcode,
                comment: this.state.comment,
                company: this.props.company
                }}
        });
        // API.post('customersAPI', '/customers', {
        //     body:{
        //         name: this.state.name,
        //         lastname: this.state.lastname,
        //         email: this.state.email,
        //         phone: this.state.phone,
        //         address: this.state.address,
        //         city: this.state.city,
        //         province: this.state.province,
        //         country: this.state.country,
        //         postalcode: this.state.postalcode,
        //         comment: this.state.comment,
        //         company: this.props.company
        //     }
        // })
        console.log(customer);
    };
    render() {
        return (
            <div>
                
                <h1>Crear Nuevo Cliente</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Nombre
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontallastname">
                        <Form.Label column sm={2}>
                            Apellido
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Apellido"
                                name="lastname"
                                value={this.state.lastname}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPhone">
                        <Form.Label column sm={2}>
                            Teléfono
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Teléfono"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalAddress">
                        <Form.Label column sm={2}>
                            Dirección
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Dirección"
                                name="address"
                                value={this.state.address}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalCity">
                        <Form.Label column sm={2}>
                            Ciudad
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Ciudad"
                                name="city"
                                value={this.state.city}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalProvince">
                        <Form.Label column sm={2}>
                            Provincia
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Provincia"
                                name="province"
                                value={this.state.province}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalCountry">
                        <Form.Label column sm={2}>
                            País
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="País"
                                name="country"
                                value={this.state.country}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalpostalcode">
                        <Form.Label column sm={2}>
                            Código Postal
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Código Postal"
                                name="postalcode"
                                value={this.state.postalcode}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalComment">
                        <Form.Label column sm={2}>
                            Comentario
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Comentario"
                                name="comment"
                                value={this.state.comment}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Crear</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
