import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import SocialIcons from "./socialIcons";
import Jay from "../assets/jay.svg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProjectView from "./projects/projectView";
import Footer from "./footer";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 15;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Box
        position={{ base: "fixed", md: "fixed" }}
        zIndex={0}
        paddingInline={{ base: ".1rem", md: "auto" }}
        width={{ base: "100vw", md: "100%" }}>
        <Box
          paddingTop={{ base: "4rem", md: "5rem" }}
          minH="80vh"
          width="90%"
          marginInline="auto">
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
                width="fit-content">
                <Box display="flex" justifyContent="center" marginBlock=".5rem">
                  <Image
                    w={{ base: "6rem", md: "8rem" }}
                    src={Jay}
                    alt="Jhunyour Icon"
                  />
                </Box>
                <Heading
                  fontSize={{ base: "1rem", md: "2rem" }}
                  fontWeight="600"
                  color="#7d7d7d">
                  Hello.
                </Heading>
                <Text
                  color="blaq"
                  fontWeight="500"
                  fontSize={{ base: "2rem", md: "3rem" }}>
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
                  width="fit-content">
                  <Flex
                    width="fit-content"
                    columnGap="1rem"
                    alignItems="center">
                    <AiFillStar color="#FCD53F" />
                    <Text>Product Designer</Text>
                  </Flex>
                  <Flex
                    width="fit-content"
                    columnGap="1rem"
                    alignItems="center">
                    <AiFillStar color="#FCD53F" />
                    <Text>Brand Designer</Text>
                  </Flex>
                  <Flex
                    width="fit-content"
                    columnGap="1rem"
                    alignItems="center">
                    <AiOutlineStar color="#FCD53F" />
                    <Text color="#969696">Front-end Developer (In View)</Text>
                  </Flex>
                </Flex>
                <Flex justifyContent="center" columnGap="3rem" marginTop="1rem">
                  <Box>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1Pniow5sTRF7G-T8nkSylORoDUDj1HyNk/view?usp=share_link">
                      <Button
                        width={{ base: "8rem", md: "15rem" }}
                        colorScheme="primary"
                        _active={{ bgColor: "primary" }}
                        bgColor="transparent"
                        color="primary"
                        _hover={{
                          bgColor: "primary",
                          color: "white",
                        }}
                        h="2.5rem"
                        fontWeight="normal"
                        border="2px solid #093450"
                        fontSize={{ base: ".8rem", md: "1rem" }}>
                        View My Resume
                      </Button>
                    </a>
                  </Box>
                  <Box>
                    <Link to="/about-me">
                      <Button
                        fontSize={{ base: ".8rem", md: "1rem" }}
                        width={{ base: "8rem", md: "15rem" }}
                        colorScheme="primary"
                        h="2.5rem"
                        fontWeight="normal"
                        _hover={{
                          bgColor: "transparent",
                          color: "black",
                          border: "2px solid #093450",
                        }}
                        _active={{ bgColor: "secondary" }}
                        bgColor="primary"
                        color="white">
                        About Me
                      </Button>
                    </Link>
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
          top={{ base: "2vh", md: "80vh" }}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
          color="primary"
          bgColor="#FCD53F"
          h="2rem"
          marginTop="2rem">
          <marquee>
            \\Scroll Down to See Projects \\ Scroll Down to See Projects \\
            Scroll Down to See Projects \\ Scroll Down to See Projects \\ Scroll
            Down to See Projects \\ Scroll Down to See Projects \\ Scroll Down
            to See Projects
          </marquee>
        </Box>
      )}
      <Box
        zIndex="99"
        position="relative"
        top={{ base: "70vh", md: "100vh" }}
        h="fit-content"
        bgColor="white"
        w={{ base: "100%", md: "100%" }}>
        <Box bgColor="white">
          <Box
            id="projects"
            marginBottom="2rem"
            marginInline="auto"
            w="fit-content">
            <ProjectView />
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Home;
