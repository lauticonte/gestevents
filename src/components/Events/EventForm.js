//Form for new Event
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { API, graphqlOperation } from 'aws-amplify';
import { useMutation } from '@apollo/react-hooks';
import { createEvent } from '../../graphql/mutations';

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
            customerEventsId: "24f4c655-712c-40c1-a6c1-0331cec107e6"
        };
        AddEvent(Event);
    };
    render() {
        return (
            <div className='container'>
                
                <h1>Crear Nuevo evento</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group as={Row} controlId="formHorizontalType">
                        <Form.Label column sm={2}>
                            Tipo
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Tipo"
                                name="type"
                                value={this.state.type}
                                onChange={this.onChange}
                            />

                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row} controlId="formHorizontalDate">
                        <Form.Label column sm={2}>
                            Fecha
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="date"
                                placeholder="Fecha"
                                name="date"
                                value={this.state.date}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row} controlId="formHorizontalTime">
                        <Form.Label column sm={2}>
                            Hora
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="time"
                                placeholder="Hora"
                                name="time"
                                value={this.state.time}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row} controlId="formHorizontalObservation">
                        <Form.Label column sm={2}>
                            Observación
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Observación"
                                name="observation"
                                value={this.state.observation}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row} controlId="formHorizontalQtyInv">
                        <Form.Label column sm={2}>
                            Invitados
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="number"
                                placeholder="Invitados"
                                name="qtyInv"
                                value={this.state.qtyInv}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row} controlId="formHorizontalQtyTables">
                        <Form.Label column sm={2}>
                            Mesas
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="number"
                                placeholder="Mesas"
                                name="qtyTables"
                                value={this.state.qtyTables}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row} controlId="formHorizontalTotal">
                        <Form.Label column sm={2}>
                            Total
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="number"
                                placeholder="Total"
                                name="total"
                                value={this.state.total}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row} controlId="formHorizontalDownPayment">
                        <Form.Label column sm={2}>
                            Anticipo
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="number"
                                placeholder="Anticipo"
                                name="downPayment"
                                value={this.state.downPayment}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row} controlId="formHorizontalPaymethod">
                        <Form.Label column sm={2}>
                            Forma de pago
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Forma de pago"
                                name="paymethod"
                                value={this.state.paymethod}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row} controlId="formHorizontalQtyBankFee">
                        <Form.Label column sm={2}>
                            Cuotas
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="number"
                                placeholder="Cuotas"
                                name="qtyBankFee"
                                value={this.state.qtyBankFee}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row} controlId="formHorizontalQtyHoursRes">
                        <Form.Label column sm={2}>
                            Horas de reserva
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="number"
                                placeholder="Horas de reserva"
                                name="qtyHoursRes"
                                value={this.state.qtyHoursRes}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row} controlId="formHorizontalDateRegister">
                        <Form.Label column sm={2}>
                            Fecha de registro
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="date"
                                placeholder="Fecha de registro"
                                name="dateRegister"
                                value={this.state.dateRegister}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row} controlId="formHorizontalCustomerEventsId">
                        <Form.Label column sm={2}>
                            Cliente
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" name="customerEventsId" value={this.state.customerEventsId} onChange={this.onChange}>
                                <option value="24f4c655-712c-40c1-a6c1-0331cec107e6">Cliente 1</option>
                                <option value="24f4c655-712c-40c1-a6c1-0331cec107e6">Cliente 2</option>
                            
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Crear evento</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
