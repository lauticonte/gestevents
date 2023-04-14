import { useState, useEffect} from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { listCustomers } from "../../graphql/queries";
const CustomerSelect = ({company,onStart,id}) => {
    const [customers, setCustomers] = useState([]);
    const dataCustomers = async () => {
    let customersData = await API.graphql(graphqlOperation(listCustomers,
        {
            filter: {
                company: { eq: company }
            }
            
        }));
    setCustomers(customersData.data.listCustomers.items)
    }
    //recorrer el array de customers y buscar el id del customer que coincida con el id del evento

    for (let i = 0; i < customers.length; i++) {
        if (customers[i].id === id) {
            onStart(customers[i].name + " " + customers[i].lastname)
            break;
        }
    }
useEffect(()=>{
    dataCustomers()
}
, []);

return (
    <>
    {customers.map((customers) =>
    (<option key={customers.id} value={customers.id}>{customers.name} {customers.lastname}</option>))}
    </>
)
}

export default CustomerSelect;