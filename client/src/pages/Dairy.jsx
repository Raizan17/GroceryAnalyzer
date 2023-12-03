import React from 'react';
import '../css/bakery.css'; // Import your CSS file
import Milk from "../img/milk.jpg";
import Eggs from "../img/eggs.jpg";
import Walmart from "../img/walmart.png";
import Freshco from "../img/freshco.png";
import Real from "../img/real.png";
import Safeway from "../img/safeway.png";
import { useState, useEffect } from 'react';
import axios from 'axios';


const Dairy = () => {

  const [milkList, setMilkList] = useState([]);
const [milkPQList, setMilkPQList] = useState([]);
const [milkFPQList, setMilkFPQList] = useState([]);
const [milkEPQList, setMilkEPQList] = useState([]);
const [milkSWPQList, setMilkSWPQList] = useState([]);
const [milkSEPQList, setMilkSEPQList] = useState([]);

const [eggsList, setEggsList] = useState([]);
const [eggsPQList, setEggsPQList] = useState([]);
const [eggsFPQList, setEggsFPQList] = useState([]);
const [eggsEPQList, setEggsEPQ2List] = useState([]);
const [eggsSWPQList, setEggsSWPQ2List] = useState([]);
const [eggsSEPQList, setEggsSEPQ2List] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const resMilkList = await axios.get("/dairys/");
      setMilkList(resMilkList.data);

      const resMilkPQList = await axios.get("/dairys/2");
      setMilkPQList(resMilkPQList.data);

      const resMilkFPQList = await axios.get("/dairys/3");
      setMilkFPQList(resMilkFPQList.data);

      const resMilkEPQList = await axios.get("/dairys/4");
      setMilkEPQList(resMilkEPQList.data);

      const resMilkSWPQList = await axios.get("/dairys/5");
      setMilkSWPQList(resMilkSWPQList.data);

      const resMilkSEPQList = await axios.get("/dairys/6");
      setMilkSEPQList(resMilkSEPQList.data);

      const resEggsList = await axios.get("/dairys/7");
      setEggsList(resEggsList.data);

      const resEggsPQList = await axios.get("/dairys/8");
      setEggsPQList(resEggsPQList.data);

      const resEggsFPQList = await axios.get("/dairys/9");
      setEggsFPQList(resEggsFPQList.data);

      const resEggsEPQ2List = await axios.get("/dairys/10");
      setEggsEPQ2List(resEggsEPQ2List.data);

      const resEggsSWPQ2List = await axios.get("/dairys/11");
      setEggsSWPQ2List(resEggsSWPQ2List.data);

      const resEggsSEPQ2List = await axios.get("/dairys/12");
      setEggsSEPQ2List(resEggsSEPQ2List.data);
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
}, []);


  return (
    <div>

  {/* MILK */}

  <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={Milk} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">
        <p>MILK</p>
        {milkList.map((val) => {
      return <h1> Calorie: {val.Calorie_amount}</h1>
    })}


      </div>

     {/* Columns*/}
     
    <div className="five-column-container">
      {/* Column 1 */}
      <div className="column">
         {/* Row 0 */}
         <div className="row" > 
         <div className="child">
          <p>Downtown</p>
          </div>
        </div>
        {/* Row 1 */}
        <div className="row">
          <div className="column">
            <img src={Walmart} alt="" className="row-image" />
          </div>
          <div className="column">
            <div className='write'>

           <p> Price: {milkPQList.length > 0 && <text>{milkPQList[3].Price}</text>}</p>
           <p>Quantity: {milkPQList.length > 0 && <text>{milkPQList[3].Quantity}</text>}</p>


            
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="column">
            <img src={Freshco} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {milkPQList.length > 0 && <text>{milkPQList[0].Price}</text>}</p>
           <p>Quantity: {milkPQList.length > 0 && <text>{milkPQList[0].Quantity}</text>}</p>
            
            </div>
          </div>
        </div>

         {/* Row 3 */}
         <div className="row">
          <div className="column">
            <img src={Real} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {milkPQList.length > 0 && <text>{milkPQList[1].Price}</text>}</p>
           <p>Quantity: {milkPQList.length > 0 && <text>{milkPQList[1].Quantity}</text>}</p>
            </div>
          </div>
        </div>

         {/* Row 4 */}
         <div className="row">
          <div className="column">
            <img src={Safeway} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {milkPQList.length > 0 && <text>{milkPQList[2].Price}</text>}</p>
           <p>Quantity: {milkPQList.length > 0 && <text>{milkPQList[2].Quantity}</text>}</p>
            </div>
          </div>
        </div>

      </div>

     {/* Column 2 */}
     <div className="column">
         {/* Row 0 */}
         <div className="row centerd" > 
         <div className="child">
          <p>North West</p>
          </div>
        </div>
        {/* Row 1 */}
        <div className="row">
          <div className="column">
            <img src={Walmart} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {milkFPQList.length > 0 && <text>{milkFPQList[1].Price}</text>}</p>
           <p>Quantity: {milkFPQList.length > 0 && <text>{milkFPQList[1].Quantity}</text>}</p>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="column">
            <img src={Freshco} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          N/A
            {/* No item here*/}
            </div>
          </div>
        </div>

         {/* Row 3 */}
         <div className="row">
          <div className="column">
            <img src={Real} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
            {/*no item here*/}
            N/A
            </div>
          </div>
        </div>

         {/* Row 4 */}
         <div className="row">
          <div className="column">
            <img src={Safeway} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
            
            <p> Price: {milkFPQList.length > 0 && <text>{milkFPQList[0].Price}</text>}</p>
           <p>Quantity: {milkFPQList.length > 0 && <text>{milkFPQList[0].Quantity}</text>}</p>
            </div>
          </div>
        </div>

      </div>


     {/* Column 3 */}
     <div className="column">
         {/* Row 0 */}
         <div className="row centerd" > 
         <div className="child">
          <p>North East</p>
          </div>
        </div>
        {/* Row 1 */}
        <div className="row">
          <div className="column">
            <img src={Walmart} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
            N/A    {/* No item here*/}
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="column">
            <img src={Freshco} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {milkEPQList.length > 0 && <text>{milkEPQList[0].Price}</text>}</p>
           <p>Quantity: {milkEPQList.length > 0 && <text>{milkEPQList[0].Quantity}</text>}</p>
            </div>
          </div>
        </div>

         {/* Row 3 */}
         <div className="row">
          <div className="column">
            <img src={Real} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
               {/* No item here*/}
          N/A
            </div>
          </div>
        </div>

         {/* Row 4 */}
         <div className="row">
          <div className="column">
            <img src={Safeway} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {milkEPQList.length > 0 && <text>{milkEPQList[1].Price}</text>}</p>
           <p>Quantity: {milkEPQList.length > 0 && <text>{milkEPQList[1].Quantity}</text>}</p>
            </div>
          </div>
        </div>

      </div>


     {/* Column 4 */}
     <div className="column">
         {/* Row 0 */}
         <div className="row centerd" > 
         <div className="child">
          <p>South West</p>
          </div>
        </div>
        {/* Row 1 */}
        <div className="row">
          <div className="column">
            <img src={Walmart} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
              {/* No item here*/}
            N/A
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="column">
            <img src={Freshco} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {milkSWPQList.length > 0 && <text>{milkSWPQList[0].Price}</text>}</p>
           <p>Quantity: {milkSWPQList.length > 0 && <text>{milkSWPQList[0].Quantity}</text>}</p>
            </div>
          </div>
        </div>

         {/* Row 3 */}
         <div className="row">
          <div className="column">
            <img src={Real} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {milkSWPQList.length > 0 && <text>{milkSWPQList[1].Price}</text>}</p>
           <p>Quantity: {milkSWPQList.length > 0 && <text>{milkSWPQList[1].Quantity}</text>}</p>
            </div>
          </div>
        </div>

         {/* Row 4 */}
         <div className="row">
          <div className="column">
            <img src={Safeway} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
              {/* No item here*/}
            N/A 
            </div>
          </div>
        </div>

      </div>


     {/* Column 5 */}
     <div className="column">
         {/* Row 0 */}
         <div className="row centerd" > 
         <div className="child">
          <p>South East</p>
          </div>
        </div>
        {/* Row 1 */}
        <div className="row">
          <div className="column">
            <img src={Walmart} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {milkSEPQList.length > 0 && <text>{milkSEPQList[0].Price}</text>}</p>
           <p>Quantity: {milkSEPQList.length > 0 && <text>{milkSEPQList[0].Quantity}</text>}</p>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="column">
            <img src={Freshco} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          N/A
            </div>
          </div>
        </div>

         {/* Row 3 */}
         <div className="row">
          <div className="column">
            <img src={Real} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {milkSEPQList.length > 0 && <text>{milkSEPQList[1].Price}</text>}</p>
           <p>Quantity: {milkSEPQList.length > 0 && <text>{milkSEPQList[1].Quantity}</text>}</p>
            </div>
          </div>
        </div>

         {/* Row 4 */}
         <div className="row">
          <div className="column">
            <img src={Safeway} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          N/A
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>

    {/* EGGS*/}
  
  
    <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={Eggs} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">
        <p>EGGS</p>
        {eggsList.map((val) => {
      return <h1> Calorie: {val.Calorie_amount}</h1>
    })}


      </div>

     {/* Columns*/}
     
    <div className="five-column-container">
      {/* Column 1 */}
      <div className="column">
         {/* Row 0 */}
         <div className="row" > 
         <div className="child">
          <p>Downtown</p>
          </div>
        </div>
        {/* Row 1 */}
        <div className="row">
          <div className="column">
            <img src={Walmart} alt="" className="row-image" />
          </div>
          <div className="column">
            <div className='write'>

           <p> Price: {eggsPQList.length > 0 && <text>{eggsPQList[3].Price}</text>}</p>
           <p>Quantity: {eggsPQList.length > 0 && <text>{eggsPQList[3].Quantity}</text>}</p>


            
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="column">
            <img src={Freshco} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {eggsPQList.length > 0 && <text>{eggsPQList[0].Price}</text>}</p>
           <p>Quantity: {eggsPQList.length > 0 && <text>{eggsPQList[0].Quantity}</text>}</p>
            
            </div>
          </div>
        </div>

         {/* Row 3 */}
         <div className="row">
          <div className="column">
            <img src={Real} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {eggsPQList.length > 0 && <text>{eggsPQList[1].Price}</text>}</p>
           <p>Quantity: {eggsPQList.length > 0 && <text>{eggsPQList[1].Quantity}</text>}</p>
            </div>
          </div>
        </div>

         {/* Row 4 */}
         <div className="row">
          <div className="column">
            <img src={Safeway} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {eggsPQList.length > 0 && <text>{eggsPQList[2].Price}</text>}</p>
           <p>Quantity: {eggsPQList.length > 0 && <text>{eggsPQList[2].Quantity}</text>}</p>
            </div>
          </div>
        </div>

      </div>

     {/* Column 2 */}
     <div className="column">
         {/* Row 0 */}
         <div className="row centerd" > 
         <div className="child">
          <p>North West</p>
          </div>
        </div>
        {/* Row 1 */}
        <div className="row">
          <div className="column">
            <img src={Walmart} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {eggsFPQList.length > 0 && <text>{eggsFPQList[1].Price}</text>}</p>
           <p>Quantity: {eggsFPQList.length > 0 && <text>{eggsFPQList[1].Quantity}</text>}</p>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="column">
            <img src={Freshco} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          N/A
            {/* No item here*/}
            </div>
          </div>
        </div>

         {/* Row 3 */}
         <div className="row">
          <div className="column">
            <img src={Real} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
            {/*no item here*/}
            N/A
            </div>
          </div>
        </div>

         {/* Row 4 */}
         <div className="row">
          <div className="column">
            <img src={Safeway} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
            
            <p> Price: {eggsFPQList.length > 0 && <text>{eggsFPQList[0].Price}</text>}</p>
           <p>Quantity: {eggsFPQList.length > 0 && <text>{eggsFPQList[0].Quantity}</text>}</p>
            </div>
          </div>
        </div>

      </div>


     {/* Column 3 */}
     <div className="column">
         {/* Row 0 */}
         <div className="row centerd" > 
         <div className="child">
          <p>North East</p>
          </div>
        </div>
        {/* Row 1 */}
        <div className="row">
          <div className="column">
            <img src={Walmart} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
            N/A    {/* No item here*/}
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="column">
            <img src={Freshco} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {eggsEPQList.length > 0 && <text>{eggsEPQList[0].Price}</text>}</p>
           <p>Quantity: {eggsEPQList.length > 0 && <text>{eggsEPQList[0].Quantity}</text>}</p>
            </div>
          </div>
        </div>

         {/* Row 3 */}
         <div className="row">
          <div className="column">
            <img src={Real} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
               {/* No item here*/}
          N/A
            </div>
          </div>
        </div>

         {/* Row 4 */}
         <div className="row">
          <div className="column">
            <img src={Safeway} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {eggsEPQList.length > 0 && <text>{eggsEPQList[1].Price}</text>}</p>
           <p>Quantity: {eggsEPQList.length > 0 && <text>{eggsEPQList[1].Quantity}</text>}</p>
            </div>
          </div>
        </div>

      </div>


     {/* Column 4 */}
     <div className="column">
         {/* Row 0 */}
         <div className="row centerd" > 
         <div className="child">
          <p>South West</p>
          </div>
        </div>
        {/* Row 1 */}
        <div className="row">
          <div className="column">
            <img src={Walmart} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
              {/* No item here*/}
            N/A
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="column">
            <img src={Freshco} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {eggsSWPQList.length > 0 && <text>{eggsSWPQList[0].Price}</text>}</p>
           <p>Quantity: {eggsSWPQList.length > 0 && <text>{eggsSWPQList[0].Quantity}</text>}</p>
            </div>
          </div>
        </div>

         {/* Row 3 */}
         <div className="row">
          <div className="column">
            <img src={Real} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {eggsSWPQList.length > 0 && <text>{eggsSWPQList[1].Price}</text>}</p>
           <p>Quantity: {eggsSWPQList.length > 0 && <text>{eggsSWPQList[1].Quantity}</text>}</p>
            </div>
          </div>
        </div>

         {/* Row 4 */}
         <div className="row">
          <div className="column">
            <img src={Safeway} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
              {/* No item here*/}
            N/A 
            </div>
          </div>
        </div>

      </div>


     {/* Column 5 */}
     <div className="column">
         {/* Row 0 */}
         <div className="row centerd" > 
         <div className="child">
          <p>South East</p>
          </div>
        </div>
        {/* Row 1 */}
        <div className="row">
          <div className="column">
            <img src={Walmart} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {eggsSEPQList.length > 0 && <text>{eggsSEPQList[0].Price}</text>}</p>
           <p>Quantity: {eggsSEPQList.length > 0 && <text>{eggsSEPQList[0].Quantity}</text>}</p>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="column">
            <img src={Freshco} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          N/A
            </div>
          </div>
        </div>

         {/* Row 3 */}
         <div className="row">
          <div className="column">
            <img src={Real} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          <p> Price: {eggsSEPQList.length > 0 && <text>{eggsSEPQList[1].Price}</text>}</p>
           <p>Quantity: {eggsSEPQList.length > 0 && <text>{eggsSEPQList[1].Quantity}</text>}</p>
            </div>
          </div>
        </div>

         {/* Row 4 */}
         <div className="row">
          <div className="column">
            <img src={Safeway} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write'>
          N/A
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>

  

  </div>
    
    
  );
}

export default Dairy;
