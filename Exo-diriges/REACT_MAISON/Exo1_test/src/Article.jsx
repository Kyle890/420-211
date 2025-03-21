
function Article(props){
    return(
        <article>
            <div className="list-item">
                <img src={props.img} alt="Créativité" />
                <div>
                    <h3>{props.titre}</h3>
                    <p>{props.para}</p>
                </div>
            </div>
        </article>
    );
}

export default Article