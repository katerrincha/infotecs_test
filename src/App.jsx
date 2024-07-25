
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import Table from './components/Table.jsx'
const API = "https://dummyjson.com/users";

const App = () => {
  const [users, setUsers] = useState([])
  const fetchUsers = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      if(data.users.length > 0) {
        setUsers(data.users);
      }
      console.log(data.users);
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    fetchUsers(API);
  }, [])
  return <>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <Table users = {users} />
      </tbody>
    </table>
  </div>
    
  </>

}
export default App