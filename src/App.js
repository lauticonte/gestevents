import { Amplify} from 'aws-amplify';
import { withAuthenticator, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import NavigationBar from './components/Navbar/Navbar';
import aws_exports from './aws-exports';
import {Routes, Route} from 'react-router-dom';
import CreateCustomer from './components/Customers/CustomersForm';
import CustomersContainer from './components/CustomersContainer/CustomersContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CreateEvent from './components/Events/EventForm';
import EventsContainer from './components/EventsContainer/EventsContainer';
import UserEdit from './components/Users/UserEdit';
import { listUsers } from "./graphql/queries";
import {useEffect, useState} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import CreateUser from './components/Users/UserForm';
Amplify.configure(aws_exports);
//Setup router
//Setup components

function App({ signOut, user }) { 
  const [userFind,setUserFind] = useState(null);
  const [loading,setLoading] = useState(true);
  const [userCreation,setUserCreation] = useState(false);
  const findUser = async (id) => {
        setLoading(true)
        let usersData = await API.graphql(graphqlOperation(listUsers,
            {
                filter: {
                    cognitoID: { eq: id }
                }
                
            }
            )
            );
    if (usersData.data.listUsers.items.length === 0) {
      setUserFind(null)
    } else {
      setUserFind(usersData.data.listUsers.items)
    }
    setLoading(false)
  }
  useEffect(() => {
  findUser((user.attributes['sub']))
  console.log("hola")
  }, [userCreation])
  return (
    <div className="App">
      {loading ? <div>Loading...</div> : <>
      { userFind === null ?  <CreateUser id={user.attributes['sub']} act={setUserCreation}/> : <div>
      <header className="App-header">
      <NavigationBar signOut={signOut} user={user}/>
      </header>
      <div style={styles.container}>
        <Heading level={3}>{userFind[0].name} {userFind[0].lastname} de {userFind[0].company}</Heading>
      </div>
        <Routes>
          <Route path="/createCustomer" element={<CreateCustomer company={userFind[0].company}/>} />
          <Route path="/allCustomers" element={<CustomersContainer company={userFind[0].company}/>} />
          <Route path="/createEvent" element={<CreateEvent company={userFind[0].company}/>} />
          <Route path="/allEvents" element={<EventsContainer company={userFind[0].company}/>} />
          <Route path="/userEdit" element={<UserEdit id={user.attributes['sub']} toEdit={userCreation} onEdit={setUserCreation}/>} />
          <Route path="/" element={<EventsContainer company={userFind[0].company}/>} />
        </Routes>
      </div>
      
        }
        </>}
    </div>
  );
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App);
