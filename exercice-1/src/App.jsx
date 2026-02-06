import { useState } from 'react'
import Readmore from './Readmore'

import './App.css'

function App() {
  

  return (
    
     
    <div className="exercise-container">
    <img
    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    alt="Plage" 
    style={{width:'100%', borderRadius:'4px', marginBottom:'1rem'}}/>
    <h2>Les trésors cachés de Bali</h2>
    <p>
        Bali, l'île des Dieux, offre bien plus que ses plages célèbres. Entre les rizières en terrasse d'Ubud et les temples sacrés nichés sur les falaises d'Uluwatu, chaque recoin raconte une histoire.
    </p>
    <Readmore/>
    </div>
  );
}

export default App
