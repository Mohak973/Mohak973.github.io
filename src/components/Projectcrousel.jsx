import React from 'react'
import {Box,Text,Image, Button,Link, grid} from "@chakra-ui/react"

import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const projects=[{name:'Dot And Key',img:'https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-51_large.webp?v=1672730849',description:'It Is An E-COMMERCE Website That Is Used To Buy Beauty Products Specially For Womens.',tech:'HTML CSS JS',git:'https://github.com/Kapil7982/Dot-Key-website',live:'https://benevolent-paletas-bb73f5.netlify.app/'},
    {name:'Crocs',img:'https://mashreqbank.com/-/jssmedia/Images/UAE/neo/offers/BU-Jun22-Neo-Website-Crocs-Banner-1900x800',description:'Crocs is an E-commerce Website,From which user can buy Crocs,flip-flop online.',tech:'HTML, CSS,React,Chakra,Context-Api,Json-Server',git:'https://github.com/Mohak973/seemly-coat-6353',live:'https://astounding-paprenjak-c75425.netlify.app/'},
    {name:'Myntra',img:'https://static.businessworld.in/article/article_extra_large_image/1449649236_WAIDtM_myntra-680.jpg',description:'Myntra is a n E-commerce webiste that sell cloths,gadgets,goods,appliances online.',tech:'HTML CSS JS',git:'https://github.com/Morpheus7007/can-water-5067.git',live:'https://rococo-vacherin-b7d0c8.netlify.app/index.html'},
  ];
    return (
<Box></Box>
//    <Box>
 
   
      
//     <Box width='70%' border='2px solid red' margin='auto'   > 
//         <Slider {...settings} border='2px solid blue' >
//         {projects.map((el)=>(
//            <Box   textAlign='center'  border='3px solid yellow'>
           
//                 <Image justifySelf='center' ml='250px'c width='600px' boxSize='400px' border="3px solid green" src={el.img}></Image>
//                 <Text ml='250px' maxW='400px' color='white'>{el.description}</Text>
//                 <Text color='white'>{el.tech}</Text>
//                 <Link color='white' href={el.git}>Code</Link>
//                 <Link color='white' href={el.live}>View</Link>
//             </Box>
//         ))}
//         </Slider>
//     </Box>
//     </Box>
    );
  }
}