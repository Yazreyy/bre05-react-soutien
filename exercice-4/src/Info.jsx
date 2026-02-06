import {useState} from 'react'

const Info = (props) => {
    const [searchTerm, setsearchTerm] = useState("")
    
     const users = [
    { id: 1, name: "Alice Martin", role: "Lead Développeuse" },
    { id: 2, name: "Bob Durand", role: "UX Designer" },
    { id: 3, name: "Charlie Leroy", role: "Product Manager" },
    { id: 4, name: "Diane Petit", role: "Développeuse Front-end" }
];

const filteredUser = users.filter((user) => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()
    ))


    return(
        <div className="exercise-container">
    <h3>Annuaire de l'équipe</h3>
    <input value={searchTerm} onChange={(e) =>setsearchTerm(e.target.value)}/>
    <ul style={{listStyle: 'none', padding: '0'}}>
       {filteredUser.map((user) => (
           <li key={user.id} style={{padding: '10px', borderBottom: '1px solid #eee'}}>
      <strong>{user.name}</strong> - <small>{user.role}</small>
      </li>
      ))}
    </ul>
</div>
        
        )
}

export default Info