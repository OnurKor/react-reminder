import logo from './logo.svg';
import './style.css'
import Test from './Test'


function App() {
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <img src='/logo192.png' alt=''/>
      {/* <img src={logo} alt=''/> */}
      <Test/>
    </div>
  );
}

export default App;
