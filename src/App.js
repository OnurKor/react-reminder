// import logo from './logo.svg';
import Tailwind from './Tailwind';
import './style.scss'
import './tailwind.css'

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
  transition: 'background-color 0.3s ease',
};


function App() {
  return (
    <>
    <main id='main' className='test'>
      <h1 tabIndex='3' style={{color: 'blue', backgroundColor:'yellow'}}>Onur Kordoğan</h1>
      <label htmlFor="search" tabIndex='2' onClick={() => alert('Merhaba')}>Arama</label>
      <input type="text" id='search' tabIndex='1'/>
      <button className='hover:bg-slate-400' style={Reactbuttonstyle} onClick={Reactbutton}>React</button>
    </main>
    <Tailwind/>
    </>
  );
}

export default App;
