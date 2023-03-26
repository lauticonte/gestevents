import { API, graphqlOperation } from "aws-amplify";
import { deleteCustomer } from "../../graphql/mutations";
import { deleteEvent } from "../../graphql/mutations";
import { listEvents } from "../../graphql/queries";
const CustomerDelete = async (customer_id) => {
    console.log("Delete customer", customer_id);
    // delete the customer using the customer id and graphql operations
    try{
        await API.graphql(graphqlOperation(deleteCustomer, { input: {id:customer_id} }));
        console.log("Se elimino al cliente de la db")

            try{
                let eventsData = await API.graphql(graphqlOperation(listEvents, 
                    { 
                        filter: {
                            customerEventsId: {eq: customer_id}
                        }}));
                let events = eventsData.data.listEvents.items;
                console.log(events)
                events.map(async (event)=>{
                    try {
                        await API.graphql(graphqlOperation(deleteEvent, { input: {id:event.id} }));
                        console.log("Se elimino el evento del cliente")
        
                    } catch (error) {
                        console.log("Error al eliminar evento del cliente:",error)
                    }
                })
        
            }catch(error){
                console.log("Error al obtener eventos del cliente:",error)
            }
    }catch(error){
        console.log("Error al eliminar cliente de la db:",error)
    }

}

export default CustomerDelete