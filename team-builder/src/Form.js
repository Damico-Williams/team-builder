import React, {useState} from 'react';



 const Form = props => {
    
    const [member, setMember] = useState({ name: "", email: "", role: ""});

    const handleChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
      };

      const handleSubmit = event => {
        event.preventDefault();
         const newMember = {
           ...member,
           id: Date.now()
         };
        props.addToTeam(newMember);
        setMember({ name: "", email: "", role: ""});
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
             <select id='role' name='role' onChange={handleChange}>
                 <option value='Backend Engineer'>Backend Engineer</option>
                 <option value='UX Designer'>UX Designer</option>
                 <option value='Data Specialist'>Data Specialist</option>
                 <option value='Frontend Engineer'>Frontend Engineer</option>
             </select>
             <button type="submit">Add Member</button>
        </form>
    </div>
  );
}

export default Form;