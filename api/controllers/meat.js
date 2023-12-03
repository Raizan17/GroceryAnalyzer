import {db} from "../db.js"

export const addPost = (req,res) => {
  const q ="SELECT * FROM items WHERE Item_id='CHFR1'";

  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};
 export const addPost2 = (req,res) => {
  const q ="SELECT * FROM items WHERE Item_Name='Chicken' AND items.Location_id = 'CLGDT'";

  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};

export const addPost3 = (req,res) => {
  
  const q ="SELECT * FROM items WHERE Item_Name='Chicken' AND items.Location_id = 'CLGNW'";
  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};
export const addPost4 = (req,res) => {
  
  const q ="SELECT * FROM items WHERE Item_Name='Chicken' AND items.Location_id = 'CLGNE'";
  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};
export const addPost5 = (req,res) => {
  
  const q ="SELECT * FROM items WHERE Item_Name='Chicken' AND items.Location_id = 'CLGSW'";
  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};
export const addPost6 = (req,res) => {
  
  const q ="SELECT * FROM items WHERE Item_Name='Chicken' AND items.Location_id = 'CLGSE'";
  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};





export const addPost7 = (req,res) => {
  const q ="SELECT * FROM items WHERE Item_id='BFRC1'";

  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};
 export const addPost8 = (req,res) => {
  const q ="SELECT * FROM items WHERE Item_Name='Beef' AND items.Location_id = 'CLGDT'";

  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};

export const addPost9 = (req,res) => {
  
  const q ="SELECT * FROM items WHERE Item_Name='Beef' AND items.Location_id = 'CLGNW'";
  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};
export const addPost10 = (req,res) => {
  
  const q ="SELECT * FROM items WHERE Item_Name='Beef' AND items.Location_id = 'CLGNE'";
  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};
export const addPost11 = (req,res) => {
  
  const q ="SELECT * FROM items WHERE Item_Name='Beef' AND items.Location_id = 'CLGSW'";
  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};
export const addPost12 = (req,res) => {
  
  const q ="SELECT * FROM items WHERE Item_Name='Beef' AND items.Location_id = 'CLGSE'";
  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};




export default {addPost,addPost2,addPost3,addPost4,addPost5,addPost6,addPost7, addPost8, addPost9, addPost10,addPost11,addPost12};





