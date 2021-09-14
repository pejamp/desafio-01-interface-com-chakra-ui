import { Divider, Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import Slide from "../components/Slide";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />

      <Divider 
        w={["60px", "90px"]} 
        mx="auto" 
        h="2px" 
        bg="gray.300" 
        mt={["9", "20"]}
        mb={["6", "14"]} 
      />
    
      <Heading
        fontSize={["lg", "3xl", "4xl"]}
        mb={["5", "14"]}
        textAlign="center"
        fontWeight="500"
        lineHeight={["30px", "54px"]} 
      >
        Vamos nessa? <br />Então escolha seu continente
      </Heading>

      <Slide />
    </Flex>
  )
}
