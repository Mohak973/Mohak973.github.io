import React from "react";
import {Stack,Button,Text,Box,Grid,GridItem,Link,Flex,Image,extendTheme} from "@chakra-ui/react";
import mypic from "../Assets/profile.png"
import {Link as Dlink} from "react-scroll"

function Home() {
  return (
    <Box   justifyContent='center' id='home'  w='100%' mt="150px" zIndex='-10' overflow='hidden'>
    
       <Flex flexWrap='wrap' margin='auto'   order={1} justify='center'  gap="50px" >
        <Box mt="70px">
           <Stack direction="column" gap="30px" order={1}>
            <Link isExternal href="https://www.linkedin.com/in/mohak-tandon/"  >  <Image bgColor='#FFFFFF' width='20px'  src="https://cdn-icons-png.flaticon.com/512/220/220343.png"></Image></Link>
             <Link isExternal href='https://github.com/Mohak973'> <Image bgColor='#FFFFFF' width='20px'  src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png"></Image></Link>
             <Link  isExternal href='https://gmail.com'> <Image bgColor='#FFFFFF' width='20px'  src="https://cdn-icons-png.flaticon.com/512/3781/3781605.png"></Image></Link>
           </Stack>
        </Box >
        <Box textAlign="left"  order={{base:"3",sm:"3",md:"2",lg:"2"}} mt='10px' ml={{base:'10px'}} mr={{base:"10px"}} >
           <Text color="#FFFFFF" fontSize='35px' mt="20px" fontWeight='bold' zIndex={0}>Hi,I'am Mohak Tandon</Text>
           <Text color="#FFFFFF">Frontend developer</Text>
           <Text color="#FFFFFF" mt="10px">Enthusiatic in Web development and web designing</Text>
           <Dlink to='contact'   href="#" smooth={true} offset={50} duration={600}> <Button color="#FFFFFF" mt="30px" backgroundColor='#8A3FFC'  >Contact Me</Button></Dlink>
          
        </Box>
        <Box  h="250px"  order={{base:'2',sm:"2",md:'3',lg:'3'}}>
        
        <Image src={mypic} boxSize="250px"   backgroundColor="#8A3FFC"  borderRadius="50%"></Image>

        </Box>
       </Flex>

       </Box> 
  );
}

export default Home;