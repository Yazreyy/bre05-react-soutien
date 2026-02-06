import {useState} from 'react'

function Tabs(){
    const [currentTabs, setcurrentTabs] = useState('description');
    
    return(
        <div className="exercise-container">
    <div className="flex-row">
        <button className={currentTabs === 'description' ? 'active-tab' : ''} onClick={() => setcurrentTabs('description')}>Description</button>
        <button className={currentTabs === 'specs' ? 'active-tab' : ''} onClick={() => setcurrentTabs('specs')}>Spécifications</button>
        <button className={currentTabs === 'avis' ? 'active-tab' : ''} onClick={() => setcurrentTabs('avis')}>Avis (12)</button>
    </div>
    {currentTabs === 'description' && (
    <div className="tab-content">
        <p>Le nouveau Casque <strong>NovaSound X1</strong> redéfinit l'excellence audio. Équipé de haut-parleurs en néodyme de 40 mm, il offre une clarté exceptionnelle des aigus et des basses profondes.</p>
        <p>Sa technologie de réduction de bruit active (ANC) analyse le bruit ambiant 1000 fois par seconde pour vous isoler parfaitement, que vous soyez dans le métro ou dans un bureau open-space.</p>
    </div>
    )}
    
    {currentTabs === 'specs' && (
    <div className="tab-content">
        <ul style={{listStyle: 'none', padding: '0'}}>
            <li style={{marginBottom: '8px'}}><strong>Autonomie :</strong> 40h (ANC activé) / 55h (Standard)</li>
            <li style={{marginBottom: '8px'}}><strong>Poids :</strong> 250g (Design ultra-léger)</li>
            <li style={{marginBottom: '8px'}}><strong>Connectivité :</strong> Bluetooth 5.2 et Jack 3.5mm</li>
            <li style={{marginBottom: '8px'}}><strong>Charge :</strong> USB-C (10 min = 5h d'écoute)</li>
        </ul>
    </div>
    )}
    
    {currentTabs === 'avis' && (
    <div className="tab-content">
        <div style={{borderLeft: '3px solid var(--primary)' ,  paddingLeft: '15px',  marginBottom: '15px'}}>
            <p style={{margin: '0', fontWeight: 'bold'}}>⭐⭐⭐⭐⭐ - Sophie L.</p>
            <p style={{margin: '5px 0', fontStyle: 'italic'}}>"Le confort est incroyable, même après 4h de visio. Le son est très équilibré."</p>
        </div>
        <div style={{borderLeft: '3px solid var(--primary)', paddingLeft: '15px'}}>
            <p style={{margin: '0', fontWeight: 'bold'}}>⭐⭐⭐⭐ - Marc K.</p>
            <p style={{margin: '5px 0', fontStyle: 'italic'}}>"Excellente réduction de bruit. Un peu cher, mais la qualité est là."</p>
        </div>
    </div>
    )}
</div>
        
        
        )
}
export default Tabs