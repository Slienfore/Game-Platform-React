import { Grid, GridItem, Show } from "@chakra-ui/react";

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
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      {/* 适配设备:大屏幕才展示 aside, 小屏幕隐藏
                  above is similar to "min-width"
                  below is similar to "max-width"
       */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
