import { Form, Button, Row } from 'react-bootstrap';
import {useState} from 'react';
import { updateCustomer } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

const updCustomer = async (customerToUpd) => {
    try{await API.graphql(
        graphqlOperation(updateCustomer, { input: customerToUpd })
    );
        console.log("Se modifico al cliente")
    }catch(error){
    console.log("Error al modificar al cliente",error)
    }
}
const CustomerEdit = ({customer}) =>{
    const [newCustomer, setnewCustomer] = useState({['id']:customer.id})
    
    const onChange = (e) => {
        setnewCustomer({...newCustomer, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        updCustomer(newCustomer);
    }

    return(
    <Form onSubmit={(e)=>{onSubmit(e)}}>
                    <Row className='mb-3'>
                    <Form.Group controlId="formInlineName" className="col col-sm-3">
                        <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                defaultValue={customer.name}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlinelastname" className="col col-sm-3">
                        <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Apellido"
                                name="lastname"
                                defaultValue={customer.lastname}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineEmail" className="col col-sm-3">
                        <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                defaultValue={customer.email}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlinePhone" className="col col-sm-3">
                        <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Teléfono"
                                name="phone"
                                defaultValue={customer.phone}
                                onChange={(e)=>{onChange(e)}}
                                
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
                                name="adress"
                                defaultValue={customer.adress}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineCity" className="col col-sm-3">
                        <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ciudad"
                                name="city"
                                defaultValue={customer.city}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineProvince" className="col col-sm-3">
                        <Form.Label>Provincia</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Provincia"
                                name="province"
                                defaultValue={customer.province}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineCountry" className="col col-sm-3">
                        <Form.Label>País</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="País"
                                name="country"
                                defaultValue={customer.country}
                                onChange={(e)=>{onChange(e)}}
                                
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
                                defaultValue={customer.postalcode}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineComment" className="col col-sm-6">
                        <Form.Label>Comentario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Comentario"
                                name="comment"
                                defaultValue={customer.comment}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    </Row>
                    <Form.Group>
                            <Button type="submit">Editar</Button>
                    </Form.Group>
                </Form>
                )
}
export default CustomerEdit;