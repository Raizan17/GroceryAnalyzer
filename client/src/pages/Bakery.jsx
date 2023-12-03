import React from 'react';
import '../css/bakery.css'; // Import your CSS file
import Bread from "../img/bread.jpg";
import Muffin from "../img/muffins.jpg";
import Walmart from "../img/walmart.png";
import Freshco from "../img/freshco.png";
import Real from "../img/real.png";
import Safeway from "../img/safeway.png";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { hashSync } from 'bcryptjs';


const Bakery = () => {
  const [breadList, setBreadList] = useState([]);
  const [breadPQList, setBreadPQList] = useState([]);
  const [breadFPQList, setBreadFPQList] = useState([]);
  const [breadEPQList, setBreadEPQList] = useState([]);
  const [breadSWPQList, setBreadSWPQList] = useState([]);
  const [breadSEPQList, setBreadSEPQList] = useState([]);
  
  const [muffinList, setMuffinList] = useState([]);
  const [muffinPQList, setMuffinPQList] = useState([]);
  const [muffinFPQList, setMuffinFPQList] = useState([]);
  const [muffinEPQ2List, setMuffinEPQ2List] = useState([]);
  const [muffinSWPQ2List, setMuffinSWPQ2List] = useState([]);
  const [muffinSEPQ2List, setMuffinSEPQ2List] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/cart", breadPQList[3]);
    } catch (err) {
      console.log("ERRORS!")
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/cart", muffinPQList[3]);
    } catch (err) {
      console.log("ERRORS!")
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const resBreadList = await axios.get("/bakerys");
        setBreadList(resBreadList.data);

        const resBreadPQList = await axios.get("/bakerys/2");
        setBreadPQList(resBreadPQList.data);

        const resBreadFPQList = await axios.get("/bakerys/3");
        setBreadFPQList(resBreadFPQList.data);

        const resBreadEPQList = await axios.get("/bakerys/4");
        setBreadEPQList(resBreadEPQList.data);

        const resBreadSWPQList = await axios.get("/bakerys/5");
        setBreadSWPQList(resBreadSWPQList.data);

        const resBreadSEPQList = await axios.get("/bakerys/6");
        setBreadSEPQList(resBreadSEPQList.data);

        const resMuffinList = await axios.get("/bakerys/7");
        setMuffinList(resMuffinList.data);

        const resMuffinPQList = await axios.get("/bakerys/8");
        setMuffinPQList(resMuffinPQList.data);

        const resMuffinFPQList = await axios.get("/bakerys/9");
        setMuffinFPQList(resMuffinFPQList.data);

        const resMuffinEPQ2List = await axios.get("/bakerys/10");
        setMuffinEPQ2List(resMuffinEPQ2List.data);

        const resMuffinSWPQ2List = await axios.get("/bakerys/11");
        setMuffinSWPQ2List(resMuffinSWPQ2List.data);

        const resMuffinSEPQ2List = await axios.get("/bakerys/12");
        setMuffinSEPQ2List(resMuffinSEPQ2List.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  


  
  return (
    <div>

      {/* BREAD */}

    <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={Bread} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">
        <p>BREAD</p>
        {breadList.map((val) => {
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
            <div className='write' onClick={handleSubmit}>

           <p> Price: {breadPQList.length > 0 && <text>{breadPQList[3].Price}</text>}</p>
           <p>Quantity: {breadPQList.length > 0 && <text>{breadPQList[3].Quantity}</text>}</p>


            
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="column">
            <img src={Freshco} alt="" className="row-image" />
          </div>
          <div className="column">
          <div className='write' onClick={handleSubmit2}>
          <p> Price: {breadPQList.length > 0 && <text>{breadPQList[0].Price}</text>}</p>
           <p>Quantity: {breadPQList.length > 0 && <text>{breadPQList[0].Quantity}</text>}</p>
            
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
          <p> Price: {breadPQList.length > 0 && <text>{breadPQList[1].Price}</text>}</p>
           <p>Quantity: {breadPQList.length > 0 && <text>{breadPQList[1].Quantity}</text>}</p>
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
          <p> Price: {breadPQList.length > 0 && <text>{breadPQList[2].Price}</text>}</p>
           <p>Quantity: {breadPQList.length > 0 && <text>{breadPQList[2].Quantity}</text>}</p>
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
          <p> Price: {breadFPQList.length > 0 && <text>{breadFPQList[1].Price}</text>}</p>
           <p>Quantity: {breadFPQList.length > 0 && <text>{breadFPQList[1].Quantity}</text>}</p>
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
            
            <p> Price: {breadFPQList.length > 0 && <text>{breadFPQList[0].Price}</text>}</p>
           <p>Quantity: {breadFPQList.length > 0 && <text>{breadFPQList[0].Quantity}</text>}</p>
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
          <p> Price: {breadEPQList.length > 0 && <text>{breadEPQList[0].Price}</text>}</p>
           <p>Quantity: {breadEPQList.length > 0 && <text>{breadEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {breadEPQList.length > 0 && <text>{breadEPQList[1].Price}</text>}</p>
           <p>Quantity: {breadEPQList.length > 0 && <text>{breadEPQList[1].Quantity}</text>}</p>
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
          <p> Price: {breadSWPQList.length > 0 && <text>{breadSWPQList[0].Price}</text>}</p>
           <p>Quantity: {breadSWPQList.length > 0 && <text>{breadSWPQList[0].Quantity}</text>}</p>
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
          <p> Price: {breadSWPQList.length > 0 && <text>{breadSWPQList[1].Price}</text>}</p>
           <p>Quantity: {breadSWPQList.length > 0 && <text>{breadSWPQList[1].Quantity}</text>}</p>
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
          <p> Price: {breadSEPQList.length > 0 && <text>{breadSEPQList[0].Price}</text>}</p>
           <p>Quantity: {breadSEPQList.length > 0 && <text>{breadSEPQList[0].Quantity}</text>}</p>
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
          <p> Price: {breadSEPQList.length > 0 && <text>{breadSEPQList[1].Price}</text>}</p>
           <p>Quantity: {breadSEPQList.length > 0 && <text>{breadSEPQList[1].Quantity}</text>}</p>
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

    {/* MUFFIN*/}
  
  
    <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={Muffin} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">
        <p>MUFFIN</p>
        {muffinList.map((val) => {
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
            <div className='write' onClick={handleSubmit2}>

           <p> Price: {muffinPQList.length > 0 && <text>{muffinPQList[3].Price}</text>}</p>
           <p>Quantity: {muffinPQList.length > 0 && <text>{muffinPQList[3].Quantity}</text>}</p>


            
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
          <p> Price: {muffinPQList.length > 0 && <text>{muffinPQList[0].Price}</text>}</p>
           <p>Quantity: {muffinPQList.length > 0 && <text>{muffinPQList[0].Quantity}</text>}</p>
            
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
          <p> Price: {muffinPQList.length > 0 && <text>{muffinPQList[1].Price}</text>}</p>
           <p>Quantity: {muffinPQList.length > 0 && <text>{muffinPQList[1].Quantity}</text>}</p>
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
          <p> Price: {muffinPQList.length > 0 && <text>{muffinPQList[2].Price}</text>}</p>
           <p>Quantity: {muffinPQList.length > 0 && <text>{muffinPQList[2].Quantity}</text>}</p>
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
          <p> Price: {muffinFPQList.length > 0 && <text>{muffinFPQList[1].Price}</text>}</p>
           <p>Quantity: {muffinFPQList.length > 0 && <text>{muffinFPQList[1].Quantity}</text>}</p>
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
            
            <p> Price: {muffinFPQList.length > 0 && <text>{muffinFPQList[0].Price}</text>}</p>
           <p>Quantity: {muffinFPQList.length > 0 && <text>{muffinFPQList[0].Quantity}</text>}</p>
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
          <p> Price: {muffinEPQ2List.length > 0 && <text>{muffinEPQ2List[0].Price}</text>}</p>
           <p>Quantity: {muffinEPQ2List.length > 0 && <text>{muffinEPQ2List[0].Quantity}</text>}</p>
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
          <p> Price: {muffinEPQ2List.length > 0 && <text>{muffinEPQ2List[1].Price}</text>}</p>
           <p>Quantity: {muffinEPQ2List.length > 0 && <text>{muffinEPQ2List[1].Quantity}</text>}</p>
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
          <p> Price: {muffinSWPQ2List.length > 0 && <text>{muffinSWPQ2List[0].Price}</text>}</p>
           <p>Quantity: {muffinSWPQ2List.length > 0 && <text>{muffinSWPQ2List[0].Quantity}</text>}</p>
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
          <p> Price: {muffinSWPQ2List.length > 0 && <text>{muffinSWPQ2List[1].Price}</text>}</p>
           <p>Quantity: {muffinSWPQ2List.length > 0 && <text>{muffinSWPQ2List[1].Quantity}</text>}</p>
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
          <p> Price: {muffinSEPQ2List.length > 0 && <text>{muffinSEPQ2List[0].Price}</text>}</p>
           <p>Quantity: {muffinSEPQ2List.length > 0 && <text>{muffinSEPQ2List[0].Quantity}</text>}</p>
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
          <p> Price: {muffinSEPQ2List.length > 0 && <text>{muffinSEPQ2List[1].Price}</text>}</p>
           <p>Quantity: {muffinSEPQ2List.length > 0 && <text>{muffinSEPQ2List[1].Quantity}</text>}</p>
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

export default Bakery;
