import React from 'react';
import '../css/bakery.css'; // Import your CSS file
import Onions from "../img/onions.jpg";
import Carrots from "../img/carrots.jpg";
import Walmart from "../img/walmart.png";
import Freshco from "../img/freshco.png";
import Real from "../img/real.png";
import Safeway from "../img/safeway.png";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Vegetables = () => {


  const [carrotsList, setCarrotsList] = useState([]);
const [carrotsPQList, setCarrotsPQList] = useState([]);
const [carrotsFPQList, setCarrotsFPQList] = useState([]);
const [carrotsEPQList, setCarrotsEPQList] = useState([]);
const [carrotsSWPQList, setCarrotsSWPQList] = useState([]);
const [carrotsSEPQList, setCarrotsSEPQList] = useState([]);


const [onionList, setonionList] = useState([]);
const [onionPQList, setonionPQList] = useState([]);
const [onionFPQList, setonionFPQList] = useState([]);
const [onionEPQList, setonionEPQList] = useState([]);
const [onionSWPQList, setonionSWPQList] = useState([]);
const [onionSEPQList, setonionSEPQList] = useState([]);



useEffect(() => {
  const fetchData = async () => {
    try {


      const resCarrotsList = await axios.get("/vegetables/7");
      setCarrotsList(resCarrotsList.data);

      const resCarrotsPQList = await axios.get("/vegetables/8");
      setCarrotsPQList(resCarrotsPQList.data);

      const resCarrotsFPQList = await axios.get("/vegetables/9");
      setCarrotsFPQList(resCarrotsFPQList.data);

      const resCarrotsEPQList = await axios.get("/vegetables/10");
      setCarrotsEPQList(resCarrotsEPQList.data);

      const resCarrotsSWPQList = await axios.get("/vegetables/11");
      setCarrotsSWPQList(resCarrotsSWPQList.data);

      const resCarrotsSEPQList = await axios.get("/vegetables/12");
      setCarrotsSEPQList(resCarrotsSEPQList.data);

      

      
      const resonionList = await axios.get("/vegetables");
      setonionList(resonionList.data);

      const resonionPQList = await axios.get("/vegetables/2");
      setonionPQList(resonionPQList.data);

      const resonionFPQList = await axios.get("/vegetables/3");
      setonionFPQList(resonionFPQList.data);

      const resonionEPQList = await axios.get("/vegetables/4");
      setonionEPQList(resonionEPQList.data);

      const resonionSWPQList = await axios.get("/vegetables/5");
      setonionSWPQList(resonionSWPQList.data);

      const resonionSEPQList = await axios.get("/vegetables/6");
      setonionSEPQList(resonionSEPQList.data);


 





    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
}, []);



  return (
    <div>

      {/* ONIONS */}

    <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={Onions} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">

        <p>ONIONS</p>
       
        {onionList.map((val) => {
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

           <p> Price: {onionPQList.length > 0 && <text>{onionPQList[3].Price}</text>}</p>
           <p>Quantity: {onionPQList.length > 0 && <text>{onionPQList[3].Quantity}</text>}</p>


            
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
          <p> Price: {onionPQList.length > 0 && <text>{onionPQList[0].Price}</text>}</p>
           <p>Quantity: {onionPQList.length > 0 && <text>{onionPQList[0].Quantity}</text>}</p>
            
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
          <p> Price: {onionPQList.length > 0 && <text>{onionPQList[1].Price}</text>}</p>
           <p>Quantity: {onionPQList.length > 0 && <text>{onionPQList[1].Quantity}</text>}</p>
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
          <p> Price: {onionPQList.length > 0 && <text>{onionPQList[2].Price}</text>}</p>
           <p>Quantity: {onionPQList.length > 0 && <text>{onionPQList[2].Quantity}</text>}</p>
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
          <p> Price: {onionFPQList.length > 0 && <text>{onionFPQList[1].Price}</text>}</p>
           <p>Quantity: {onionFPQList.length > 0 && <text>{onionFPQList[1].Quantity}</text>}</p>
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
            
            <p> Price: {onionFPQList.length > 0 && <text>{onionFPQList[0].Price}</text>}</p>
           <p>Quantity: {onionFPQList.length > 0 && <text>{onionFPQList[0].Quantity}</text>}</p>
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
          <p> Price: {onionEPQList.length > 0 && <text>{onionEPQList[0].Price}</text>}</p>
           <p>Quantity: {onionEPQList.length > 0 && <text>{onionEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {onionEPQList.length > 0 && <text>{onionEPQList[1].Price}</text>}</p>
           <p>Quantity: {onionEPQList.length > 0 && <text>{onionEPQList[1].Quantity}</text>}</p>
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
          <p> Price: {onionSWPQList.length > 0 && <text>{onionSWPQList[0].Price}</text>}</p>
           <p>Quantity: {onionSWPQList.length > 0 && <text>{onionSWPQList[0].Quantity}</text>}</p>
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
          <p> Price: {onionSWPQList.length > 0 && <text>{onionSWPQList[1].Price}</text>}</p>
           <p>Quantity: {onionSWPQList.length > 0 && <text>{onionSWPQList[1].Quantity}</text>}</p>
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
          <p> Price: {onionSEPQList.length > 0 && <text>{onionSEPQList[0].Price}</text>}</p>
           <p>Quantity: {onionSEPQList.length > 0 && <text>{onionSEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {onionSEPQList.length > 0 && <text>{onionSEPQList[1].Price}</text>}</p>
           <p>Quantity: {onionSEPQList.length > 0 && <text>{onionSEPQList[1].Quantity}</text>}</p>
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

    {/* CARROT*/}
  
  
    <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={Carrots} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">
        <p>CARROTS</p>
        {carrotsList.map((val) => {
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

           <p> Price: {carrotsPQList.length > 0 && <text>{carrotsPQList[3].Price}</text>}</p>
           <p>Quantity: {carrotsPQList.length > 0 && <text>{carrotsPQList[3].Quantity}</text>}</p>


            
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
          <p> Price: {carrotsPQList.length > 0 && <text>{carrotsPQList[0].Price}</text>}</p>
           <p>Quantity: {carrotsPQList.length > 0 && <text>{carrotsPQList[0].Quantity}</text>}</p>
            
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
          <p> Price: {carrotsPQList.length > 0 && <text>{carrotsPQList[1].Price}</text>}</p>
           <p>Quantity: {carrotsPQList.length > 0 && <text>{carrotsPQList[1].Quantity}</text>}</p>
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
          <p> Price: {carrotsPQList.length > 0 && <text>{carrotsPQList[2].Price}</text>}</p>
           <p>Quantity: {carrotsPQList.length > 0 && <text>{carrotsPQList[2].Quantity}</text>}</p>
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
          <p> Price: {carrotsFPQList.length > 0 && <text>{carrotsFPQList[1].Price}</text>}</p>
           <p>Quantity: {carrotsFPQList.length > 0 && <text>{carrotsFPQList[1].Quantity}</text>}</p>
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
            
            <p> Price: {carrotsFPQList.length > 0 && <text>{carrotsFPQList[0].Price}</text>}</p>
           <p>Quantity: {carrotsFPQList.length > 0 && <text>{carrotsFPQList[0].Quantity}</text>}</p>
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
          <p> Price: {carrotsEPQList.length > 0 && <text>{carrotsEPQList[0].Price}</text>}</p>
           <p>Quantity: {carrotsEPQList.length > 0 && <text>{carrotsEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {carrotsEPQList.length > 0 && <text>{carrotsEPQList[1].Price}</text>}</p>
           <p>Quantity: {carrotsEPQList.length > 0 && <text>{carrotsEPQList[1].Quantity}</text>}</p>
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
          <p> Price: {carrotsSWPQList.length > 0 && <text>{carrotsSWPQList[0].Price}</text>}</p>
           <p>Quantity: {carrotsSWPQList.length > 0 && <text>{carrotsSWPQList[0].Quantity}</text>}</p>
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
          <p> Price: {carrotsSWPQList.length > 0 && <text>{carrotsSWPQList[1].Price}</text>}</p>
           <p>Quantity: {carrotsSWPQList.length > 0 && <text>{carrotsSWPQList[1].Quantity}</text>}</p>
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
          <p> Price: {carrotsSEPQList.length > 0 && <text>{carrotsSEPQList[0].Price}</text>}</p>
           <p>Quantity: {carrotsSEPQList.length > 0 && <text>{carrotsSEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {carrotsSEPQList.length > 0 && <text>{carrotsSEPQList[1].Price}</text>}</p>
           <p>Quantity: {carrotsSEPQList.length > 0 && <text>{carrotsSEPQList[1].Quantity}</text>}</p>
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

export default Vegetables;
