import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listEvents } from "../../graphql/queries";
import EventCard from "../Events/EventCard";

const EventsContainer= ({company})=> {
    const [events, setEvents] = useState([]);
    const EventsList = async () => {
        let eventsData = await API.graphql(graphqlOperation(listEvents,
            {
                filter: {
                    company: { eq: company }
                }
                
            }));
        setEvents(eventsData.data.listEvents.items)
        console.log(eventsData.data.listEvents.items)
    }
    useEffect(()=>{
        EventsList()
    }, []);
        return (
            
            <div className="container">
                <h1>Listado de eventos</h1>
                <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Tipo</th>
                    <th scope="col">Día</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Cant Invitados</th>
                    <th scope="col">Cant Mesas</th>
                    <th scope="col">Total</th>
                    <th scope="col">Anticipo</th>
                    <th scope="col">Forma de pago</th>
                    <th scope="col">Cuotas</th>
                    <th scope="col">Horas reservadas</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Observación</th>

                </tr>
            </thead>
                {events.map((Event) => (
                <tbody key={Event.id}>
                  <EventCard Event={Event} />
                </tbody>
                        ))}
        </table>
          </div>
        )
    }
    export default EventsContainer;