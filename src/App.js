import { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState("Widad")
  const [lastName, setlastName] = useState("Boukouba")
  const [bio, setBio] = useState("Web developer")
  const [profision, setProfision] = useState("Full stack web developer")
  const [show, setshow] = useState(false)
 
  return (
    <div className="App">
      
      <button onClick={()=>setshow(!show)} className="btn">click here to show profile</button>
    { show? <>
      <h3><h2>Name:</h2>{name}</h3>
      <h3><h2>lastName:</h2>{lastName}</h3>
      <h3>({bio})</h3>
      <h3><h2>Profision:</h2>{profision}</h3>
      <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/310333105_995985398469332_1367087589679741484_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rAdsIaJDouUAX_5-duI&_nc_ht=scontent.ftun1-2.fna&oh=00_AfB01LXc9QYKPXWGWSf5v6kJDH2QCEjUWZL48-cW0BVvVw&oe=6398B233" alt="" className='img'/>
      </>: null }
    </div>
  );
}

export default App;
