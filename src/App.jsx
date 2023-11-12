import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUssers]  = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUssers(data))
  },[])

  const handleAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email};
    console.log(user);
    fetch('http://localhost:5000/users',{
      method : 'POST',
      headers : {
      'content-type':'application/json' 
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {console.log('inside post response',data)})
  }

  return (
    <>
     
      <h1>User Mnagement information</h1>
      <p>users : {users.length}</p>

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' /> <br/>
        <input type="email" name="email" id="" /> <br/>
        <input type="submit" name="" id="" />
      </form>

      {
        users.map(user => <p key={user.id}> {user.id}  {user.name}  {user.gmail}</p>)
      }
      
    </>
  )
}

export default App
