import {db} from "../db.js"

export const addPost = (req,res) => {
  const q ="SELECT * FROM cart";

  db.query(q, [req.query.Item_Type], (err,data) => {
    if(err) return res.send(err)

    return res.status(200).json(data);
  });
};

export const addPost2 = (req,res) => {
    const q ="SELECT Sum(Price) FROM cart";
  
    db.query(q, [req.query.Item_Type], (err,data) => {
      if(err) return res.send(err)
  
      return res.status(200).json(data);
    });
  };

