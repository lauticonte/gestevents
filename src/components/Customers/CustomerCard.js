//Create a Customer Card displaying his information 
const CustomerCard = ({customer})=>{
    //Display the customer information in a bootstrap card
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{customer.name}</h5>
                    <p>Apellido:{customer.lastname}</p>
                    <p>Correo:{customer.email}</p>
                    <p>{customer.phone}</p>
                    <p>{customer.address}</p>
                    <p>{customer.city}</p>
                    <p>{customer.province}</p>
                    <p>{customer.country}</p>
                    <p>{customer.postalcode}</p>
                    <p>{customer.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard;
