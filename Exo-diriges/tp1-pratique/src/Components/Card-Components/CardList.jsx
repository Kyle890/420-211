import './CardList.css'
import Profile from '../../assets/Profile'
import Card from './Card'

export default function CardList(){
    /*const cards = Profile.cards.map(card => (
        <li className="card">
            <img className="card-image" src={card.img} alt= {card.titre} />
            <div className="card-description">
                <h2>{card.titre}</h2>
                <p>{card.texte}</p>
            </div>
        </li>
    ))*/

    const cards = Profile.cards.map((card, index) => (
        <Card key={index} card={card} />
    ));

    return (
        <ul className="card-list">
            {cards}
        </ul>
    );
}