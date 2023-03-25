import { useState, useEffect} from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { listCustomers } from "../../graphql/queries";
const CustomerSelect = ({company}) => {
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
useEffect(()=>{
    dataCustomers()
}
, []);

return (
    <>
    {customers.map((customers) =>
    (<option value={customers.id}>{customers.name} {customers.lastname}</option>))}
    </>
)
}

export default CustomerSelect;