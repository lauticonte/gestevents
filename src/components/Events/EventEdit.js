import { Form, Button, Row } from 'react-bootstrap';
import {useState} from 'react';
import { updateEvent } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import CustomerSelect from './CustomerSelect';

const updEvent = async (eventToUpd) => {
    try{await API.graphql(
        graphqlOperation(updateEvent, { input: eventToUpd })
    );
        console.log("Se modifico el evento")
    }catch(error){
    console.log("Error al modificar el evento",error)
    }
}
const EventEdit = ({event,company}) =>{
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
                                
                            >
                            <option>Seleccione...</option>
                                <option>Fiesta de 15</option>
                                <option>Boda</option>
                                <option>Comunión</option>
                                <option>Bautismo</option>
                                <option>Graduación</option>
                                <option>Otro</option>
                            </Form.Control>
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
                    <Form.Group controlId="formHorizontalTotal" className="col col-sm-3">
                        <Form.Label>Total</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Total"
                                name="total"
                                defaultValue={event.total}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formHorizontalDownPayment" className="col col-sm-3">
                        <Form.Label>Anticipo</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Anticipo"
                                name="downPayment"
                                defaultValue={event.downPayment}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formHorizontalPaymethod" className="col col-sm-3">
                        <Form.Label>Forma de Pago</Form.Label>
                            <Form.Control
                                as="select"
                                placeholder="Forma de pago"
                                name="paymethod"
                                defaultValue={event.paymethod}
                                onChange={(e)=>{onChange(e)}}
                            >
                                <option>Seleccione...</option>
                                <option>Efectivo</option>
                                <option>Tarjeta de crédito</option>
                                <option>Tarjeta de débito</option>
                                <option>Transferencia</option>
                                <option>Mercado Pago</option>
                            </Form.Control>
                    </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                    <br/>
                    <Form.Group controlId="formHorizontalQtyBankFee" className="col col-sm-3">
                        <Form.Label>Cuotas</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Cuotas"
                                name="qtyBankFee"
                                defaultValue={event.qtyBankFee}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formHorizontalQtyHoursRes" className="col col-sm-3">
                        <Form.Label>Horas reservadas</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Cantidad horas"
                                name="qtyHoursRes"
                                defaultValue={event.qtyHoursRes}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formHorizontalObservation" className="col col-sm-3">
                        <Form.Label>Observación</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Observación"
                                name="observation"
                                defaultValue={event.observation}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formHorizontalCustomerEventsId" className="col col-sm-3">
                        <Form.Label>Cliente</Form.Label>
                            <Form.Control
                                as="select"
                                placeholder="Cliente"
                                name="customerEventsId"
                                defaultValue={event.customerEventsId}
                                onChange={(e)=>{onChange(e)}}
                            >
                            <option>Seleccione...</option>
                            <CustomerSelect company={company}/>
                            </Form.Control>
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