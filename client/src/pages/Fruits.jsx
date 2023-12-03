import React from 'react';
import '../css/bakery.css'; // Import your CSS file
import Apple from "../img/apple.jpg";
import Banana from "../img/banana.jpg";
import Walmart from "../img/walmart.png";
import Freshco from "../img/freshco.png";
import Real from "../img/real.png";
import Safeway from "../img/safeway.png";
import { useState, useEffect } from 'react';
import axios from 'axios';
const Fruits = () => {


  const[FruitList, setFruitList] = useState([])
  const[PQList,setPQList] = useState([])
  const[FPQList,setFPQList] = useState([])
  const[EPQList,setEPQList] = useState([])
  const[SWPQList,setSWPQList] = useState([])
  const[SEPQList,setSEPQList] = useState([])
  
  const[Fruit2List, setFruit2List] = useState([])
  const[PQ2List,setPQ2List] = useState([])
  const[FPQ2List,setFPQ2List] = useState([])
  const[EPQ2List,setEPQ2List] = useState([])
  const[SWPQ2List,setSWPQ2List] = useState([])
  const[SEPQ2List,setSEPQ2List] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resFruitList = await axios.get("/posts");     
        setFruitList(resFruitList.data);

        const resPQList = await axios.get("/posts/2");
        setPQList(resPQList.data);

        const resFPQList = await axios.get("/posts/3");
        setFPQList(resFPQList.data);

        const resEPQList = await axios.get("/posts/4");
        setEPQList(resEPQList.data);

        const resSWPQList = await axios.get("/posts/5");
        setSWPQList(resSWPQList.data);

        const resSEPQList = await axios.get("/posts/6");
        setSEPQList(resSEPQList.data);


        const resFruit2List = await axios.get("/posts/7");     
        setFruit2List(resFruit2List.data);

        const resPQ2List = await axios.get("/posts/8");
        setPQ2List(resPQ2List.data);

        const resFPQ2List = await axios.get("/posts/9");
        setFPQ2List(resFPQ2List.data);

        const resEPQ2List = await axios.get("/posts/10");
        setEPQ2List(resEPQ2List.data);

        const resSWPQ2List = await axios.get("/posts/11");
        setSWPQ2List(resSWPQ2List.data);

        const resSEPQ2List = await axios.get("/posts/12");
        setSEPQ2List(resSEPQ2List.data);
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>

      {/* APPLE */}

    <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={Apple} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">
        <p>APPLE</p>

        {FruitList.map((val) => {
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

           <p> Price: {PQList.length > 0 && <text>{PQList[3].Price}</text>}</p>
           <p>Quantity: {PQList.length > 0 && <text>{PQList[3].Quantity}</text>}</p>


            
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
          <p> Price: {PQList.length > 0 && <text>{PQList[0].Price}</text>}</p>
           <p>Quantity: {PQList.length > 0 && <text>{PQList[0].Quantity}</text>}</p>
            
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
          <p> Price: {PQList.length > 0 && <text>{PQList[1].Price}</text>}</p>
           <p>Quantity: {PQList.length > 0 && <text>{PQList[1].Quantity}</text>}</p>
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
          <p> Price: {PQList.length > 0 && <text>{PQList[2].Price}</text>}</p>
           <p>Quantity: {PQList.length > 0 && <text>{PQList[2].Quantity}</text>}</p>
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
          <p> Price: {FPQList.length > 0 && <text>{FPQList[1].Price}</text>}</p>
           <p>Quantity: {FPQList.length > 0 && <text>{FPQList[1].Quantity}</text>}</p>
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
            
            <p> Price: {FPQList.length > 0 && <text>{FPQList[0].Price}</text>}</p>
           <p>Quantity: {FPQList.length > 0 && <text>{FPQList[0].Quantity}</text>}</p>
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
          <p> Price: {EPQList.length > 0 && <text>{EPQList[0].Price}</text>}</p>
           <p>Quantity: {EPQList.length > 0 && <text>{EPQList[0].Quantity}</text>}</p>
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
          <p> Price: {EPQList.length > 0 && <text>{EPQList[1].Price}</text>}</p>
           <p>Quantity: {EPQList.length > 0 && <text>{EPQList[1].Quantity}</text>}</p>
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
          <p> Price: {SWPQList.length > 0 && <text>{SWPQList[0].Price}</text>}</p>
           <p>Quantity: {SWPQList.length > 0 && <text>{SWPQList[0].Quantity}</text>}</p>
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
          <p> Price: {SWPQList.length > 0 && <text>{SWPQList[1].Price}</text>}</p>
           <p>Quantity: {SWPQList.length > 0 && <text>{SWPQList[1].Quantity}</text>}</p>
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
          <p> Price: {SEPQList.length > 0 && <text>{SEPQList[0].Price}</text>}</p>
           <p>Quantity: {SEPQList.length > 0 && <text>{SEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {SEPQList.length > 0 && <text>{SEPQList[1].Price}</text>}</p>
           <p>Quantity: {SEPQList.length > 0 && <text>{SEPQList[1].Quantity}</text>}</p>
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

    {/* BANANA*/}
  
  
    <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={Banana} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">
        <p>BANANA</p>
        {Fruit2List.map((val) => {
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

           <p> Price: {PQ2List.length > 0 && <text>{PQ2List[3].Price}</text>}</p>
           <p>Quantity: {PQ2List.length > 0 && <text>{PQ2List[3].Quantity}</text>}</p>


            
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
          <p> Price: {PQ2List.length > 0 && <text>{PQ2List[0].Price}</text>}</p>
           <p>Quantity: {PQ2List.length > 0 && <text>{PQ2List[0].Quantity}</text>}</p>
            
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
          <p> Price: {PQ2List.length > 0 && <text>{PQ2List[1].Price}</text>}</p>
           <p>Quantity: {PQ2List.length > 0 && <text>{PQ2List[1].Quantity}</text>}</p>
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
          <p> Price: {PQ2List.length > 0 && <text>{PQ2List[2].Price}</text>}</p>
           <p>Quantity: {PQ2List.length > 0 && <text>{PQ2List[2].Quantity}</text>}</p>
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
          <p> Price: {FPQ2List.length > 0 && <text>{FPQ2List[1].Price}</text>}</p>
           <p>Quantity: {FPQ2List.length > 0 && <text>{FPQ2List[1].Quantity}</text>}</p>
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
            
            <p> Price: {FPQ2List.length > 0 && <text>{FPQ2List[0].Price}</text>}</p>
           <p>Quantity: {FPQ2List.length > 0 && <text>{FPQ2List[0].Quantity}</text>}</p>
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
          <p> Price: {EPQ2List.length > 0 && <text>{EPQ2List[0].Price}</text>}</p>
           <p>Quantity: {EPQ2List.length > 0 && <text>{EPQ2List[0].Quantity}</text>}</p>
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
          <p> Price: {EPQ2List.length > 0 && <text>{EPQ2List[1].Price}</text>}</p>
           <p>Quantity: {EPQ2List.length > 0 && <text>{EPQ2List[1].Quantity}</text>}</p>
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
          <p> Price: {SWPQ2List.length > 0 && <text>{SWPQ2List[0].Price}</text>}</p>
           <p>Quantity: {SWPQ2List.length > 0 && <text>{SWPQ2List[0].Quantity}</text>}</p>
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
          <p> Price: {SWPQ2List.length > 0 && <text>{SWPQ2List[1].Price}</text>}</p>
           <p>Quantity: {SWPQ2List.length > 0 && <text>{SWPQ2List[1].Quantity}</text>}</p>
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
          <p> Price: {SEPQ2List.length > 0 && <text>{SEPQ2List[0].Price}</text>}</p>
           <p>Quantity: {SEPQ2List.length > 0 && <text>{SEPQ2List[0].Quantity}</text>}</p>
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
          <p> Price: {SEPQ2List.length > 0 && <text>{SEPQ2List[1].Price}</text>}</p>
           <p>Quantity: {SEPQ2List.length > 0 && <text>{SEPQ2List[1].Quantity}</text>}</p>
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

export default Fruits;
