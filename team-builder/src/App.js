import React, {useState} from 'react';
import './App.css';
import Form from'./Form.js';
import Team from './Team.js';
import TeamList from './TeamList.js'


function App() {

  const [teammates, setTeamMates] = useState(TeamList);

  const addToTeam = members => {
    const newMember = setTeamMates([...teammates, members]);
  };

 
  
  return (
    <div className="App">
      <h1>TeamMembers List</h1>
      {teammates.map((person, id) => ( <Team name={person.name} email={person.email} role={person.role} key={id}/>))}
  <Form addToTeam={addToTeam}/>
    </div>
  );
}

export default App;
