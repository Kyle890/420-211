

export default function Card(props) {
    return(
        <li className="card" key={props.card.key}>
            <img className="card-image" src={props.card.img} alt= {props.card.titre} />
            <div className="card-description">
                <h2>{props.card.titre}</h2>
                <p>{props.card.texte}</p>
            </div>
        </li>
    )
}