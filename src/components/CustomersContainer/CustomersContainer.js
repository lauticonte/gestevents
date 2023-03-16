import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listCustomers } from "../../graphql/queries";
import CustomerCard from "../Customers/CustomerCard";
const CustomersContainer= ({company})=> {
    const [customers, setCustomers] = useState([]);
    const Cust = async () => {
        let customersData = await API.graphql(graphqlOperation(listCustomers));
        setCustomers(customersData.data.listCustomers.items)
    }
    useEffect(()=>{
        Cust()
    }
, []);
        return (
            
            <div>
                <h1>Customers</h1>
                {customers.map((customer) => (
                    <div key={customer.id}>
                        <CustomerCard customer={customer} />
                    </div>
                    // console.log(customer.email)
                ))}
            </div>
        )
    }
    export default CustomersContainer;