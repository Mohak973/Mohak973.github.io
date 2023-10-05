import React from 'react'
import {Text,Button,Box,Link,Flex,Image} from "@chakra-ui/react"
import {UilDownloadAlt} from "@iconscout/react-unicons"
import { useInView } from "react-intersection-observer";
import AOS from "aos"
import { motion,useAnimation } from "framer-motion";
import mohakpic from "../Assets/WhatsApp Image 2023-01-31 at 13.29-PhotoRoom (1).png"
import "./About.css";
import myresume from "../Assets/Mohak_Tandon_Resume (8).pdf"

import 'aos/dist/aos.css';
 
    
    
 function About({handlemode,mode}){
  
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
    
  }, []);
  return (
    
    <Box   id='about' pt='150px'zIndex='-1' backgroundColor={mode?"black":'#ffffff'}  width={{lg:'100%',sm:'100%',base:'100%',md:'100%'}} overflow='hidden'>
       
    <Text fontSize='38px' fontWeight='500' color="#a6a6a6" >About me</Text>
    <Text color='#a6a6a6' mb='80px'>My introduction</Text>
   
   
    <Box  display={{lg:'flex',md:'flex',sm:'grid',base:'grid'}} w='fit-content' mt='200px'   width='70%'  gap={{lg:'250px',md:'150px',sm:'100px',base:'100px'}} m='auto' textAlign='center'>
      
     
      <Box data-aos="fade-right" display='flex' justifyContent='center' alignItems='center'    ml={{lg:'100px',base:'0px'}}  mr={{base:'40px'}}  
     
     
     
    
       >
        <Image src={mohakpic} w='100%' h='80%' borderRadius='10px'></Image>
      </Box>
     
     <Box data-aos="fade-left" className='desc' h='330px'   
     
     
    
      >
      <Text fontWeight='300px' mb='15px' color='#a6a6a6' lineHeight='25px' align='left'>My name is Mohak Tandon, I'm a Software Engineer with a great passion for programming. I am passionate about delivering solutions that add to people's lives and at the same time challenge me.</Text>
          <Text  fontWeight='300px' mb='20px' color='#a6a6a6' lineHeight='25px' align='left'>I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with developing layouts that they provide me. I'm always improving myself with each project I get my hands on.</Text>
          <Link download={myresume} href={myresume}><Button  backgroundColor="#8A3FFC" color='white' mr='110px' >Download Resume <UilDownloadAlt /></Button></Link>
          
      </Box>
     
    </Box>
    </Box>
   
  )
  
}

export default About;

 

