// import logo from './logo.svg';
import Test from './Test'
import { Title } from './Components';

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <img src='/logo192.png' alt=''/>
      <Test/>
    </div>
  );
}

export default App;
