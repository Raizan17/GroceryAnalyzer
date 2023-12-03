import React from 'react';
import '../css/bakery.css'; // Import your CSS file
import Chicken from "../img/chicken.jpg";
import Beef from "../img/beef.jpg";
import Walmart from "../img/walmart.png";
import Freshco from "../img/freshco.png";
import Real from "../img/real.png";
import Safeway from "../img/safeway.png";
import { useState, useEffect } from 'react';
import axios from 'axios';


const Meat = () => {

  const [chickenList, setChickenList] = useState([]);
const [chickenPQList, setChickenPQList] = useState([]);
const [chickenFPQList, setChickenFPQList] = useState([]);
const [chickenEPQList, setChickenEPQList] = useState([]);
const [chickenSWPQList, setChickenSWPQList] = useState([]);
const [chickenSEPQList, setChickenSEPQList] = useState([]);

const [beefList, setBeefList] = useState([]);
const [beefPQList, setBeefPQList] = useState([]);
const [beefFPQList, setBeefFPQList] = useState([]);
const [beefEPQList, setBeefEPQ2List] = useState([]);
const [beefSWPQList, setBeefSWPQ2List] = useState([]);
const [beefSEPQList, setBeefSEPQ2List] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const resChickenList = await axios.get("/meats/");
      setChickenList(resChickenList.data);

      const resChickenPQList = await axios.get("/meats/2");
      setChickenPQList(resChickenPQList.data);

      const resChickenFPQList = await axios.get("/meats/3");
      setChickenFPQList(resChickenFPQList.data);

      const resChickenEPQList = await axios.get("/meats/4");
      setChickenEPQList(resChickenEPQList.data);

      const resChickenSWPQList = await axios.get("/meats/5");
      setChickenSWPQList(resChickenSWPQList.data);

      const resChickenSEPQList = await axios.get("/meats/6");
      setChickenSEPQList(resChickenSEPQList.data);

      const resBeefList = await axios.get("/meats/7");
      setBeefList(resBeefList.data);

      const resBeefPQList = await axios.get("/meats/8");
      setBeefPQList(resBeefPQList.data);

      const resBeefFPQList = await axios.get("/meats/9");
      setBeefFPQList(resBeefFPQList.data);

      const resBeefEPQ2List = await axios.get("/meats/10");
      setBeefEPQ2List(resBeefEPQ2List.data);

      const resBeefSWPQ2List = await axios.get("/meats/11");
      setBeefSWPQ2List(resBeefSWPQ2List.data);

      const resBeefSEPQ2List = await axios.get("/meats/12");
      setBeefSEPQ2List(resBeefSEPQ2List.data);
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
}, []);


  return (
    <div>
      {/* CHICKEN */}

      <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={Chicken} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">
        <p>CHICKEN</p>
        {chickenList.map((val) => {
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

           <p> Price: {chickenPQList.length > 0 && <text>{chickenPQList[3].Price}</text>}</p>
           <p>Quantity: {chickenPQList.length > 0 && <text>{chickenPQList[3].Quantity}</text>}</p>


            
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
          <p> Price: {chickenPQList.length > 0 && <text>{chickenPQList[0].Price}</text>}</p>
           <p>Quantity: {chickenPQList.length > 0 && <text>{chickenPQList[0].Quantity}</text>}</p>
            
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
          <p> Price: {chickenPQList.length > 0 && <text>{chickenPQList[1].Price}</text>}</p>
           <p>Quantity: {chickenPQList.length > 0 && <text>{chickenPQList[1].Quantity}</text>}</p>
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
          <p> Price: {chickenPQList.length > 0 && <text>{chickenPQList[2].Price}</text>}</p>
           <p>Quantity: {chickenPQList.length > 0 && <text>{chickenPQList[2].Quantity}</text>}</p>
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
          <p> Price: {chickenFPQList.length > 0 && <text>{chickenFPQList[1].Price}</text>}</p>
           <p>Quantity: {chickenFPQList.length > 0 && <text>{chickenFPQList[1].Quantity}</text>}</p>
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
            
            <p> Price: {chickenFPQList.length > 0 && <text>{chickenFPQList[0].Price}</text>}</p>
           <p>Quantity: {chickenFPQList.length > 0 && <text>{chickenFPQList[0].Quantity}</text>}</p>
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
          <p> Price: {chickenEPQList.length > 0 && <text>{chickenEPQList[0].Price}</text>}</p>
           <p>Quantity: {chickenEPQList.length > 0 && <text>{chickenEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {chickenEPQList.length > 0 && <text>{chickenEPQList[1].Price}</text>}</p>
           <p>Quantity: {chickenEPQList.length > 0 && <text>{chickenEPQList[1].Quantity}</text>}</p>
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
          <p> Price: {chickenSWPQList.length > 0 && <text>{chickenSWPQList[0].Price}</text>}</p>
           <p>Quantity: {chickenSWPQList.length > 0 && <text>{chickenSWPQList[0].Quantity}</text>}</p>
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
          <p> Price: {chickenSWPQList.length > 0 && <text>{chickenSWPQList[1].Price}</text>}</p>
           <p>Quantity: {chickenSWPQList.length > 0 && <text>{chickenSWPQList[1].Quantity}</text>}</p>
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
          <p> Price: {chickenSEPQList.length > 0 && <text>{chickenSEPQList[0].Price}</text>}</p>
           <p>Quantity: {chickenSEPQList.length > 0 && <text>{chickenSEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {chickenSEPQList.length > 0 && <text>{chickenSEPQList[1].Price}</text>}</p>
           <p>Quantity: {chickenSEPQList.length > 0 && <text>{chickenSEPQList[1].Quantity}</text>}</p>
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

    {/* BEEF*/}
  
  
    <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={Beef} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">
        <p>BEEF</p>
        {beefList.map((val) => {
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

           <p> Price: {beefPQList.length > 0 && <text>{beefPQList[3].Price}</text>}</p>
           <p>Quantity: {beefPQList.length > 0 && <text>{beefPQList[3].Quantity}</text>}</p>


            
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
          <p> Price: {beefPQList.length > 0 && <text>{beefPQList[0].Price}</text>}</p>
           <p>Quantity: {beefPQList.length > 0 && <text>{beefPQList[0].Quantity}</text>}</p>
            
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
          <p> Price: {beefPQList.length > 0 && <text>{beefPQList[1].Price}</text>}</p>
           <p>Quantity: {beefPQList.length > 0 && <text>{beefPQList[1].Quantity}</text>}</p>
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
          <p> Price: {beefPQList.length > 0 && <text>{beefPQList[2].Price}</text>}</p>
           <p>Quantity: {beefPQList.length > 0 && <text>{beefPQList[2].Quantity}</text>}</p>
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
          <p> Price: {beefFPQList.length > 0 && <text>{beefFPQList[1].Price}</text>}</p>
           <p>Quantity: {beefFPQList.length > 0 && <text>{beefFPQList[1].Quantity}</text>}</p>
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
            
            <p> Price: {beefFPQList.length > 0 && <text>{beefFPQList[0].Price}</text>}</p>
           <p>Quantity: {beefFPQList.length > 0 && <text>{beefFPQList[0].Quantity}</text>}</p>
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
          <p> Price: {beefEPQList.length > 0 && <text>{beefEPQList[0].Price}</text>}</p>
           <p>Quantity: {beefEPQList.length > 0 && <text>{beefEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {beefEPQList.length > 0 && <text>{beefEPQList[1].Price}</text>}</p>
           <p>Quantity: {beefEPQList.length > 0 && <text>{beefEPQList[1].Quantity}</text>}</p>
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
          <p> Price: {beefSWPQList.length > 0 && <text>{beefSWPQList[0].Price}</text>}</p>
           <p>Quantity: {beefSWPQList.length > 0 && <text>{beefSWPQList[0].Quantity}</text>}</p>
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
          <p> Price: {beefSWPQList.length > 0 && <text>{beefSWPQList[1].Price}</text>}</p>
           <p>Quantity: {beefSWPQList.length > 0 && <text>{beefSWPQList[1].Quantity}</text>}</p>
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
          <p> Price: {beefSEPQList.length > 0 && <text>{beefSEPQList[0].Price}</text>}</p>
           <p>Quantity: {beefSEPQList.length > 0 && <text>{beefSEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {beefSEPQList.length > 0 && <text>{beefSEPQList[1].Price}</text>}</p>
           <p>Quantity: {beefSEPQList.length > 0 && <text>{beefSEPQList[1].Quantity}</text>}</p>
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

export default Meat;
