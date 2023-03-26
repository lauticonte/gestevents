import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listCustomers } from "../../graphql/queries";
import CustomerCard from "../Customers/CustomerCard";

const CustomersContainer= ({company})=> {
    const [customers, setCustomers] = useState([]);
    const Cust = async () => {
        let customersData = await API.graphql(graphqlOperation(listCustomers,
            {
                filter: {
                    company: { eq: company }
                }
                
            }));
        setCustomers(customersData.data.listCustomers.items)
        console.log(customersData.data.listCustomers.items)
    }
    useEffect(()=>{
        Cust()
    }, []);
        return (
            
            <div className="container">
                <h1>Customers</h1>
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
                {customers.map((customer) => (
                <tbody key={customer.id}>
                  <CustomerCard customer={customer} />
                </tbody>
                        ))}
        </table>
          </div>
        )
    }
    export default CustomersContainer;