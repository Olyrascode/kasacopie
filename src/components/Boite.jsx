import { useState } from 'react';

const Dropdown = () => {
    const [fiabiliteOpen, setFiabiliteOpen] = useState(false);
    const [respectOpen, setRespectOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [securiteOpen, setSecuriteOpen] = useState(false);
  
    const toggleFiabilite = () => {
      setFiabiliteOpen(!fiabiliteOpen);
    };
  
    const toggleRespect = () => {
      setRespectOpen(!respectOpen);
    };
  
    const toggleService = () => {
      setServiceOpen(!serviceOpen);
    };
  
    const toggleSecurite = () => {
      setSecuriteOpen(!securiteOpen);
    };
  
    return (
      <div className='item'>
        <div className='item_box'>
            <div className='item_content'>
            <h1>Fiabilité</h1>
          <button onClick={toggleFiabilite}></button>
          </div>
          {fiabiliteOpen && (
              <div className='item_text'>
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les informations
                sont régulièrement vérifiées par nos équipes.
              </p>
              {/* Ajoutez ici le contenu spécifique à la Fiabilité */}
              </div>
          )}
        </div>
  
        <div className='item_box'>
            <div className='item_content'>
                <h1>Respect</h1>
          <button onClick={toggleRespect}></button>
            </div>
          {respectOpen && (
            <div className='item_text'>
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du voisinage
                entraînera une exclusion de notre plateforme.
              </p>
              {/* Ajoutez ici le contenu spécifique au Respect */}
            </div>
          )}
        </div>
  
        <div className='item_box'>
            <div className='item_content'>
                <h1>Service</h1>
          <button onClick={toggleService}></button>
            </div>
          {serviceOpen && (
            <div className='item_text'>
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du voisinage
                entraînera une exclusion de notre plateforme.</p>
              {/* Ajoutez ici le contenu spécifique au Service */}
            </div>
          )}
        </div>
  
        <div className='item_box'>
            <div className='item_content'>
                <h1>Sécurité</h1>
          <button onClick={toggleSecurite}></button>
            </div>
          {securiteOpen && (
            <div className='item_text'>
              <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes 
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi bien à 
                l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards
                sont bien respectés. Nous organisons également des ateliers sur la sécurité
                domestique pour nos hôtes.
              </p>
              {/* Ajoutez ici le contenu spécifique à la Sécurité */}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Dropdown;