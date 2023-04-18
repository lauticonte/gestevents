import { useEffect, useState, useCallback } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listEvents } from "../../graphql/queries";
import EventCard from "../Events/EventCard";

const EventsContainer= ({company})=> {
    const [events, setEvents] = useState([]);
    const [filteredList, setFilter] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const EventsList = useCallback(async () => {
        let eventsData = await API.graphql(graphqlOperation(listEvents,
            {
                filter: {
                    company: { eq: company }
                }
                
            }));
        setEvents(eventsData.data.listEvents.items)
        setFilter(eventsData.data.listEvents.items)
        setRefresh(false)
    }, [company]);

    const filterEvent = (event) => {
        const query = event.target.value
        let eventsAct = [...events]
        eventsAct = eventsAct.filter((Event) => {
            return (Event['date']).indexOf(query.toLowerCase()) !== -1;
        })
        setFilter(eventsAct)
    }
    useEffect(()=>{
        EventsList()
    }, [EventsList,refresh]);
        return (
            
            <div className="container">
                <h1>Listado de eventos</h1>
                <input className="" onChange={(e)=>{filterEvent(e)}} placeholder="Buscar por fecha" type="date" />
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
                {filteredList.map((Event) => (
                <tbody key={Event.id}>
                  <EventCard Event={Event} onEdit={setRefresh} />
                </tbody>
                        ))}
        </table>
          </div>
        )
    }
    export default EventsContainer;