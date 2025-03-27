import './MainSection.css'
import ProfileSection from './ProfileSection'
import CardList from './Card-Components/CardList'

export default function MainSection(){
    return(
        <main>
            <ProfileSection/>
            <CardList />
        </main>
    )
}