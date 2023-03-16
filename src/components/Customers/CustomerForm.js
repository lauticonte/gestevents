//Form for new client
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { API, graphqlOperation } from 'aws-amplify';
import { useMutation } from '@apollo/react-hooks';
import { createCustomer } from '../../graphql/mutations';
//A client has a name, lastname, email, phone, address, city, province, country, postal code, and a comment
function AddCustomer(customer){
    console.log(customer)
    const [CreateCustomer] = useMutation(createCustomer);
    CreateCustomer({ variables: {
        name: customer.name,
        lastname: customer.lastname,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
        city: customer.city,
        province: customer.province,
        country: customer.country,
        postalcode: customer.postalcode,
        comment: customer.comment,
        company: customer.company
    } })
    console.log("Se agrego al cliente a la db")
const createCustomer = () => {
    let name,lastname,email,phone,address,city,province,country,postalcode,comment,company;
    const [CreateCustomer] = useMutation(createCustomer);
    
    };
        return (
            <div>
                
                <h1>Crear Nuevo Cliente</h1>
                <Form onSubmit={e=>{
                    e.preventDefault();
                    CreateCustomer({variables:{
                        name: name.value,
                        lastname: lastname.value,
                        email: email.value,
                        phone: phone.value,
                        address: address.value,
                        city: city.value,
                        province: province.value,
                        country: country.value,
                        postalcode: postalcode.value,
                        comment: comment.value,
                        company: "cloud"
                    }})
                }}>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Nombre
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                ref={value => name = value}
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
                                ref={value => lastname = value}
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
                                ref={value => email = value}
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
                                ref={value => phone = value}
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
                                ref={value => address = value}
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
                                ref={value => city = value}
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
                                ref={value => province = value}
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
                                ref={value => country = value}
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
                                ref={value => postalcode = value}
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
                                ref={value => comment = value}
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
export default createCustomer;
