import React, { useEffect } from "react";
import { UilUser,UilEstate,UilFileAlt,UilBriefcaseAlt,UilDesktopAlt,UilMessage } from "@iconscout/react-unicons";
import { Box, Flex, IconButton, useDisclosure,Grid,GridItem,Stack,Text, textDecoration, Button } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ReactIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {Link } from "react-scroll"
import myresume from "../Assets/Mohak_Tandon_Resume (8).pdf"
import {Link as DLink} from "@chakra-ui/react";
import  "./Navbar.css"


function Navbar({handlemode,mode}) {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [count,setcount]=useState(0)
const { isOpen, onOpen, onClose } = useDisclosure();
const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(()=>{
    
  },[mode])
 
  
  console.log(mode)
  return (
    <div  style={{position:'fixed',top:'0',width:'100%',zIndex:"1000",backgroundColor:mode?"black":"#ffffff", display:"flex" , overflow:'hidden',paddingBottom:'20px',paddingTop:'10px',boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",borderBottom:"1px solid #ffffff"}}   >
    <Flex justify="space-between" alignItems="center"  w='100%'  >
      <IconButton
        icon={mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Toggle mobile menu"
        display={{ md: "none" }}
        onClick={toggleMobileMenu}
      />
      <Box display={{md:"none"}} m='5px'>
        
      </Box>
      <Box display={{ base: "none", md: "block" }} >
         <Stack direction='row' >
            <Box paddingLeft='60px' >
            <Link  to='home'  href="#" smooth={true} offset={-100} duration={600}>
            <Text color={mode ? '#ffffff':"black"} fontWeight='400' _hover={{color:'#8A3FFC'}}>Home</Text>
            </Link>
            </Box>
            <Box paddingLeft='60px' >
            <Link  to='about' href="#"  smooth={true} offset={-50} duration={600}   ><Text fontWeight='450' _hover={{color:'#8A3FFC'}} color={mode ? 'white':"black"} >About</Text></Link>
            </Box>
            <Box paddingLeft='60px'>
            <Link to='skills'href="#"  smooth={true} offset={-170} duration={600}><Text fontWeight='450' _hover={{color:'#8A3FFC'}} color={mode ? 'white':"black"}>Skills</Text></Link>
            </Box>
            <Box paddingLeft='60px' >
            <Link to='projects' href="#" smooth={true} offset={-100} duration={600}><Text fontWeight='450' _hover={{color:'#8A3FFC'}} color={mode ? 'white':"black"}>Projects</Text></Link>
            </Box>
            {/* <Box paddingLeft='60px'> */}
            {/* <Link download={ReactIcon}  smooth={true} offset={470} duration={600}><Text fontWeight='450'>Resume</Text></Link> */}
            {/* </Box> */}
            <Box paddingLeft='45px' paddingRight='10px' >
            <Link to='contact'  href="#" smooth={true} offset={50} duration={600}><Text fontWeight='450' _hover={{color:'#8A3FFC'}} color={mode ? 'white':"black"}>Contact Me</Text></Link>
            </Box>
    
         </Stack>
      </Box>
      <Box display={{base:"none",md:"block"}}  >
      
      </Box>
    </Flex>
    <Box
      display={{ base: mobileMenuOpen ? "block" : "none", md: "none" }}
      mt={{ base: 4, md: 0 }}
      
    >
        <Grid gridTemplateColumns='repeat(3,1fr)' gap='10px'>
            <GridItem  textAlign='center' alignItems='center' alignContent='center'  >
                <Stack direction='column' textAlign='center' alignItems='center' alignContent='center' >
                    <Link to='home'  href="#" smooth={true} offset={100} _hover={{textDecoration:"none",color:"#8A3FFC"}} >
                    <UilEstate style={{marginLeft:"24px"}}/>
                    <Text boxSize='70px' height='30px' >Home</Text>
                    </Link>
                    
                </Stack>
            </GridItem>
            <GridItem >
                <Stack direction='column' textAlign='center' alignItems='center'>
                    <Link to='about'  href="#" smooth={true} offset={-300} _hover={{textDecoration:"none",color:"#8A3FFC"}}>
                    <UilUser style={{marginLeft:"24px"}}/>
                    <Text boxSize='70px' height='30px' >About</Text>
                    </Link>
                   
                </Stack>
            </GridItem>
            <GridItem >
            <Stack direction='column' textAlign='center' alignItems='center'>
                <Link to='skills'  href="#" smooth={true} offset={-350} _hover={{textDecoration:"none",color:"#8A3FFC"}}>
                <UilDesktopAlt style={{marginLeft:"24px"}} />
                    <Text boxSize='70px' height='30px' >Skills</Text>
                </Link>
                
                </Stack>
            </GridItem>
            <GridItem >
            <Stack direction='column' textAlign='center' alignItems='center'>
                <Link to='projects'  href="#" smooth={true} offset={-180}  _hover={{textDecoration:"none",color:"#8A3FFC"}}>
                <UilBriefcaseAlt style={{marginLeft:"24px"}}/>
                    <Text boxSize='70px' height='30px' >Projects</Text>
                
                </Link>
               
                </Stack>
            </GridItem>
            <GridItem >
            <Stack direction='column' textAlign='center' alignItems='center'>
                <DLink download={myresume}  href={myresume} _hover={{textDecoration:"none",color:"#8A3FFC"}}>
                <UilFileAlt style={{marginLeft:"22px"}}/>
                    <Text boxSize='70px' height='30px' >Resume</Text>
                </DLink>
                
                </Stack>
            </GridItem>
            <GridItem >
            <Stack direction='column' textAlign='center' alignItems='center'>
                <Link to='contact'  href="#" smooth={true} offset={-200} _hover={{textDecoration:"none",color:"#8A3FFC"}}>
                <UilMessage style={{marginLeft:"36px"}}/>
                    <Text  boxSize='90px' height='30px' >Contact Me</Text>
                
                </Link>
                </Stack>
            </GridItem>
        </Grid>
        
     
    </Box>
   
        <input type="checkbox" class="theme-checkbox" onClick={handlemode}></input>
  </div>
  
  );
}

export default Navbar;