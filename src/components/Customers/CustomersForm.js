//Form for new client
import React, { Component } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { API, graphqlOperation } from 'aws-amplify';
import { createCustomer } from '../../graphql/mutations';

//A client has a name, lastname, email, phone, address, city, province, country, postal code, and a comment

const AddCustomer = async (newCustomer)=>{
    try{await API.graphql(
            graphqlOperation(createCustomer, { input: newCustomer })
        );
        console.log("Se agrego al cliente a la db")

    }catch(error){
        console.log("Error al agregar cliente a la db:",error)
    }
}
export default class CreateCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            email: '',
            phone: "",
            address: '',
            city: '',
            province: '',
            country: '',
            postalcode: "",
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
            adress: this.state.address,
            city: this.state.city,
            province: this.state.province,
            country: this.state.country,
            postalcode: this.state.postalcode,
            comment: this.state.comment,
            company: this.props.company
        };
        this.setState({
            name: '',
            lastname: '',
            email: '',
            phone: "",
            address: '',
            city: '',
            province: '',
            country: '',
            postalcode: "",
            comment: ''
        });
        AddCustomer(customer);
    };
    render() {
        return (
            <div className="container">
                {/* Display the form in columns */}

                <h1>Crear Cliente</h1>
                <Form onSubmit={this.onSubmit}>
                    <Row className='mb-3'>
                    <Form.Group controlId="formInlineName" className="col col-sm-3">
                        <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlinelastname" className="col col-sm-3">
                        <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Apellido"
                                name="lastname"
                                value={this.state.lastname}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineEmail" className="col col-sm-3">
                        <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlinePhone" className="col col-sm-3">
                        <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Teléfono"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                    <br/>
                    <Form.Group controlId="formInlineAddress" className="col col-sm-3">
                        <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Dirección"
                                name="address"
                                value={this.state.address}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineCity" className="col col-sm-3">
                        <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ciudad"
                                name="city"
                                value={this.state.city}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineProvince" className="col col-sm-3">
                        <Form.Label>Provincia</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Provincia"
                                name="province"
                                value={this.state.province}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineCountry" className="col col-sm-3">
                        <Form.Label>País</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="País"
                                name="country"
                                value={this.state.country}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                    <br/>
                    <Form.Group controlId="formInlinepostalcode" className="col col-sm-3">
                        <Form.Label>Código Postal</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Código Postal"
                                name="postalcode"
                                value={this.state.postalcode}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineComment" className="col col-sm-6">
                        <Form.Label>Comentario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Comentario"
                                name="comment"
                                value={this.state.comment}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    </Row>
                    <Form.Group>
                            <Button type="submit">Crear</Button>
                    </Form.Group>
                </Form>
                <br/>
            </div>
        );
    }
}
