import './App.css'
import Voiture from './Voiture'
import voitures from './assets/voitures.js';

function App() {
  
  let voitureTab = voitures.map((voiture) => {
    return {
      id: voiture.id,
      marque: voiture.marque,
      model: voiture.model,
      couleur: voiture.couleur,
      annee: voiture.annee
    };
  });

  return (
    <>
      {voitureTab.map((voiture) => (
        <Voiture key ={voiture.id} prop ={voiture} />
      ))}
    </>
  );
}

export default App