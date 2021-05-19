import React,{useState,useEffect} from 'react'
export default function List({getItems}){
    const [items,setItems] = useState([])
    useEffect(()=>{
        console.log('working');
        setItems(getItems(5))
    },[getItems])
    return(
        items.map((item,index)=>{
            return (
                <div key={`${index}_${item}`}>{item}</div>
            )
        })
    )
}
