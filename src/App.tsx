import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        // mobile device
        base: `"nav" "main"`,
        // large device
        lg: `"nav nav"
             "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      {/* Show: Show the children if the media query matches

           适配设备: 大屏幕才展示 aside, 小屏幕隐藏
                  above is similar to "min-width"
                  below is similar to "max-width"
       */}
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading></GameHeading>

          <Flex marginBottom={5}>
            <Box marginRight={5}>
              {/* Platform filter selector */}
              <PlatformSelector></PlatformSelector>
            </Box>

            <SortSelector></SortSelector>
          </Flex>
        </Box>

        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
