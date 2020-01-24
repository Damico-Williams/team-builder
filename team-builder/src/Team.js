import React from 'react';


const Team = props => {


    
    
    return (
        <div>
         
                    <h2><span>{props.name}</span></h2>
                    <h2><span>{props.email}</span></h2>
                    <h2><span>{props.role}</span></h2>
        </div>
       
    )

}

export default Team;