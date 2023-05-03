import React from "react";
import { UilUser,UilEstate,UilFileAlt,UilBriefcaseAlt,UilDesktopAlt,UilMessage } from "@iconscout/react-unicons";
import { Box, Flex, IconButton, useDisclosure,Grid,GridItem,Stack,Text, textDecoration, Button } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ReactIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {Link } from "react-scroll"
import myresume from "../Assets/Mohak_Tandon_Resume (8).pdf"
import {Link as DLink} from "@chakra-ui/react"


function Navbar() {
    const [dark,setdark]=useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [count,setcount]=useState(0)
const { isOpen, onOpen, onClose } = useDisclosure();
const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handlemode=()=>{
    setdark(!dark);
  };
 
  const handleAbout=()=>{
   setcount(count+1)
   
  }
  
  return (
    <div  style={{position:'fixed',top:'0',width:'100%',zIndex:'1', backgroundColor:'rgba(255, 255, 255, 0.9)',overflow:'hidden',paddingBottom:'20px',paddingTop:'10px'}}   >
    <Flex justify="space-between" alignItems="center"  w='100%'  >
      <IconButton
        icon={mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Toggle mobile menu"
        display={{ md: "none" }}
        onClick={toggleMobileMenu}
      />
      <Box display={{md:"none"}} m='5px'>

        
        <Button onClick={handlemode} _hover={{color:"#8A3FFC"}}>

        {/* {dark?<UilSun /> : <UilMoon />} */}
        </Button>
        
      </Box>
      <Box display={{ base: "none", md: "block" }} >
         <Stack direction='row' >
            <Box paddingLeft='60px' _hover={{textDecoration:'none',color:"#8A3FFC"}}>
            <Link _hover={{textDecor:"none",color:"#8A3FFC"}} to='home'  href="#" smooth={true} offset={-100} duration={600}>
            <Text fontWeight='400'>Home</Text>
            </Link>
            </Box>
            <Box paddingLeft='60px' _hover={{textDecoration:'none',color:"#8A3FFC"}}>
            <Link  to='about' href="#"  smooth={true} offset={-50} duration={600}   ><Text fontWeight='450'  >About</Text></Link>
            </Box>
            <Box paddingLeft='60px'_hover={{textDecoration:'none',color:"#8A3FFC"}}>
            <Link _hover={{textDecor:"none",color:"#8A3FFC"}} to='skills'href="#"  smooth={true} offset={-170} duration={600}><Text fontWeight='450'>Skills</Text></Link>
            </Box>
            <Box paddingLeft='60px' _hover={{textDecoration:'none',color:"#8A3FFC"}}>
            <Link _hover={{textDecor:"none",color:"#8A3FFC"}} to='projects' href="#" smooth={true} offset={-100} duration={600}><Text fontWeight='450'>Projects</Text></Link>
            </Box>
            {/* <Box paddingLeft='60px'> */}
            {/* <Link _hover={{textDecor:"none",color:"#8A3FFC"}} download={ReactIcon}  smooth={true} offset={470} duration={600}><Text fontWeight='450'>Resume</Text></Link> */}
            {/* </Box> */}
            <Box paddingLeft='45px' paddingRight='10px' _hover={{textDecoration:'none',color:"#8A3FFC"}}>
            <Link _hover={{textDecor:"none",color:"#8A3FFC"}} to='contact'  href="#" smooth={true} offset={50} duration={600}><Text fontWeight='450'>Contact Me</Text></Link>
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
  </div>
  
  );
}

export default Navbar;