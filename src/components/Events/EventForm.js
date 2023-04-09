//Form for new Event
import React, { Component, useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { API, graphqlOperation } from 'aws-amplify';
import { createEvent } from '../../graphql/mutations';
import CustomerSelect from './CustomerSelect';

//A Event has a type, date, time, observation, qtyInv, qtyTables, total, downPayment, paymethod, qtyBankFee, qtyHoursRes, dateRegister
const AddEvent = async (newEvent)=>{
    console.log(newEvent)
    try{await API.graphql(
            graphqlOperation(createEvent, { input: newEvent })
        );
    console.log("Se agrego al evento a la db")
    }catch(error){
        console.log("Error al agregar evento a la db:",error)
    }
}

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            date: '',
            time: '',
            observation: "",
            qtyInv: '',
            qtyTables: '',
            total: '',
            downPayment: '',
            paymethod: '',
            qtyBankFee: '',
            qtyHoursRes: '',
            dateRegister: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const Event = {
            type: this.state.type,
            date: this.state.date,
            time: this.state.time,
            observation: this.state.observation,
            qtyInv: this.state.qtyInv,
            qtyTables: this.state.qtyTables,
            total: this.state.total,
            downPayment: this.state.downPayment,
            paymethod: this.state.paymethod,
            qtyBankFee: this.state.qtyBankFee,
            qtyHoursRes: this.state.qtyHoursRes,
            dateRegister: this.state.dateRegister,
            company: this.props.company,
            customerEventsId: this.state.customerEventsId
        };
        this.setState({
            type: '',
            date: '',
            time: '',
            observation: "",
            qtyInv: '',
            qtyTables: '',
            total: '',
            downPayment: '',
            paymethod: '',
            qtyBankFee: '',
            qtyHoursRes: '',
            dateRegister: ''
        });
        
        AddEvent(Event);
    };
    render() {
        return (
            <div className='container'>
                
                <h1>Crear Evento</h1>
                <Form onSubmit={this.onSubmit}>
                <Row className='mb-3'>
                    <Form.Group className="col col-sm-3" controlId="formHorizontalType">
                        <Form.Label  >
                            Tipo
                        </Form.Label>
                            <Form.Control
                                as="select"
                                placeholder="Tipo"
                                name="type"
                                value={this.state.type}
                                onChange={this.onChange}
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
                    <Form.Group className="col col-sm-3" controlId="formHorizontalDate">
                        <Form.Label  >
                            Fecha
                        </Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Fecha"
                                name="date"
                                value={this.state.date}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group className="col col-sm-3" controlId="formHorizontalTime">
                        <Form.Label  >
                            Hora
                        </Form.Label>
                            <Form.Control
                                type="time"
                                placeholder="Hora"
                                name="time"
                                value={this.state.time}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group className="col col-sm-3" controlId="formHorizontalQtyInv">
                        <Form.Label  >
                            Invitados
                        </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Invitados"
                                name="qtyInv"
                                value={this.state.qtyInv}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                    <br/>
                    <Form.Group className="col col-sm-3" controlId="formHorizontalQtyTables">
                        <Form.Label  >
                            Mesas
                        </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Mesas"
                                name="qtyTables"
                                value={this.state.qtyTables}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group className="col col-sm-3" controlId="formHorizontalTotal">
                        <Form.Label  >
                            Total
                        </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Total"
                                name="total"
                                value={this.state.total}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group className="col col-sm-3" controlId="formHorizontalDownPayment">
                        <Form.Label  >
                            Anticipo
                        </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Anticipo"
                                name="downPayment"
                                value={this.state.downPayment}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group className="col col-sm-3" controlId="formHorizontalPaymethod">
                        <Form.Label  >
                            Forma de pago
                        </Form.Label>
                            <Form.Control
                                as="select"
                                placeholder="Forma de pago"
                                name="paymethod"
                                value={this.state.paymethod}
                                onChange={this.onChange}
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
                    <Form.Group className="col col-sm-3" controlId="formHorizontalQtyBankFee">
                        <Form.Label  >
                            Cuotas
                        </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Cuotas"
                                name="qtyBankFee"
                                value={this.state.qtyBankFee}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group className="col col-sm-3" controlId="formHorizontalQtyHoursRes">
                        <Form.Label  >
                            Horas reservadas
                        </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Cantidad Horas"
                                name="qtyHoursRes"
                                value={this.state.qtyHoursRes}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group className="col col-sm-3" controlId="formHorizontalObservation">
                        <Form.Label  >
                            Observación
                        </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Observación"
                                name="observation"
                                value={this.state.observation}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group className="col col-sm-3" controlId="formHorizontalCustomerEventsId">
                        <Form.Label  >
                            Cliente
                        </Form.Label>
                            <Form.Control as="select" name="customerEventsId" value={this.state.customerEventsId} onChange={this.onChange}>
                                <option>Seleccione...</option>
                                <CustomerSelect company={this.props.company}/>
                                
                            
                            </Form.Control>
                    </Form.Group>
                    </Row>
                    <Form.Group className="col col-sm-3">
                            <Button type="submit">Crear evento</Button>
                    </Form.Group>
                </Form>
                <br/>
            </div>
        );
    }
}
