import React, { useEffect } from 'react'
import { useState } from 'react'
import Restcard from './Restcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restlist() {

    const[AllRestaurents,setAllRestaurents] = useState([])

    const getRestaurents=async()=>{
        await fetch('./restaurants.json')
        .then((data)=>{
            data.json()
            .then((result)=>{

                // console.log(result);
                setAllRestaurents(result.restaurants)
                
            })
            // console.log(data);
        })
    }

    console.log(AllRestaurents);

    useEffect( ()=>{
       
        getRestaurents()
    },[])

  return (
    <Row>

        {
            AllRestaurents.map((item)=>(

                <Restcard restaurent={item}/>
                // <h1>{item.name}</h1>
            ))
        }
    </Row>
  )
}

export default Restlist