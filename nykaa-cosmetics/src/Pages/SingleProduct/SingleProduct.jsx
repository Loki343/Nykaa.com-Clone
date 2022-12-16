import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styles from "./SingleProduct.module.css"
import axios from 'axios'
import { Heading } from '@chakra-ui/react'

export function SingleProduct() {
    const {id} = useParams()
    console.log(id);
    const [data,setData] = useState([])
useEffect(()=>{
    axios(`http://localhost:8080/products/${id}`)
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
},[])
  return (
    <div>
        <Heading fontFamily='cursive' color='rgb(252,39,121)' fontWeight='500' marginTop='10px' textAlign='center'>{data.brand} Product</Heading>
      <div className={styles.mainDiv}>
        <img className={styles.photo} src={data.image} alt="" />
        <div className={styles.container}>
            <p className={styles.title}>{data.title}</p>
            <p className={styles.rating}>★ ★ ★ ★ ☆ 4/5 | 3274 ratings & 1693 reviews</p>
            <p className={styles.price}>MRP : {data.price} 34% 0ff</p>
            <p className={styles.caption}>inclusive of all taxes</p>
            <div className={styles.extra}>
                <img width='100%' src="https://images-static.nykaa.com/uploads/fc68d953-2b29-42f9-8df6-5ee176ad8d01.jpg?tr=w-600,cm-pad_resize" alt="i" />
            </div>
            <p style={{marginTop:'10px',cursor:'pointer',marginLeft:'18px'}}>Click here for more offers!</p>
            <button className={styles.button}>Add to Cart 👜</button>
        </div>
      </div>
    </div>
  )
}

