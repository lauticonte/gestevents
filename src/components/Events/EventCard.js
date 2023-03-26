//Create a Event Card displaying his information
import React, {useState, useEffect} from "react";
import { API, graphqlOperation } from "aws-amplify";
import { deleteEvent } from "../../graphql/mutations";
import { listCustomers } from "../../graphql/queries";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
// import EventEdit from "./EventEdit";
const delEvent = async (event_id) => {
    console.log("Delete event", event_id);
    //delete the event using the event id and graphql operations
    try{
        await API.graphql(graphqlOperation(deleteEvent, { input: {id:event_id} }));
        console.log("Se elimino al evento de la db")

    }catch(error){
        console.log("Error al eliminar evento de la db:",error)
    }
}
const EventCard = ({Event})=>{
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState("");
    const getCustomer = async (customerID) => {
        let customer = await API.graphql(graphqlOperation(listCustomers,
            {
                filter: {
                    id: { eq: customerID }
                }
            }));
            setCustomer(customer.data.listCustomers.items[0].name + " " + customer.data.listCustomers.items[0].lastname)
    }
    useEffect(() => {
        getCustomer(Event.customerEventsId)
    },[])

    

    return(
        <>
        <tr>
                    <td>{Event.type}</td>
                    <td>{Event.date}</td>
                    <td>{Event.time}</td>
                    <td>{Event.qtyInv}</td>
                    <td>{Event.qtyTables}</td>
                    <td>{Event.total}</td>
                    <td>{Event.downPayment}</td>
                    <td>{Event.paymethod}</td>
                    <td>{Event.qtyBankFee}</td>
                    <td>{Event.qtyHoursRes}</td>
                    <td>{Event.observation}</td>
                    <td>{customer}</td>

        <td> <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Editar</Button></td>
        <td> <button className="btn btn-danger" onClick={()=>{delEvent(Event.id)}}>Eliminar</button></td>
        </tr>
        {/* {/* Solo mostrar el tr del collapse si open es true */}
        {/* { open ? <tr>
            <td colSpan="10">
        <Collapse in={open}>
            <div id="example-collapse-text">
                <EventEdit event={Event}/>
            </div>
          </Collapse>
          </td>
          </tr>: null} */}
        
        </>


        
    )
}

export default EventCard;
