import React, { useEffect } from 'react'
import {Text,Button,Box,Image} from "@chakra-ui/react"
import AOS from "aos"
import 'aos/dist/aos.css';
import { transform } from 'framer-motion';



function Skills({handlemode,mode}) {
  useEffect(()=>{
AOS.init({duration:2000})
  },[])
    const skills =[{image:"https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",name:'React JS'}
    ,{image:"https://img.icons8.com/color/48/000000/redux.png",name:'Redux'},
    {image:"https://img.icons8.com/color/48/000000/html-5--v1.png",name:'HTML5'},
    {image:"https://img.icons8.com/color/48/000000/css3.png",name:'CSS3'},
    {image:"https://img.icons8.com/color/48/000000/javascript--v1.png",name:'Javascript'},
    {image:"https://img.icons8.com/color/48/000000/heroku.png",name:'Heroku'},
    {image:"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",name:'Netlify'},
    {image:"https://cdn-icons-png.flaticon.com/128/733/733553.png",name:"Github"},]
  return (
   <Box pt='80px' backgroundColor={mode?"black":'#ffffff'}  id='skills'>
     <Text color="#a6a6a6" fontSize='38px' fontWeight='500' >Skills</Text>
     <Text color="#FFFFFF" color='#a6a6a6' mb='80px'>My Technical Skills</Text>
     <Box display={{base:'grid',sm:'grid',md:'grid',lg:'flex'}}  justifyContent='center' alignItems='center'   gridTemplateColumns={{base:'repeat(2,1fr)',sm:"repeat(2,1fr)"}} gap='30px'  width={{base:'70%',sm:"70%",md:'70%',lg:'80%'}} margin='auto'   justifyContent='center'>
     {skills.map((el)=>(
        <Box display='flex' data-aos="fade-up" padding='5px'  w='100%'  boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" flexDirection='column' _hover={{
          transform: "rotate(20deg) scaleX(1.2)",
          transition: "transform 0.2s"
        }} borderRadius='10%'  paddingBottom='5px' width={{lg:'80px'}}  justifyContent='center' >
            <Image src={el.image} backgroundColor={el.name==="GitHub"?"white":'none'}></Image>
            <Text color="#FFFFFF" >{el.name}</Text>
        </Box>
     ))}
     </Box>
     
   </Box>
  )
}

export default Skills
