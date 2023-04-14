//Form for new client
import React, { Component } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from '../../graphql/mutations';

//A user has a name, lastname, company and companycuit

const AddUser = async (newUser)=>{
    try{await API.graphql(
            graphqlOperation(createUser, { input: newUser })
        );
        console.log("Se agrego al usuario a la db")

    }catch(error){
        console.log("Error al agregar al usuario a la db:",error)
    }
    
}

export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cognitoID:'',
            name: '',
            lastname: '',
            company:'',
            companycuit:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            cognitoID: this.props.id,
            name: this.state.name,
            lastname: this.state.lastname,
            company: this.state.company,
            companycuit: this.state.companycuit
        };
        AddUser(user);
        this.props.act(true);
    };
    render() {
        return (
            <div className="container">
                {/* Display the form in columns */}

                <h1>Información de usuario</h1>
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
                    <Form.Group controlId="formInlineCompany" className="col col-sm-3">
                        <Form.Label>Organización</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre de la organización"
                                name="company"
                                value={this.state.company}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineCompanycuit" className="col col-sm-3">
                        <Form.Label>CUIT</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Cuit de la organización"
                                name="companycuit"
                                value={this.state.companycuit}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    </Row>
                    <Form.Group>
                            <Button type="submit">Confirmar</Button>
                    </Form.Group>
                </Form>
                <br/>
            </div>
        );
    }
}
