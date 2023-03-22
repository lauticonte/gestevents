//Create a Customer Card displaying his information
import { API, graphqlOperation } from "aws-amplify";
import { deleteCustomer } from "../../graphql/mutations";

const CustomerCard = ({customer})=>{
    //Display the customer information in a booststrap table
    const delCustomer = async (customer_id) => {
        console.log("Delete customer", customer_id);
        //delete the customer using the customer id and graphql operations
        try{
            await API.graphql(graphqlOperation(deleteCustomer, { input: {id:customer_id} }));
            console.log("Se elimino al cliente de la db")

        }catch(error){
            console.log("Error al eliminar cliente de la db:",error)
        }
    }

    return(
        
        <tr>
                    <td>{customer.name}</td>
                    <td>{customer.lastname}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.adress}</td>
                    <td>{customer.city}</td>
                    <td>{customer.province}</td>
                    <td>{customer.country}</td>
                    <td>{customer.postalcode}</td>
                    <td>{customer.comment}</td>
        <td> <button className="btn btn-primary">Editar</button></td>
        <td> <button className="btn btn-danger" onClick={()=>{delCustomer(customer.id)}}>Eliminar</button></td>
        </tr>
    )
}

export default CustomerCard;
