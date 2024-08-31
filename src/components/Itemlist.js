import React from 'react'
import { Link } from 'react-router-dom';

const Itemlist = () => {
    const items = [
        { id: 1, name: "Item 1", description: "Description for Item 1" },
        { id: 2, name: "Item 2", description: "Description for Item 2" },
        { id: 3, name: "Item 3", description: "Description for Item 3" },
      ];
  return (
    <div>
        <h1>Item List</h1>
        <ul>
        {
            items.map((item,index)=>(
        <li key={index}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
        </li>
        ))}
        </ul>
        
    </div>
  )
}

export default Itemlist