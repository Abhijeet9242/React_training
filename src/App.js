import logo from './logo.svg';
import './App.css';
import style from "./components/style.module.css"
import Form1 from './components/Form1';
import Form2 from './components/Form2';

function App() {
  return (
    <div >
      <h1 className={style.head}>BASIC FUNDAMENTAL OF REACT</h1>
      <hr/>
      <br/><br/>
      <br/><br/>
      <Form1/>
      <br/><br/>
      <Form2/>
    </div>
  );
}

export default App;
