//Create a Customer Card displaying his information
import React, {useState} from "react";
import { API, graphqlOperation } from "aws-amplify";
import { deleteCustomer } from "../../graphql/mutations";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CustomerEdit from "./CustomerEdit";
import CustomerDelete from "./CustomerDelete";

const CustomerCard = ({customer,onEdit})=>{
    const [open, setOpen] = useState(false);

    return(
        <>
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
        <td> <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Editar</Button></td>
        <td> <button className="btn btn-danger" onClick={()=>{CustomerDelete(customer.id,onEdit)}}>Eliminar</button></td>
        </tr>
        {/* Solo mostrar el tr del collapse si open es true */}
        { open ? <tr>
            <td colSpan="10">
        <Collapse in={open}>
            <div id="example-collapse-text">
                <CustomerEdit customer={customer} onEdit={onEdit}/>
            </div>
          </Collapse>
          </td>
          </tr>: null}
        
        </>


        
    )
}

export default CustomerCard;
