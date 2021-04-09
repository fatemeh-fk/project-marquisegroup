
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUS from "./components/AboutUS";
function App() {
  return (
<>
  <Particles
  className="particles-canvas"
    params={{
     particles:{
        number:{

          value:20,
          density:{
            enabel:true,
            value_area:900
          }
        },
         shape:{

          type:"star",
          stroke:{
            width:1,
             color:"#fefaf4"
          }
         }


      }


    }}
  
  />
  <Navbar />
  <Header />
  <AboutUS />
</>
  );
}

export default App;
