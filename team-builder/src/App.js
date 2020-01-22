import React, {useState} from 'react';
import './App.css';
import Form from'./Form.js';
import Team from './Team.js';


function App() {

  const [teammates, setTeamMates] = useState([{name:'damico', role:'Frontend Engineer', email:'damico@email.com'}]);

  const addToTeam = members => {
    const newMember = {
      id: teammates.length,
      name: members.name,
      role: members.role,
      email: members.email
    };
    setTeamMates([...teammates, newMember]);
  };

 
  
  return (
    <div className="App">
      <h1>TeamMembers List</h1>
  <Team teammates={teammates} />
  <Form addToTeam={addToTeam}/>
    </div>
  );
}

export default App;
