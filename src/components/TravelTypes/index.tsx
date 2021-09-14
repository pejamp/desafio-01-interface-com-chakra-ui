import { Grid, GridItem } from "@chakra-ui/react";
import { Type } from "./Type";

export default function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxWidth={1160}
      gap={[1, 5]}
    >
      <GridItem>
        <Type icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Type icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Type icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Type icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Type icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}