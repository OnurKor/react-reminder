// import logo from './logo.svg';

import Button from "./components/Button"
import Tab from "./components/Tab"
import './tailwind.css'
// import './style.scss'




function App() {

const todos = ["onur", "sadık", 'halil' ]
const name = "Onur"

  const Reactbutton = () => (
    alert('Hoşgeldim')
  );
  const Reactbuttonstyle = {
    color: "yellow",
    backgroundColor: "darkblue",
    display: 'block',
    marginTop: "10px",
    borderRadius: "16px",
    padding: "10px",
    border: "2px solid #ccc", cursor: 'pointer',
  };
  return (
    <>
    <div className="p-5">
    <Tab>
      <Tab.Panel title="Profil">1. Tab</Tab.Panel>
      <Tab.Panel title="Hakkında">2. Tab</Tab.Panel>
      <Tab.Panel title="Ayarlar">3. Tab</Tab.Panel>
    </Tab>
    </div>


    <main id='main' className='test'>
      <h1 tabIndex='3' style={{color: 'blue', backgroundColor:'yellow'}}>Onur Kordoğan</h1>
      <label htmlFor="search" tabIndex='2' onClick={() => alert('Merhaba')}>Arama</label>
      <input type="text" id='search' tabIndex='1'/>
      <button className='hover:bg-slate-400' style={Reactbuttonstyle} onClick={Reactbutton}>React</button>
      <ul>
        {todos.map((todo,index) =>  (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
      4 + 4 
      {name.toUpperCase()} Kordoğan
      <p>{4 + 4}</p>    

      <div className="p-5">
      <Button>
      Buton Örneği
      </Button>
      <Button variant="success">
      Buton Örneği
      </Button>
      <Button variant="danger">
      Buton Örneği
      </Button>
      <Button variant="warning">
      Buton Örneği
      </Button>
      </div>

    </main>
    </>
  );
}

export default App;
