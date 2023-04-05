import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';


function Viewrest() {

    const urlparams=useParams()
    console.log(urlparams);
    console.log(urlparams.id);


    const[AllRestaurents,setAllRestaurents] = useState([])

    const getRestaurents=async()=>{
        await fetch('/restaurants.json')
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

    const viewrest=AllRestaurents.find(item=>item.id==urlparams.id)
    console.log(viewrest);


  return (
    <>
            {
                viewrest?(
                    <Row className='m-3'>
                        <Col className='ms-5' md={4}>
                                <Image src={viewrest.photograph} fluid></Image>

                        </Col>
                        <Col md={5}>
                                    <ListGroup>
                                    <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
                                    <ListGroup.Item><h1>{viewrest.cuisine_type}</h1></ListGroup.Item>
                                    <ListGroup.Item><h1>{viewrest.neighborhood}</h1></ListGroup.Item>
                                    <ListGroup.Item><h1>{viewrest.address}</h1></ListGroup.Item>

                                    <ListGroup.Item><h1><Restop operate={viewrest.operating_hours}/></h1></ListGroup.Item>

                                    <Restreview review={viewrest.reviews}/>
                                    
                        
                                    </ListGroup>


                                  


                        </Col>
                    </Row>
                ):'null'
            }


    </>
  )
}

export default Viewrest