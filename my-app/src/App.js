import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import avatar from './avatar_300x300.jpeg'





function Logo(props){
  const userPic = <img src={avatar}/>;
  return userPic;
}

function App() {
  return (
    <div className='App'>
      <Header name='Selen' />
      <Logo />
      <div>
        <Main/>
      </div>
    </div>
  )
}

export default App;
