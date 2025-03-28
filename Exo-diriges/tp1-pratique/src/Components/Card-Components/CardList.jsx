import './CardList.css'
import Profile from '../../assets/Profile'

export default function CardList(){
    const cards = Profile.cards.map(card => (
        <li className="card">
            <img className="card-image" src={card.img} alt= {card.titre} />
            <div className="card-description">
                <h2>{card.titre}</h2>
                <p>{card.texte}</p>
            </div>
        </li>
    ))

    return(
        <ul className="card-list">
            {cards}
        </ul>
    )
}