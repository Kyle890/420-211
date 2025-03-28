import Profile from '../assets/Profile.js'
import './ProfileSection.css'

export default function ProfileSection(){
    return(
        <div>
            <div className="profile">
                <div className="profile-name-image">
                    <img src={Profile.photoDeProfil} alt=""/>
                    <h1 className="profile-user-name">{Profile.prenom} {Profile.nom}</h1>
                </div>
                <div className="profile-bio">
                    <p>{Profile.description}</p>
                </div>
                <div className="profile-stats">
                    <ul>
                        <li>{Profile.nbPost} posts</li>
                        <li>{Profile.abonnes} followers</li>
                        <li>{Profile.abonnements} following</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}