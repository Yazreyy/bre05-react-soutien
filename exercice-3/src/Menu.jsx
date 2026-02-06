import {useState} from 'react'

function Menu(){
    const [isChoice, setisChoice] = useState('none')
    
    return(
        <div className="exercise-container">
    <h3>Inscription au Meetup React</h3>
    <label>Régime alimentaire :</label>
    <select value={isChoice} onChange={(e) => setisChoice(e.target.value)}>
        <option value="none">Sans restriction</option>
        <option value="vege">Végétarien</option>
        <option value="vegan">Végétalien</option>
        <option value="autre">Autre (Allergies...)</option>
    </select>
    { isChoice === "autre" && (
    <div className="conditional-field">
        <label>Merci de préciser vos allergies :</label>
        <textarea placeholder="Ex: Arachides, Gluten..."></textarea>
    </div>
    )}
    <button style={{marginTop:'1rem', width:'100%'}}>Confirmer l'inscription</button>
</div>

        
        )
}

export default Menu