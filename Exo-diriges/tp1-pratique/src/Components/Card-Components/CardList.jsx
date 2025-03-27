import './CardList.css'

export default function CardList(){
    return(
        <ul className="card-list">
                <li className="card">
                    <img className="card-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg" alt="Psychopomp" />
                    <div className="card-description">
                        <h2>Psychopomp</h2>
                        <p>Japanese Breakfast</p>
                    </div>
                </li>
                
                <li className="card">
                        <img className="card-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-500.jpg" alt="let's go" />
                        <div className="card-description">
                            <h2>let's go</h2>
                            <p>In Love With A Ghost</p>
                        </div>
                    </li>
                    
                    <li className="card">
                        <img className="card-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-500.jpg" alt="The Beautiful Game" />
                        <div className="card-description">
                            <h2>The Beautiful Game</h2>
                            <p>Vulfpeck</p>
                        </div>
                    </li>
                    
                    <li className="card">
                        <img className="card-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-500.jpg" alt="Jane Doe" />
                        <div className="card-description">
                            <h2>Jane Doe</h2>
                            <p>Converge</p>
                        </div>
                    </li>
                    
            </ul> 
    )
}