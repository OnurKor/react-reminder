// import logo from './logo.svg';
import Test from './Test'
import { Title } from './Components';
import './tailwind.css'
import styles from './App.module.css'
import Tailwind from './Tailwind';


function App() {
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <img src='/logo192.png' alt=''/>
      <Test/>
      <Tailwind/>
    </div>
  );
}

export default App;
