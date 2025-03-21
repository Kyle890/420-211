
function Card({img, name, texte}){
    return(
        <div className="card">
            <img className = "card-image" src={img} alt="Photo de profil" />
            <h2 className='card-title'>{name}</h2>
            <p className='card-text'>{texte}</p>
        </div>
    );
}

export default Card