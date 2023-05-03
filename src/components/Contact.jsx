import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
  const form = useRef();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kb2ys59",
        "template_7g8aw1d",
        form.current,
        "on9sfn0_hYlZ_FBMD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const { hasCopied, onCopy } = useClipboard("er.mohak97@gmail.com");

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      align="center"
      justify="center"
      bgColor={"transparent"}
      id="contact"
    >
      <div data-aos="fade-down-left">
        {/* <HashScroll hash="#contact">
          <section></section>
        </HashScroll> */}

        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
                color="#8A3FFC"
              >
                Get in Touch
              </Heading>

              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: "row", md: "column" }}
                >
                  <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <IconButton
                     color='white'
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: "#03ddf0",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>

                  <Link href="https://github.com/Mohak973">
                    <IconButton
                     color='white'
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: "#03ddf0",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>

                  <Link href="https://twitter.com/mohaktandon3?t=xtvpBvqVqa9VT0zjYuSt5Q&s=09">
                    <IconButton
                    color='white'
                      aria-label="twitter"
                      variant="ghost"
                      size="lg"
                      icon={<BsTwitter size="28px" />}
                      _hover={{
                        bg: "#03ddf0",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>

                  <Link href="https://www.linkedin.com/in/mohak-tandon/">
                    <IconButton
                     color='white'
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: "#03ddf0",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>
                </Stack>

                <Center>
                  <Box width={{ base: "80%", lg: "100%" }} mt="5%">
                    <form ref={form} onSubmit={sendEmail}>
                      <FormLabel>Name</FormLabel>
                      <Input type="text" placeholder="Name" color='White' name="user_name" />
                      <FormLabel>Email</FormLabel>
                      <Input type="email" placeholder="Email" color='White' name="user_email" />

                      <FormLabel>Message</FormLabel>
                      <Textarea
                      color='White'
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                      />
                      <Button
                      
                        colorScheme="blue"
                        bg="#8A3FFC"
                        color="white"
                        type="submit"
                        _hover={{
                          bg: "green.500",
                        }}
                        mt="5%"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Box>
                </Center>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </div>
    </Flex>
  );
}