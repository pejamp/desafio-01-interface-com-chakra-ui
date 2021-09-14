import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

export function Banner() {

  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('./Background.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "28", "36"]}
      >
        <Box>
          <Heading 
            lineHeight={["30px", "54px"]} 
            color="gray.50" 
            fontWeight="medium" 
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
          >
            5 Continentes,<br />infinitas possibilidades.
          </Heading>
          <Text
            color="gray.100"
            opacity="85%"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxWidth={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Box>
        <Image 
          src="./Airplane.svg"
          alt="Avião voando entre as nuvens"
          w={["300px", "300px", "300px", "430px"]}
          display={['none', 'none', 'block']}
          ml="8"
          transform="translateY(56px)"
        />
      </Flex>
    </Flex>
  );
}