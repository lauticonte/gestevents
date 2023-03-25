//Create a Event Card displaying his information
import React, {useState} from "react";
import { API, graphqlOperation } from "aws-amplify";
import { deleteEvent } from "../../graphql/mutations";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
// import EventEdit from "./EventEdit";

const EventCard = ({event})=>{
    const [open, setOpen] = useState(false);
    //Display the event information in a booststrap table
    const delEvent = async (event_id) => {
        console.log("Delete event", event_id);
        //delete the event using the event id and graphql operations
        try{
            await API.graphql(graphqlOperation(deleteEvent, { input: {id:event_id} }));
            console.log("Se elimino al cliente de la db")

        }catch(error){
            console.log("Error al eliminar cliente de la db:",error)
        }
    }

    return(
        <>
        <tr>
                    {/* <td>{event.type}</td> */}
                    {console.log(event)}
                    <td>{event.date}</td>
                    <td>{event.time}</td>
                    <td>{event.observation}</td>
                    <td>{event.qtyInv}</td>
                    <td>{event.qtyTables}</td>
                    <td>{event.total}</td>
                    <td>{event.downPayment}</td>
                    <td>{event.paymethod}</td>

        <td> <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Editar</Button></td>
        {/* <td> <button className="btn btn-danger" onClick={()=>{delEvent(event.id)}}>Eliminar</button></td>
        </tr>
        {/* Solo mostrar el tr del collapse si open es true */}
        {/* { open ? <tr>
            <td colSpan="10">
        <Collapse in={open}>
            <div id="example-collapse-text">
                <EventEdit event={event}/>
            </div>
          </Collapse>
          </td>
          </tr>: null} */}
        </tr>
        
        </>


        
    )
}

export default EventCard;
