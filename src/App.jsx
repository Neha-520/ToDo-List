import React, { useState, useEffect } from 'react';
import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import List from './List';
import { gsap } from 'gsap';
AOS.init();

const App = () => {
  const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    if (list) {
      return JSON.parse(localStorage.getItem('lists'));
    }
    else {
      return [];
    }
  }

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState(getLocalItems());
  const [toggle, setToggle] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  useEffect(() => {
    gsap.to(".first", 1.0, { // selector text, Array, or object
      top: "-100%",
      delay: 0.5,
      ease: "Expo.easeinOut",
    });

    gsap.to(".second", 1.5, { // selector text, Array, or object
      top: "-100%",
      delay: 0.7,
      ease: "Expo.easeinOut",
    });

    gsap.to(".third", 2.0, { // selector text, Array, or object
      top: "-100%",
      delay: 0.9,
      ease: "Expo.easeinOut",
    });
  }, [])
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const todoList = () => {
    if (!inputList) {
      return;
    } else if (inputList && !toggle) {
      setItems(
        Items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputList }
          }
          return elem;
        })
      )
      setToggle(true);
      setInputList(' ');
      setIsEditItem(null);
    }
    else {
      const allInputList = { id: new Date().getTime().toString(), name: inputList }
      setItems([allInputList, ...Items]);
      setInputList("");
    }

  }
  const deleteItems = (index) => {
    const updatedItem = Items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updatedItem);
  }
  const editItem = (id) => {
    let newEditItem = Items.find((elem) => {
      return elem.id === id;
    });
    setToggle(false);
    setInputList(newEditItem.name);
    setIsEditItem(id);

  }

  const removeAll = () => {
    setItems([]);
  }
  // let currTime = new Date();
  // currTime = currTime.getHours();
  // let greeting = " ";
  // const cssstyle = {};
  // if (currTime < 12) {
  //   greeting = "good morning";
  //   cssstyle.color = 'red';
  // }
  // else if (currTime >= 12 && currTime <= 16) {
  //   greeting = "good afternoon";
  //   cssstyle.color = 'yellow';
  // }
  // else if (currTime >= 17 && currTime < 20) {
  //   greeting = "good evening";
  //   cssstyle.color = 'blue';
  // }
  // else {
  //   greeting = "good night";
  //   cssstyle.color = 'black';
  // }
  return (<>
    <div className="wrapper">
      <div className="overlay first"></div>
      <div className="overlay second"></div>
      <div className="overlay third"></div>

      {/* 
<div className="x" data-aos="fade-right" data-aos-duration="2000">
<h1 className="greet">Hello Mam,
<span style={cssstyle}>{greeting}</span>
</h1>
</div>  */}

      <div className="main_div" data-aos="fade-right" data-aos-duration="3500" >
        <div className="center_div">
          <br />
          <h1  > ToDo List</h1>
          <br />

          <input type="text" placeholder="Add todos"
            value={inputList} onChange={itemEvent} />
          {
            toggle ? <i class="fa-lg bi bi-plus-square-fill" style={{ fontSize: '2rem', marginLeft: '15px' }} onClick={todoList}> </i> :
              <i className="bi bi-pencil-square" style={{ fontSize: '2rem', marginLeft: '25px' }} onClick={todoList}></i>
          }



          <ol>

            {Items.map((todos) => {
              return <List
                key={todos.id}
                text={todos.name}
                id={todos.id}
                onSelect={deleteItems}
                editItems={editItem}
              />
            })
            }
          </ol>
          <button onClick={removeAll}><span> CHECK LIST </span></button>
        </div>
      </div>

    </div>
  </>);
};
export default App;
