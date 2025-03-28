const demandePrenom = prompt("Veuillez écrire votre prénom");
const demandeNom = prompt("Veuillez écrire votre nom");

const Profile = 
    {
        photoDeProfil: "https://static.vecteezy.com/ti/vecteur-libre/t1/2318271-icone-de-profil-utilisateur-vectoriel.jpg",
        prenom: demandePrenom,
        nom: demandeNom,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️",
        abonnes : 188,
        abonnements: 206,
        cards: [
            {
                key: 1,
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg",
                titre: "Psychopomp",
                texte: "Japanese Breakfast"
            },
            {
                key: 2,
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-500.jpg",
                titre: "let's go",
                texte: "In Love With A Ghost"
            },
            {
                key: 3,
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-500.jpg",
                titre: "The Beautiful Game",
                texte: "Vulfpeck"
            },
            {
                key: 4,
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-500.jpg",
                titre: "Jane Doe",
                texte: "Converge"
            }
        ],
        nbPost: 0
    }


Profile.nbPost = Profile.cards.length;

export default Profile