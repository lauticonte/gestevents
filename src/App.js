import logo from './logo.svg';
import { Amplify, API } from 'aws-amplify';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import NavigationBar from './components/Navbar/Navbar';
import aws_exports from './aws-exports';
import {Routes, Route} from 'react-router-dom';
import CreateCustomer from './components/Customers/CustomersForm';
import CustomersContainer from './components/CustomersContainer/CustomersContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CreateEvent from './components/Events/EventForm';
Amplify.configure(aws_exports);
//Setup router
//Setup components

function App({ signOut, user }) { 
  return (
    <div className="App">
      <header className="App-header">
      <NavigationBar signOut={signOut} user={user}/>
      </header>
      <div style={styles.container}>
        <Heading level={1}>Hello {user.attributes['email']} from {user.attributes['custom:company']}</Heading>
      </div>
        <Routes>
          <Route path="/createCustomer" element={<CreateCustomer company={user.attributes['custom:company']}/>} />
          <Route path="/allCustomers" element={<CustomersContainer company={user.attributes['custom:company']}/>} />
          <Route path="/createEvent" element={<CreateEvent />} />
        </Routes>
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
