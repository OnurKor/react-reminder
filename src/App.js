// import logo from './logo.svg';
import './style.scss'

const Reactbutton = () => (
  alert('Hoşgeldim')
);
const Reactbuttonstyle = {
  color: "yellow",
  backgroundColor: "darkblue",
  justify: "content",
  


}

function App() {
  return (
    <main id='main' className='test'>
      <h1 tabIndex='3' style={{color: 'blue', backgroundColor:'yellow'}}>Onur Kordoğan</h1>
      <label htmlFor="search" tabIndex='2' onClick={() => alert('Merhaba')}>Arama</label>
      <input type="text" id='search' tabIndex='1'/>
      <button style={Reactbuttonstyle} onClick={Reactbutton}>React</button>
    </main>
  );
}

export default App;
