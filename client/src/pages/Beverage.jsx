import React from 'react';
import '../css/bakery.css'; // Import your CSS file
import Fanta from "../img/fanta.jpg";
import Sprite from "../img/sprite.png";
import Walmart from "../img/walmart.png";
import Freshco from "../img/freshco.png";
import Real from "../img/real.png";
import Safeway from "../img/safeway.png";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Beverage = () => {

  const [spriteList, setSpriteList] = useState([]);
const [spritePQList, setSpritePQList] = useState([]);
const [spriteFPQList, setSpriteFPQList] = useState([]);
const [spriteEPQList, setSpriteEPQList] = useState([]);
const [spriteSWPQList, setSpriteSWPQList] = useState([]);
const [spriteSEPQList, setSpriteSEPQList] = useState([]);

const [fantaList, setFantaList] = useState([]);
const [fantaPQList, setFantaPQList] = useState([]);
const [fantaFPQList, setFantaFPQList] = useState([]);
const [fantaEPQList, setFantaEPQ2List] = useState([]);
const [fantaSWPQList, setFantaSWPQ2List] = useState([]);
const [fantaSEPQList, setFantaSEPQ2List] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const resSpriteList = await axios.get("/beverages/");
      setSpriteList(resSpriteList.data);

      const resSpritePQList = await axios.get("/beverages/2");
      setSpritePQList(resSpritePQList.data);

      const resSpriteFPQList = await axios.get("/beverages/3");
      setSpriteFPQList(resSpriteFPQList.data);

      const resSpriteEPQList = await axios.get("/beverages/4");
      setSpriteEPQList(resSpriteEPQList.data);

      const resSpriteSWPQList = await axios.get("/beverages/5");
      setSpriteSWPQList(resSpriteSWPQList.data);

      const resSpriteSEPQList = await axios.get("/beverages/6");
      setSpriteSEPQList(resSpriteSEPQList.data);

      const resFantaList = await axios.get("/beverages/7");
      setFantaList(resFantaList.data);

      const resFantaPQList = await axios.get("/beverages/8");
      setFantaPQList(resFantaPQList.data);

      const resFantaFPQList = await axios.get("/beverages/9");
      setFantaFPQList(resFantaFPQList.data);

      const resFantaEPQ2List = await axios.get("/beverages/10");
      setFantaEPQ2List(resFantaEPQ2List.data);

      const resFantaSWPQ2List = await axios.get("/beverages/11");
      setFantaSWPQ2List(resFantaSWPQ2List.data);

      const resFantaSEPQ2List = await axios.get("/beverages/12");
      setFantaSEPQ2List(resFantaSEPQ2List.data);
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
}, []);



  return (
    <div>
  {/* SPRITE */}

  <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={Sprite} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">
        <p>SPRITE</p>
        {spriteList.map((val) => {
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

           <p> Price: {spritePQList.length > 0 && <text>{spritePQList[3].Price}</text>}</p>
           <p>Quantity: {spritePQList.length > 0 && <text>{spritePQList[3].Quantity}</text>}</p>


            
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
          <p> Price: {spritePQList.length > 0 && <text>{spritePQList[0].Price}</text>}</p>
           <p>Quantity: {spritePQList.length > 0 && <text>{spritePQList[0].Quantity}</text>}</p>
            
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
          <p> Price: {spritePQList.length > 0 && <text>{spritePQList[1].Price}</text>}</p>
           <p>Quantity: {spritePQList.length > 0 && <text>{spritePQList[1].Quantity}</text>}</p>
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
          <p> Price: {spritePQList.length > 0 && <text>{spritePQList[2].Price}</text>}</p>
           <p>Quantity: {spritePQList.length > 0 && <text>{spritePQList[2].Quantity}</text>}</p>
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
          <p> Price: {spriteFPQList.length > 0 && <text>{spriteFPQList[1].Price}</text>}</p>
           <p>Quantity: {spriteFPQList.length > 0 && <text>{spriteFPQList[1].Quantity}</text>}</p>
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
            
            <p> Price: {spriteFPQList.length > 0 && <text>{spriteFPQList[0].Price}</text>}</p>
           <p>Quantity: {spriteFPQList.length > 0 && <text>{spriteFPQList[0].Quantity}</text>}</p>
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
          <p> Price: {spriteEPQList.length > 0 && <text>{spriteEPQList[0].Price}</text>}</p>
           <p>Quantity: {spriteEPQList.length > 0 && <text>{spriteEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {spriteEPQList.length > 0 && <text>{spriteEPQList[1].Price}</text>}</p>
           <p>Quantity: {spriteEPQList.length > 0 && <text>{spriteEPQList[1].Quantity}</text>}</p>
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
          <p> Price: {spriteSWPQList.length > 0 && <text>{spriteSWPQList[0].Price}</text>}</p>
           <p>Quantity: {spriteSWPQList.length > 0 && <text>{spriteSWPQList[0].Quantity}</text>}</p>
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
          <p> Price: {spriteSWPQList.length > 0 && <text>{spriteSWPQList[1].Price}</text>}</p>
           <p>Quantity: {spriteSWPQList.length > 0 && <text>{spriteSWPQList[1].Quantity}</text>}</p>
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
          <p> Price: {spriteSEPQList.length > 0 && <text>{spriteSEPQList[0].Price}</text>}</p>
           <p>Quantity: {spriteSEPQList.length > 0 && <text>{spriteSEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {spriteSEPQList.length > 0 && <text>{spriteSEPQList[1].Price}</text>}</p>
           <p>Quantity: {spriteSEPQList.length > 0 && <text>{spriteSEPQList[1].Quantity}</text>}</p>
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

    {/* FANTA */}
  
  
    <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={Fanta} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">
        <p>FANTA</p>
        {fantaList.map((val) => {
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

           <p> Price: {fantaPQList.length > 0 && <text>{fantaPQList[3].Price}</text>}</p>
           <p>Quantity: {fantaPQList.length > 0 && <text>{fantaPQList[3].Quantity}</text>}</p>


            
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
          <p> Price: {fantaPQList.length > 0 && <text>{fantaPQList[0].Price}</text>}</p>
           <p>Quantity: {fantaPQList.length > 0 && <text>{fantaPQList[0].Quantity}</text>}</p>
            
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
          <p> Price: {fantaPQList.length > 0 && <text>{fantaPQList[1].Price}</text>}</p>
           <p>Quantity: {fantaPQList.length > 0 && <text>{fantaPQList[1].Quantity}</text>}</p>
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
          <p> Price: {fantaPQList.length > 0 && <text>{fantaPQList[2].Price}</text>}</p>
           <p>Quantity: {fantaPQList.length > 0 && <text>{fantaPQList[2].Quantity}</text>}</p>
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
          <p> Price: {fantaFPQList.length > 0 && <text>{fantaFPQList[1].Price}</text>}</p>
           <p>Quantity: {fantaFPQList.length > 0 && <text>{fantaFPQList[1].Quantity}</text>}</p>
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
            
            <p> Price: {fantaFPQList.length > 0 && <text>{fantaFPQList[0].Price}</text>}</p>
           <p>Quantity: {fantaFPQList.length > 0 && <text>{fantaFPQList[0].Quantity}</text>}</p>
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
          <p> Price: {fantaEPQList.length > 0 && <text>{fantaEPQList[0].Price}</text>}</p>
           <p>Quantity: {fantaEPQList.length > 0 && <text>{fantaEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {fantaEPQList.length > 0 && <text>{fantaEPQList[1].Price}</text>}</p>
           <p>Quantity: {fantaEPQList.length > 0 && <text>{fantaEPQList[1].Quantity}</text>}</p>
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
          <p> Price: {fantaSWPQList.length > 0 && <text>{fantaSWPQList[0].Price}</text>}</p>
           <p>Quantity: {fantaSWPQList.length > 0 && <text>{fantaSWPQList[0].Quantity}</text>}</p>
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
          <p> Price: {fantaSWPQList.length > 0 && <text>{fantaSWPQList[1].Price}</text>}</p>
           <p>Quantity: {fantaSWPQList.length > 0 && <text>{fantaSWPQList[1].Quantity}</text>}</p>
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
          <p> Price: {fantaSEPQList.length > 0 && <text>{fantaSEPQList[0].Price}</text>}</p>
           <p>Quantity: {fantaSEPQList.length > 0 && <text>{fantaSEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {fantaSEPQList.length > 0 && <text>{fantaSEPQList[1].Price}</text>}</p>
           <p>Quantity: {fantaSEPQList.length > 0 && <text>{fantaSEPQList[1].Quantity}</text>}</p>
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

export default Beverage;
