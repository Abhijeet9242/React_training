import logo from './logo.svg';
import './App.css';
import style from "./components/style.module.css"
import Form1 from './components/Form1';

function App() {
  return (
    <div >
      <h1 className={style.head}>BASIC FUNDAMENTAL OF REACT</h1>
      <hr/>
      <br/><br/>
      <Form1/>
    </div>
  );
}

export default App;
