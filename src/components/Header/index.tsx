import { Flex, Grid, Image, Link, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { RiArrowLeftSLine } from "react-icons/ri"

export function Header() {
  const { asPath } = useRouter();
  const isHomePage = asPath === "/";

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h={["50px", "100px"]}
      mx="auto"
      px="6"
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        w="100%"
        mx="auto"
        maxWidth={1160}
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
      >
        { !isHomePage && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
            </a>
          </Link>
        ) }
        <Image 
          src="/Logo.svg" 
          alt="Logo Worldtrip" 
          w={["81px", "184px"]}
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}