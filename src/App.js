// import logo from './logo.svg';

import Button from "./components/Button"
import './tailwind.css'
// import './style.scss'




function App() {

const todos = ["onur", "sadık", "halil" ]
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
      <Button text="Buton Örneği"/>
      <Button text="Buton Örneği" variant="success"/>
      <Button text="Buton Örneği" variant="danger"/>
      <Button text="Buton Örneği" variant="warning"/>
      </div>


    </main>
    </>
  );
}

export default App;
