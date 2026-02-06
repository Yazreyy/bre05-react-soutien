import {useState} from 'react'

function Readmore(){
    const [isVisible, setisVisible] = useState(false);
    
    
   
        
    return(
        <div>
      <button onClick={() => setisVisible(!isVisible)}>
       {isVisible ? 'Réduire' : 'Lire la suite'}</button>
      {isVisible && <span className="content-extra">
          Ne manquez pas la cascade de Sekumpul, souvent oubliée des touristes, qui nécessite une randonnée de 40 minutes mais offre un spectacle naturel époustouflant au lever du soleil.
        </span>}
        </div>
        
        )
}

export default Readmore