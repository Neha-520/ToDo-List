import React,{ useState ,useEffect} from 'react';
import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import List from './List';
import { gsap } from 'gsap';
AOS.init();

const App = () =>{

    const [inputList,setInputList]= useState("");
    const [Items,setItems]=useState([]);
  useEffect(()=>{
   gsap.to(".first",1.5, { // selector text, Array, or object
        top: "-100%",
        delay: 0.5,
        ease: "Expo.easeinOut",
      });
      
      gsap.to(".second", 1.5,{ // selector text, Array, or object
        top: "-100%",
        delay: 0.7,
        ease: "Expo.easeinOut",
      });
      
      gsap.to(".third",1.5, { // selector text, Array, or object
        top: "-100%",
        delay: 0.9,
        ease: "Expo.easeinOut",
      });
  },[])
    const itemEvent=(event)=>
    {
       setInputList(event.target.value);
    };
 
    function todoList() {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");

    }
    const deleteItems= (id) =>{
    setItems((oldItems) =>{
        return oldItems.filter((arrElem,index) =>{
            return index !== id;
        });
    })
        

    };
    let currTime=new Date();
currTime=currTime.getHours();
let  greeting=" ";
const cssstyle={ };
if(currTime<12)
{
 greeting="good morning";
 cssstyle.color='red';
}
else if(currTime>=12 && currTime<=16)
{
    greeting="good afternoon";
    cssstyle.color='yellow';
}
else if(currTime>=17 && currTime<20)
{
    greeting="good evening";
   cssstyle.color='blue';
}
else
{
    greeting="good night";
    cssstyle.color='black';
}
return(<>
<div className="wrapper">
<div className="overlay first"></div>
<div className="overlay second"></div>
<div className="overlay third"></div>


<div className="x" data-aos="fade-right" data-aos-duration="2000">
<h1 className="greet">Hello Mam,
<span style={cssstyle}>{greeting}</span>
</h1>
</div>

<div  className="card  mb-3" data-aos="fade-right" data-aos-duration="3000" style={{margin:90,width:'70em'}}>
  <div className="card-body">
    <br/>
    <h1  > ToDo List</h1>
    <br/>
    
    <input style={{width:'62rem',padding:'10px'}} type="text" placeholder = "Add todos" 
    value={inputList} onChange={itemEvent}/>
    <h1 style={{float:'right',paddingRight:'30px'}}><i class="bi bi-plus-square-fill" onClick={todoList }> </i></h1>

      
      <ol>
         
      
     { Items.map( (todos,index)=>{
          return <List 
          key={index} 
          text={todos} 
          id={index}
            onSelect={deleteItems}  
          />
      })
     } 
      </ol>
  </div>
</div>
</div>
</>);
};
export default App;
