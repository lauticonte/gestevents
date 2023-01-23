import { useEffect, useState } from "react";
import { API } from "aws-amplify";

function CustomersContainer(company){
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
       
        setCustomers(API.get("customersAPI", "customers/:alejoveronese2022@gmail.com"))
    }, []);
        return (
            
            <div>
                <h1>Customers</h1>
                {customers}
            </div>
        )
    }
    export default CustomersContainer;