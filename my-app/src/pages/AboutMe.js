import Header from '../components/Header';
import avatar from './avatar_300x300.jpeg';
import Main from '../components/Main';

function Logo(props){
    const userPic = <img src={avatar}/>;
    return userPic;
  }
  


function AboutMe() {
    const aboutme = "My name is Aang, though many know me as the Avatar. I was born amongst the peaceful Air Nomads, high in their mountain temples. From the first day I could walk, I knew I was different. The element of air danced around me, playful as a breeze, responding to my every whim. I learned to glide on currents, to summon gusts as strong as a bison's bellow, even to spin air into swirling shields."
    return (
        <div>
            <Header name='Aang' />
            <Logo />
            <p>{aboutme}</p>            
            <Main/>
        </div>
    )
}

export default AboutMe;