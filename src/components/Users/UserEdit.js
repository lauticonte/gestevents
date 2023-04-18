import { Form, Button, Row } from 'react-bootstrap';
import {useEffect, useState} from 'react';
import { updateUser } from '../../graphql/mutations';
import { listUsers } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
const updUser = async (userToUpd,onEdit,state) => {
    try{await API.graphql(
        graphqlOperation(updateUser, { input: userToUpd })
    );
        console.log("Se modifico al usuario")
        onEdit(!state)
    }catch(error){
    console.log("Error al modificar al usuario",error)
    }

}
const UserEdit = ({id,toEdit,onEdit}) =>{
    const [user, setnewUser] = useState({})
    const [userToUpd, setuserToUpd] = useState({})
    const [update,setUpdate] = useState(toEdit)
    const findUser = async (id) => {
        let usersData = await API.graphql(graphqlOperation(listUsers,
            {
                filter: {
                    cognitoID: { eq: id }
                }
                
            }
            )
            );
    setnewUser(usersData.data.listUsers.items[0])
    setuserToUpd({...userToUpd, ['id']:usersData.data.listUsers.items[0].id})
    }
    useEffect(() => {
        findUser(id)
    }, [])
    
    const onChange = (e) => {
        setuserToUpd({...userToUpd, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        updUser(userToUpd,onEdit,update);

    }

    return(
        <div className="container">
    <Form onSubmit={(e)=>{onSubmit(e)}}>
                    <Row className='mb-3'>
                    <Form.Group controlId="formInlineName" className="col col-sm-3">
                        <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                defaultValue={user.name}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlinelastname" className="col col-sm-3">
                        <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Apellido"
                                name="lastname"
                                defaultValue={user.lastname}
                                onChange={(e)=>{onChange(e)}}
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineCompany" className="col col-sm-3">
                        <Form.Label>Organización</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre de la organización"
                                name="company"
                                defaultValue={user.company}
                                disabled
                                
                            />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formInlineCompanyCuit" className="col col-sm-3">
                        <Form.Label>CUIT</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Cuit de la organización"
                                name="companycuit"
                                defaultValue={user.companycuit}
                                disabled
                            />
                    </Form.Group>
                    </Row>
                    <Form.Group>
                            <Button type="submit">Editar</Button>
                    </Form.Group>
                </Form>
                </div>
                )
}
export default UserEdit;