import Card from "./Card";
import profilePic1 from './assets/HueyPDP.jpg'
import profilePic2 from './assets/Riley.jpg'
import profilePic3 from './assets/grandad.jpg'
import profilePic4 from './assets/pimp.jpg'

function App() {
  return(
    <>
      <Card img ={profilePic1} name ="Nyle Kersen Joseph" texte = "Étudiant à Marie-Victorin, j'aime faire du sport et du piano."/>
      <Card img = {profilePic2} name = "Riley Freeman" texte= "Just a normal kid who tryna start a revolution."/>
      <Card img = {profilePic3} name = "Grandad" texte= "Normal grandad with 2 normal grandchildren"/>
      <Card img = {profilePic4} name ="Pimp" texte = "I'm just a pimp named Slickback"/>
    </>
  );
}

export default App
