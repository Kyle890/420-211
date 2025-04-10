import {useState} from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = useState(["a", "b"])

    function determineMessage(){
        if(unreadMessages.length === 0){
            return "Vous n'avez aucun message a lire."
        } else if (unreadMessages.length === 1){
            return "Vous avez  {unreadMessages.length} message non lus!"
        } else {
            return "Vous avez plusieurs message non lus!"
        }
    }

    return(
        <div>
            <h1>{determineMessage()}</h1>
        </div>
    )
    
    /*return (
        <div>
            {unreadMessages.length === 0 && <h1>Vous n'avez aucun message a lire.</h1>}
            {unreadMessages.length === 1 && <h1>Vous avez  {unreadMessages.length} message non lus!</h1>}
            {unreadMessages.length > 1 && <h1>Vous avez plusieurs message non lus!</h1>}
        </div>
    )*/
}
