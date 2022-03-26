import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "./App.css";
import Question from "./component/Question answer/Question";
import Watches from "./component/Watches/Watches";

function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div>
      <h1>Watch shop</h1>
      <Watches></Watches>
      <Question></Question>
    </div>
  );
}

export default App;
