import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import SocialIcons from "./socialIcons";
import Jay from "../assets/jay.svg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <>
      <Box
        position={{ base: "fixed", md: "fixed" }}
        zIndex="1"
        paddingInline={{ base: ".1rem", md: "auto" }}
        width={{ base: "100vw", md: "100%" }}
      >
        <Box
          minH="80vh"
          width="90%"
          paddingY={{ base: "4rem", md: "2rem" }}
          marginInline="auto"
        >
          <Box display="flex" justifyContent="space-between">
            <Box marginTop="2rem" display={{ base: "none", md: "flex" }}>
              <SocialIcons heyt="25rem" direction="column" />
            </Box>
            <Box width="100%" justifyContent="center" display="flex">
              <Box
                display="flex"
                flexDir="column"
                justifyContent="center"
                textAlign="center"
                width="fit-content"
              >
                <Box display="flex" justifyContent="center" marginBlock=".5rem">
                  <Image
                    w={{ base: "6rem", md: "8rem" }}
                    src={Jay}
                    alt="Jhunyour Icon"
                  />
                </Box>
                <Heading
                  fontSize={{ base: "3rem", md: "4rem" }}
                  fontWeight="600"
                  color="blaq"
                >
                  Hello.
                </Heading>
                <Text
                  color="blaq"
                  fontWeight="500"
                  fontSize={{ base: "1rem", md: "2rem" }}
                >
                  I’m Muhammad Junior Adamu
                </Text>
                <Text color="blaq" fontSize={{ base: ".8rem", md: "1.5rem" }}>
                  A Product Designer, Designing accessible experiences that
                  matches users mental model
                </Text>
                <Flex
                  marginBlock="1rem"
                  flexDir={{ base: "column", md: "row" }}
                  placeItems="center"
                  justifyContent={{ base: "center", md: "space-around" }}
                  color="blaq"
                  w={{ base: "70vw", md: "50vw" }}
                  display="flex"
                  marginInline="auto"
                  width="fit-content"
                >
                  <Flex
                    width="fit-content"
                    columnGap="1rem"
                    alignItems="center"
                  >
                    <AiFillStar color="#FCD53F" />
                    <Text>Product Designer</Text>
                  </Flex>
                  <Flex
                    width="fit-content"
                    columnGap="1rem"
                    alignItems="center"
                  >
                    <AiFillStar color="#FCD53F" />
                    <Text>Brand Designer</Text>
                  </Flex>
                  <Flex
                    width="fit-content"
                    columnGap="1rem"
                    alignItems="center"
                  >
                    <AiOutlineStar color="#FCD53F" />
                    <Text color="#969696">Front-end Developer (In View)</Text>
                  </Flex>
                </Flex>
                <Flex justifyContent="center" columnGap="3rem">
                  <Box>
                    <Button
                      width={{ base: "8rem", md: "15rem" }}
                      colorScheme="primary"
                      _active={{ bgColor: "primary" }}
                      bgColor="transparent"
                      color="primary"
                      border="2px solid #093450"
                      fontSize={{ base: ".8rem", md: "1rem" }}
                    >
                      View My Resume
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      fontSize={{ base: ".8rem", md: "1rem" }}
                      width={{ base: "8rem", md: "15rem" }}
                      colorScheme="primary"
                      _active={{ bgColor: "secondary" }}
                      bgColor="primary"
                      color="white"
                    >
                      About Me
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {isVisible && (
        <Box
          position="relative"
          bottom="0"
          left="0"
          right="0"
          top={{ base: "2vh", md: "85vh" }}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
          color="primary"
          bgColor="#FCD53F"
          h="2rem"
        >
          <marquee>
            \\Scroll Down to See Projects \\ Scroll Down to See Projects \\
            Scroll Down to See Projects \\ Scroll Down to See Projects \\ Scroll
            Down to See Projects \\ Scroll Down to See Projects \\ Scroll Down
            to See Projects
          </marquee>
        </Box>
      )}
      <Box
        zIndex={1}
        position="relative"
        top={{ base: "75vh", md: "85vh" }}
        h="80vh"
        bgColor="primary"
      >
        Overlay me on the other content
      </Box>
    </>
  );
};

export default Home;