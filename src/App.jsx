
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import Table from './components/Table.jsx'
//import Sort from './components/Sort.jsx'
const API = "https://dummyjson.com/users";

const App = () => {
  const [users, setUsers] = useState([])
  const [sort, setSort] = useState([])
  const fetchUsers = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      if(data.users.length > 0) {
        setUsers(data.users);
      }
      console.log(data.users);
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    fetchUsers(API);
  }, [])
  return <>
    <Table users = {users} />    
  </>

}
export default App