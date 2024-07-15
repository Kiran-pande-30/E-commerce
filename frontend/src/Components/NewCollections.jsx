import React, { useState } from 'react'
import '../style/NewCollection.css'
// import new_collections from '../Assets/Frontend_Assets/new_collections';
import Item from './Item.jsx';
import { useEffect } from 'react';

export const NewCollections = () => {
  
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/newCollections')
    .then((response) => response.json())
    .then((data) => setNew_collection(data));
  }, [])
  return (
    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {new_collection.map((item, i)=> {
                return <Item key={i} 
                id={item.id} 
                name={item.name} 
                image = {item.image}
                new_price = {item.new_price} 
                old_price = {item.old_price}/>
            })}
        </div>
    </div>
  )
}   
