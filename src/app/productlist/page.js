'use client'
import { useEffect, useState } from 'react'
import style from '../page.module.css'
export default function Page () {
    const [product , setProduct] = useState([]);
    useEffect( async () => {
        let data = await fetch('https://dummyjson.com/products');
        data = await data.json();
        console.log(data);
        setProduct(data.products);
    },[])
    return (
        <div className={style.main}>
            <h1 className={style.heading}>Product List</h1>
            {
                product.map((item)=>(
                    <div key={item.id}>
                    <h3>Name: {item.title}</h3>

                    </div>
                ))
            }
        </div>
    )
}