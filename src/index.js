import ReactDOM from "react-dom/client";
import "./index.css"
import img1 from "./components/img/card1.jpg"; 
import img2 from "./components/img/card4.jpg"; 
import img3 from "./components/img/card2.jpg"; 
import img4 from "./components/img/card3.jpg"; 
import img5 from "./components/img/card5.jpg"; 
import img6 from "./components/img/card6.jpg"; 



import CakeCard, { BdayCard } from "./components/card"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <> <div className="card-container">
    <BdayCard name="Yash" bdayImg={img1} />  
    <CakeCard kidName="Samar" cakeImg={img2} /> 
    <BdayCard name="Mrunal" bdayImg={img3} />  
    <CakeCard kidName="Shreya" cakeImg={img4} />  
    <BdayCard name="Kaustubh" bdayImg={img5} />  
    <CakeCard kidName="Pranay" cakeImg={img6} /> 
    </div>
  </>
);
