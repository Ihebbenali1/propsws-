
import './App.css';
import Profile from './Profile/Profile';

function App() {
  const fullName="Iheb Ben Ali"
  const bio="Mern Stack Student at GoMyCode"
  const profession="Executive director"
  const handleHi=(a)=> alert(`Hello ${a}`)
  return (
    <div >
      <Profile fullName={fullName} bio={bio} profession={profession} handlehi={handleHi}>
        <img src='/ppp.jpg' alt='not found'/>
      </Profile>

    </div>
  );
}

export default App;
