import React,{useEffect} from 'react'
import {Box,Text,Image,Button,Link, ScaleFade, scaleFadeConfig} from "@chakra-ui/react"

import AOS from "aos"
import 'aos/dist/aos.css';

function Projects({handlemode,mode}) {
    useEffect(()=>{
        AOS.init({duration:2000})
          },[])
          const projects=[{name:'Dot And Key',img:'https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-51_large.webp?v=1672730849',description:'It Is An E-COMMERCE Website That Is Used To Buy Beauty Products Specially For Womens.Dot & Key is an internet-first brand of natural skincare products. ',tech:'HTML CSS JS',git:'https://github.com/Kapil7982/Dot-Key-website',live:'https://64c3729570fca642ee029722--curious-lebkuchen-56c966.netlify.app/'},
          {name:'Crocs',img:'https://mashreqbank.com/-/jssmedia/Images/UAE/neo/offers/BU-Jun22-Neo-Website-Crocs-Banner-1900x800',description:'Crocs is an E-commerce Website,From which user can buy Crocs,flip-flop online.This clone website of crocs is made individually using reactjs.',tech:'HTML, CSS,React,Chakra,Context-Api,Json-Server',git:'https://github.com/Mohak973/seemly-coat-6353',live:'https://bespoke-clafoutis-522c8f.netlify.app/'},
          {name:'Myntra',img:'https://static.businessworld.in/article/article_extra_large_image/1449649236_WAIDtM_myntra-680.jpg',description:'Myntra is a n E-commerce webiste that sell cloths,gadgets,goods,appliances online.This a collaborative project.',tech:'HTML CSS JS',git:'https://github.com/Morpheus7007/can-water-5067.git',live:'https://rococo-vacherin-b7d0c8.netlify.app/index.html'},
        ];
  return (
    <Box 
     pt="80px"  backgroundColor={mode?"black":'#ffffff'} overflow='hidden' id='projects'>
        <Text color="#a6a6a6" fontSize='38px' fontWeight='500' >My Portfolio</Text>
        <Text color='#a6a6a6' mb='80px'>Projects Made</Text>
<Box display='grid' gap='100px' margin='auto' width='70%' >
        {projects.map((el)=>(
            <Box display={{base:'grid',sm:'grid',md:'grid',lg:'grid'}}  className='main' width={{base:'100%'}}   gridTemplateColumns={{md:'repeat(2,1fr)',lg:'repeat(2,1fr)',base:'repeat(1,1fr)',sm:'repeat(1,1fr)'}} data-aos="flip-left" data-aos-easing="ease-out-cubic"  >
                 <Box   w='fit-content' padding='10px' boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
                    <Image _hover={{transform:'scale(1.1,1.1)',
                                 transition:"transform 0.7s"
                }}  boxSize={{md:'280px',lg:'280px',base:'270px',sm:'370px'}} src={el.img}></Image>
                 </Box>
                 <Box  w={{md:'400px',lg:'400px',base:'270px',sm:'340px'}}   textAlign='center'   
                  justifyContent='center'>
                    <Text color='#8A3FFC' mt='-10px' fontStyle='oblique' fontWeight='100px' fontSize='40px'  >{el.name}</Text>
                    <Text ml={{md:'100px',lg:'100px',base:'30px',sm:'65px'}} mb='10px' maxW='200px'  color='#a6a6a6' fontSize='15px'>{el.description}</Text>
                    <Text mb='10px' color='white'>{el.tech}</Text>
                    <Link textDecor='none' _hover={{textDecor:'none',}} href={el.git} isExternal><Button _hover={{backgroundColor:'#8A3FFC'}} mr='8px' width='100px'>Code</Button></Link>
                    <Link textDecor='none' _hover={{textDecor:'none'}}   href={el.live} isExternal><Button _hover={{backgroundColor:'#8A3FFC'}} width='100px'>View</Button></Link>
                    
                 </Box>
            </Box>
        ))}
        </Box>
        
    </Box>
  )
}

export default Projects