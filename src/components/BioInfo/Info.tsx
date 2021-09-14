import { Flex, Heading, Popover, PopoverTrigger, Text, Icon, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function Info() {
  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow" fontWeight="500">50</Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.300">países</Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow" fontWeight="500">60</Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.300">línguas</Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow" fontWeight="500">27</Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.300">
          cidades +100

          <Popover>
            <PopoverTrigger>
              <span>
                <Icon 
                  cursor="pointer" 
                  as={RiInformationLine} 
                  ml="1" 
                  color="gray.200"
                  w={["10px", "16px"]} 
                  h={["10px", "16px"]}
                  opacity="60%"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.50" color="gray.200">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                Paris, Chile, Canadá 
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}