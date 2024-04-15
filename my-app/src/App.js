import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Btn from './Btn';
import avatar from './avatar_300x300.jpeg'





function Logo(props){
  const userPic = <img src={avatar}/>;
  return userPic;
}

function App() {
  return (
    <div className='App'>
      <Header name='Aang' />
      <Logo />
      <div>
        <Main/>
      </div>
      <div>
        <Btn/>
      </div>
    </div>
  )
}

export default App;
