import React, { useEffect } from 'react'
import {Text,Button,Box,Image} from "@chakra-ui/react"
import AOS from "aos"
import 'aos/dist/aos.css';



function Skills() {
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
    {image:"https://img.icons8.com/ios-filled/1x/git.png",name:'GitHub'},]
  return (
   <Box mt='80px' data-aos="fade-up" id='skills'>
     <Text color="#FFFFFF" fontSize='38px' fontWeight='500' >Skills</Text>
     <Text color="#FFFFFF" color='#a6a6a6' mb='80px'>My Technical Skills</Text>
     <Box display={{base:'grid',sm:'grid',md:'grid',lg:'flex'}} gridTemplateColumns={{base:'repeat(2,1fr)',sm:"repeat(2,1fr)"}} gap='30px'  width={{base:'70%',sm:"70%",md:'70%',lg:'80%'}} margin='auto'   justifyContent='center'>
     {skills.map((el)=>(
        <Box display='grid' width={{lg:'80px'}} boxShadow='rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;' justifyContent='center' >
            <Image src={el.image} backgroundColor={el.name==="GitHub"?"white":'none'}></Image>
            <Text color="#FFFFFF" >{el.name}</Text>
        </Box>
     ))}
     </Box>
     
   </Box>
  )
}

export default Skills
