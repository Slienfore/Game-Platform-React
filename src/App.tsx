import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

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

      {/* 适配设备:大屏幕才展示 aside, 小屏幕隐藏
                  above is similar to "min-width"
                  below is similarx to "max-width"
       */}
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
