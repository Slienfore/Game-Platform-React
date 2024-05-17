import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  // useColorMode is a hook to access to the current color mode, and a function to toggle the color mode
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green" // change the checked background color of the switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
