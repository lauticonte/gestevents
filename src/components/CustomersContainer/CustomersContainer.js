import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listCustomers } from "../../graphql/queries";
import CustomerCard from "../Customers/CustomerCard";

const CustomersContainer= ({company})=> {
    const [customers, setCustomers] = useState([]);
    const [filteredList, setFilter] = useState([]);
    const Cust = async () => {
        let customersData = await API.graphql(graphqlOperation(listCustomers,
            {
                filter: {
                    company: { eq: company }
                }
                
            }));
        setCustomers(customersData.data.listCustomers.items)
        setFilter(customersData.data.listCustomers.items)
    }
    
    const filterCustomer = (event) => {
        const query = event.target.value
        let customersAct = [...customers]
        customersAct = customersAct.filter((customer) => {
            return (customer['name'] +" "+ customer['lastname']).toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
        setFilter(customersAct)
    }
    useEffect(()=>{
        Cust()
    }, []);
        return (
            
            <div className="container">
                <h1>Listado de clientes</h1>
                <input type="text" id="filter" onChange={(e)=>{filterCustomer(e)}} placeholder="Buscar por nombre.." title="Type in a name" />
                    <table className="table table-striped" id="customersTable">
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
                                {filteredList.map((customer) => (
                                <tbody key={customer.id}>
                                <CustomerCard customer={customer} />
                                </tbody>
                                        ))}
                    </table>
            </div>
        )
    }
    export default CustomersContainer;