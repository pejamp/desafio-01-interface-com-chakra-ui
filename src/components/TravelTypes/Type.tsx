import { Flex, useBreakpointValue, Image, Text } from "@chakra-ui/react";

interface TypeProps {
  icon: string;
  text: string;
}

export function Type({ icon, text }: TypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      { isWideVersion ? <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb="6" /> : <Text color="yellow" fontSize="4xl" mr="2">•</Text> }
      <Text fontWeight="600" color="gray.300" fontSize={["md", "xl", "2xl"]}>{text}</Text>
    </Flex>
  );
}