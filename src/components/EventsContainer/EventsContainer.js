import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listEvents } from "../../graphql/queries";
import EventCard from "../Events/EventCard";

const EventsContainer= ({company})=> {
    const [Events, setEvents] = useState([]);
    const Cust = async () => {
        let eventsData = await API.graphql(graphqlOperation(listEvents,
            {
                filter: {
                    company: { eq: company }
                }
                
            }));
        setEvents(eventsData.data.listEvents.items)
    }
    useEffect(()=>{
        Cust()
    }
, [Events]);
        return (
            
            <div className="container">
                <h1>Listado de reservas</h1>
                <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Provincia</th>
                    <th scope="col">País</th>
                    <th scope="col">Código Postal</th>
                    <th scope="col">Comentario</th>
                </tr>
            </thead>
                {Events.map((Event) => (
                <tbody key={Event.id}>
                  <EventCard Event={Event} />
                </tbody>
                        ))}
        </table>
          </div>
        )
    }
    export default EventsContainer;