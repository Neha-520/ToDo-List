import React, { useState, useEffect } from 'react';
import './Sorting.css';
import {getMergeSortAnimations} from './sortAlgos.js'

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 300;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'rgb(236, 149, 164)';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'black';

// NOTE: This method will only work if your sorting algorithms actually return
// the sorted arrays; if they return the animations (as they currently do), then
// this method will be broken.

const Sorting = (props) => {

  const [array1, setArray1] = useState([]);
  
  const resetArray = () => {
    const a = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      a.push(RandomInt(5, 600));
    }
    setArray1(a);
  }

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array1);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('arrayBar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  // const testSortingAlgorithms = () => {
  //   for (let i = 0; i < 100; i++) {
  //     const ar = [];
  //     const length = RandomInt(1, 1000);
  //     for (let i = 0; i < length; i++) {
  //       ar.push(RandomInt(-1000, 1000));
  //     }
  //     const javaScriptSortedArray = ar.slice().sort((a, b) => a - b);
  //     const mergeSortedArray = getMergeSortAnimations(ar.slice());
  //     console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
  //   }
  // }
  // function arraysAreEqual(arrayOne, arrayTwo) {
  //   if (arrayOne.length !== arrayTwo.length) return false;
  //   for (let i = 0; i < arrayOne.length; i++) {
  //     if (arrayOne[i] !== arrayTwo[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

 
  useEffect(() => {
    resetArray();
  }, []);

  return (
    <>

      <div className="array-container mt-3">
        <center><h1 >Merge Sort</h1></center>
        
        {
          array1.map((value, index) => (
            <div className="arrayBar"
              key={index}
              style={{ height: `${value}px` }}
            >
            </div>
          ))
        }
        <center>
          <button className="btn btn-lg btn-dark m-3" onClick={resetArray}>Reset Array</button>
          <button className="btn btn-lg btn-dark m-3" onClick={mergeSort}>Merge Sort</button>
       
          
        </center>
      </div>
    </>
  );
}
function RandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Sorting;