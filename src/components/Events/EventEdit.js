import { Form, Button, Row } from 'react-bootstrap';
import {useState} from 'react';
import { updateEvent } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

const updEvent = async (eventToUpd) => {
    try{await API.graphql(
        graphqlOperation(updateEvent, { input: eventToUpd })
    );
        console.log("Se modifico al cliente")
    }catch(error){
    console.log("Error al modificar al cliente",error)
    }
}
const EventEdit = ({event}) =>{
    const [newEvent, setnewEvent] = useState({['id']:event.id})
    
    const onChange = (e) => {
        setnewEvent({...newEvent, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        updEvent(newEvent);
    }

    return(
    <Form onSubmit={(e)=>{onSubmit(e)}}>
                    <Row className='mb-3'>
                    <Form.Group controlId="formHorizontalType" className="col col-sm-3">
                        <Form.Label>Tipo</Form.Label>
                            <Form.Control
                                as="select"
                                placeholder="Tipo"
                                name="type"
                                defaultValue={event.type}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                            <option>Seleccione...</option>
                                <option>Fiesta de 15</option>
                                <option>Boda</option>
                                <option>Comunión</option>
                                <option>Bautismo</option>
                                <option>Graduación</option>
                                <option>Otro</option>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formHorizontalDate" className="col col-sm-3">
                        <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Fecha"
                                name="date"
                                defaultValue={event.date}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formHorizontalTime" className="col col-sm-3">
                        <Form.Label>Hora</Form.Label>
                            <Form.Control
                                type="time"
                                placeholder="Hora"
                                name="time"
                                defaultValue={event.time}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formHorizontalQtyInv" className="col col-sm-3">
                        <Form.Label>Invitados</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Invitados"
                                name="qtyInv"
                                defaultValue={event.qtyInv}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                    <br/>
                    <Form.Group controlId="formHorizontalQtyTables" className="col col-sm-3">
                        <Form.Label>Mesas</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Mesas"
                                name="qtyTables"
                                defaultValue={event.qtyTables}
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
                                defaultValue={event.city}
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
                                defaultValue={event.province}
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
                                defaultValue={event.country}
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
                                defaultValue={event.postalcode}
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
                                defaultValue={event.comment}
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
export default EventEdit;