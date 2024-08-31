import React from 'react'
import { useParams } from 'react-router-dom';
const Itemdetails = () => {
    const { id } = useParams();
    const items = [
        { id: 1, name: "Item 1", description: "Description for Item 1" },
        { id: 2, name: "Item 2", description: "Description for Item 2" },
        { id: 3, name: "Item 3", description: "Description for Item 3" },
      ];
      const item = items.find((item)=>item.id === parseInt(id));
      console.log(item);
  return (
    <div>
        {
           item?(
            <>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            </>
           ) :(<></>)
        }
    </div>
  );
}

export default Itemdetails