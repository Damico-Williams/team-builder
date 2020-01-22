import React, {useState} from 'react';
import App from './App.js'


 const Form = props => {
    
    const [member, setMember] = useState({ name: '', email: '', role: ''});

    const handleChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
      };

      const handleSubmit = event => {
        event.preventDefault();
        props.addToTeam(member);
        setMember({ name: '', email: '', role: ''});
      };

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
            </label>
            <input 
            type="text"
            value={member.name}
            id="name"
            name="name"
            onChange={handleChange}
            ></input>
             
             <label htmlFor="email">
                 Email:
             </label>
             <input 
             type="text"
             id="email"
             value={member.email}
             name="email"
             onChange={handleChange}
             ></input>
             
             <label htmlFor='roleSelect'>
                 Role:
             </label>
             <select id='roleSelect' name='role'>
                 <option value='1'>Backend Engineer</option>
                 <option value='2'>UX Designer</option>
                 <option value='3'>Data Specialist</option>
                 <option value='4'>Frontend Engineer</option>
             </select>
             <button type="submit">Add Member</button>
        </form>
     <App />
    </div>
  );
}

export default Form;