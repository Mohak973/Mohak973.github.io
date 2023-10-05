import React from "react";
import {Stack,Button,Text,Box,Grid,GridItem,Link,Flex,Image,extendTheme, textDecoration} from "@chakra-ui/react";
import mypic from "../Assets/programmer.png"
import {Link as Dlink} from "react-scroll"

function Home({handlemode,mode}) {
  return (
    <Box   justifyContent='center' id='home'  w='100%' mt="150px"  overflow='hidden' >
    
       <Flex flexWrap='wrap' margin='auto'   order={1} justify='center'  gap="50px" >
        <Box mt="70px">
           <Stack direction="column" gap="30px" order={1}>
            <Link isExternal href="https://www.linkedin.com/in/mohak-tandon/"  >  <Image  width='20px'  src={mode?"https://cdn-icons-png.flaticon.com/128/145/145807.png":"https://cdn-icons-png.flaticon.com/512/220/220343.png"}></Image></Link>
             <Link isExternal href='https://github.com/Mohak973'> <Image  width='20px'   src={mode?"https://cdn-icons-png.flaticon.com/128/733/733553.png":"https://cdn-icons-png.flaticon.com/128/11389/11389447.png"}></Image></Link>
             <Link  isExternal href='https://gmail.com'> <Image  width='20px'  src={mode?"https://cdn-icons-png.flaticon.com/128/9068/9068642.png":"https://cdn-icons-png.flaticon.com/512/3781/3781605.png"}></Image></Link>
           </Stack>
        </Box >
        <Box textAlign="left"  order={{base:"3",sm:"3",md:"2",lg:"2"}} mt='10px' ml={{base:'10px'}} mr={{base:"10px"}} >
           <Text color='#a6a6a6' fontSize='35px' mt="20px" fontWeight='bold' zIndex={0}>Hi,I'am Mohak Tandon</Text>
           <Text color="#a6a6a6">Frontend developer</Text>
           <Text color="#a6a6a6" mt="10px">Enthusiatic in Web development and web designing</Text>
           <Dlink to='contact'   href="#" smooth={true} offset={50} duration={600}> <Button color="#FFFFFF" mt="30px" _hover={{textDecoration:"none"}} backgroundColor='#8A3FFC'  >Contact Me</Button></Dlink>
          
        </Box>
        <Box  h="250px"  order={{base:'2',sm:"2",md:'3',lg:'3'}}>
        
        <Image src={mypic} boxSize="250px"   backgroundColor="#8A3FFC"  borderRadius="50%"></Image>
        </Box>
       </Flex>

       </Box> 
  );
}

export default Home;